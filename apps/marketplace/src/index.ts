import express from "express";
import cors from "cors";
import lenders from "./lenders.json";
import { payment, round2 } from "./util";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/offers/search", (req, res) => {
  const { app: appl, pd } = req.body; // expect { app, pd }
  if (!appl || typeof pd !== "number") return res.status(400).json({ error: "Missing app or pd" });

  const principal = calcPrincipal(appl);
  const dti = calcDTI(appl, principal);
  const ltv = principal / Math.max(appl.vehiclePrice, 1);

  const results = (lenders as any[])
    .filter(L => supports(L, appl, dti, ltv, principal))
    .map(L => {
      const apr = L.baseRate + (L.riskAlpha / 100) * pd + (L.marginBps / 10000) * 100;
      const term = pickTerm(L, appl.termMonths);
      const pmt = payment(apr, term, principal);
      const total = Math.round(pmt * term + (L.fees?.origination ?? 0));
      return {
        lenderId: L.id,
        lenderName: L.name,
        apr: round2(apr),
        termMonths: term,
        monthlyPayment: Math.round(pmt),
        totalCost: total,
        constraints: { maxDTI: L.maxDTI, maxLTV: L.maxLTV, fees: L.fees }
      };
    })
    .sort((a, b) => a.totalCost - b.totalCost);

  res.json({ principal, dti: round2(dti), ltv: round2(ltv), offers: results });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Marketplace on http://localhost:${PORT}`));

// --- helpers
function calcPrincipal(appl: any) {
  const taxableBase = Math.max(appl.vehiclePrice - appl.downPayment - (appl.tradeIn || 0), 0);
  const tax = (appl.taxRate || 0) / 100 * taxableBase;
  return Math.max(appl.vehiclePrice - appl.downPayment - (appl.tradeIn || 0) + tax + (appl.fees || 0), 0);
}
function calcDTI(appl: any, principal: number) {
  const r = ((appl.aprRecommended || 8.0) / 100) / 12;
  const n = appl.termMonths;
  const pmt = r === 0 ? principal / n : (r * principal) / (1 - Math.pow(1 + r, -n));
  return (appl.otherDebtMonthly + (appl.housingCost || 0) + pmt) / appl.incomeMonthly;
}
function pickTerm(L: any, requested: number) {
  const terms = (L.terms as number[]).slice().sort((a, b) => Math.abs(a - requested) - Math.abs(b - requested));
  return terms[0];
}
function supports(L: any, appl: any, dti: number, ltv: number, principal: number) {
  if (appl.state && L.states && !L.states.includes(appl.state)) return false;
  if (appl.incomeMonthly < (L.minIncomeMonthly || 0)) return false;
  if (dti > (L.maxDTI || 0.5)) return false;
  if (ltv > (L.maxLTV || 1.25)) return false;
  if (!L.terms?.length) return false;
  if (principal <= 0) return false;
  return true;
}
