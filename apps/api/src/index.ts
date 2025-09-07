import express from "express";
import cors from "cors";
import { z } from "zod";

const app = express();
const PORT = process.env.API_PORT ? Number(process.env.API_PORT) : 3001;

app.use(cors());
app.use(express.json());

// ---------- Validation Schema ----------
const LoanSchema = z.object({
  vehiclePrice: z.coerce.number().positive(),
  downPayment: z.coerce.number().min(0),
  tradeIn: z.coerce.number().min(0).default(0),
  fees: z.coerce.number().min(0).default(0),
  taxRate: z.coerce.number().min(0).max(100).default(0),
  termMonths: z.coerce.number().int().positive(),
  // transform first, then validate with .pipe() to avoid effects-type issue
  state: z.string().trim().transform((s) => s.toUpperCase()).pipe(z.string().length(2)),
  incomeMonthly: z.coerce.number().positive(),
  otherDebtMonthly: z.coerce.number().min(0),
  housingCost: z.coerce.number().min(0).default(0),
});

// ---------- Helpers ----------
function monthlyPayment(principal: number, aprPercent: number, termMonths: number) {
  const r = (aprPercent / 100) / 12; // monthly rate
  if (r === 0) return principal / termMonths;
  return (principal * r) / (1 - Math.pow(1 + r, -termMonths));
}

function buildOffers(principal: number, termMonths: number, ltv: number, dti: number) {
  // simple APR tiering based on risk; tweak as you like
  let baseApr = 9.99;
  if (ltv < 0.90 && dti < 0.35) baseApr = 5.99;
  else if (ltv < 1.00 && dti < 0.40) baseApr = 6.99;
  else if (ltv < 1.10 && dti < 0.45) baseApr = 7.99;

  const lenders = [
    { name: "FastAuto Finance", spread: 0.0, perks: "Same-day decision" },
    { name: "Roadster Bank", spread: 0.5, perks: "Rate lock 30 days" },
    { name: "Highway Credit Union", spread: 1.0, perks: "No prepayment penalty" },
  ];

  return lenders.map((l) => {
    const apr = Math.max(3.99, baseApr + l.spread);
    const monthly = Math.round(monthlyPayment(principal, apr, termMonths));
    return {
      lender: l.name,
      apr: Number(apr.toFixed(2)),
      monthly,
      termMonths,
      principal,
      notes: l.perks,
    };
  });
}

// ---------- Routes ----------
app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "api", port: PORT });
});

app.post("/evaluate", (req, res) => {
  const parsed = LoanSchema.safeParse(req.body);

  if (!parsed.success) {
    // Uncomment for local debugging:
    // console.error("Bad payload:", req.body);
    // console.error("Zod issues:", parsed.error.issues);
    return res.status(400).json({
      error: "invalid_payload",
      issues: parsed.error.issues, // tells the frontend exactly what failed
    });
  }

  try {
    const data = parsed.data;

    // Derived metrics
    const principal = data.vehiclePrice - data.downPayment - data.tradeIn + data.fees;
    const ltv = principal / data.vehiclePrice;
    const dti = (data.otherDebtMonthly + data.housingCost) / data.incomeMonthly;

    // Simple approval logic (replace with your scoring model later)
    const approved = ltv < 1.2 && dti < 0.5;

    // Build offer set if approved
    const offers = approved ? buildOffers(principal, data.termMonths, ltv, dti) : [];

    const result = {
      approved,
      ltv,
      dti,
      principal,
      offers, // <= frontend can render these directly
    };

    res.json(result);
  } catch (err: any) {
    res.status(500).json({
      error: "evaluation_failed",
      detail: err?.message ?? "unknown",
    });
  }
});

// ---------- Start ----------
app.listen(PORT, () => {
  console.log(`[api] listening on http://localhost:${PORT}`);
});
