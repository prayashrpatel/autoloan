import React, { useMemo, useState } from "react";

// ---------- Types ----------
type Form = {
  vehiclePrice: number;
  downPayment: number;
  tradeIn: number;
  fees: number;
  taxRatePct: number;
  termMonths: number;
  state: string;
  incomeMonthly: number;
  otherDebtMonthly: number;
  housingCost: number;
};

type Offer = {
  lenderId: string;
  lenderName: string;
  apr: number;
  termMonths: number;
  financed: number;
  monthlyPayment: number;
};

// ---------- Small UI helpers ----------
const Card: React.FC<{ title?: string; children: React.ReactNode; style?: React.CSSProperties }> = ({
  title,
  children,
  style,
}) => (
  <div
    style={{
      background: "#0b0b0c",
      border: "1px solid #1a1a1c",
      borderRadius: 14,
      padding: 18,
      boxShadow: "0 1px 0 #161618, inset 0 1px 0 rgba(255,255,255,0.02)",
      ...style,
    }}
  >
    {title && (
      <div style={{ color: "#e8e8ea", fontWeight: 800, fontSize: 15, marginBottom: 12 }}>{title}</div>
    )}
    {children}
  </div>
);

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 12,
      alignItems: "center",
      marginBottom: 12,
    }}
  >
    <label style={{ color: "#9a9aa2", fontSize: 13 }}>{label}</label>
    {children}
  </div>
);

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "#0e0e10",
  color: "#f0f0f2",
  border: "1px solid #25252a",
  borderRadius: 10,
  padding: "12px 14px",
  outline: "none",
};

const InputNumber: React.FC<{ value: number; onChange: (n: number) => void }> = ({ value, onChange }) => (
  <input
    value={String(value)}
    onChange={(e) => onChange(Number(e.target.value || 0))}
    inputMode="numeric"
    style={inputBase}
  />
);

const InputText: React.FC<{ value: string; onChange: (s: string) => void }> = ({ value, onChange }) => (
  <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ ...inputBase, textTransform: "uppercase" }}
  />
);

const Button: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      background: "#ffffff",
      color: "#000",
      fontWeight: 800,
      border: "none",
      borderRadius: 10,
      padding: "12px 16px",
      cursor: "pointer",
    }}
  >
    {children}
  </button>
);

// ---------- Page ----------
export function Page() {
  const [form, setForm] = useState<Form>({
    vehiclePrice: 100000,
    downPayment: 10000,
    tradeIn: 0,
    fees: 0,
    taxRatePct: 10,
    termMonths: 120,
    state: "CA",
    incomeMonthly: 0,
    otherDebtMonthly: 0,
    housingCost: 0,
  });

  function set<K extends keyof Form>(key: K, val: Form[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  const financed = useMemo(() => {
    const taxable = Math.max(0, form.vehiclePrice - form.downPayment - form.tradeIn);
    const tax = (form.taxRatePct / 100) * taxable;
    return Math.max(0, taxable + form.fees + tax);
  }, [form]);

  const dtiPct = useMemo(() => {
    const debt = form.otherDebtMonthly + form.housingCost;
    return form.incomeMonthly > 0 ? (debt / form.incomeMonthly) * 100 : 0;
  }, [form]);

  async function getOffers() {
    try {
      const rsp = await fetch("/score", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, financed }),
      });
      const data = await rsp.json();
      // replace this with rendering offers; keeping alert to match your screenshot
      alert("Fetch lenders here (wire to your API)");
      console.log("score response:", data);
    } catch (e) {
      alert("Failed to fetch offers");
      console.error(e);
    }
  }

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          padding: "28px 24px 10px",
          fontSize: 36,
          fontWeight: 900,
          letterSpacing: 0.2,
          textShadow: "0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        Auto Loan Calculator
      </div>

      {/* Content */}
      <div
        style={{
          width: "100%",
          padding: "24px 40px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",   // left = wider form, right = offers
          gap: 24,
          alignItems: "start",
        }}
      >
        {/* Left column */}
        <div style={{ display: "grid", gap: 20 }}>
          <Card title="Vehicle & Deal">
            <Row label="Vehicle Price ($)">
              <InputNumber value={form.vehiclePrice} onChange={(n) => set("vehiclePrice", n)} />
            </Row>
            <Row label="Down Payment ($)">
              <InputNumber value={form.downPayment} onChange={(n) => set("downPayment", n)} />
            </Row>
            <Row label="Trade-In ($)">
              <InputNumber value={form.tradeIn} onChange={(n) => set("tradeIn", n)} />
            </Row>
            <Row label="Fees ($)">
              <InputNumber value={form.fees} onChange={(n) => set("fees", n)} />
            </Row>
            <Row label="Tax Rate (%)">
              <InputNumber value={form.taxRatePct} onChange={(n) => set("taxRatePct", n)} />
            </Row>
            <Row label="Term (months)">
              <InputNumber value={form.termMonths} onChange={(n) => set("termMonths", n)} />
            </Row>
            <Row label="State (2-letter)">
              <InputText value={form.state} onChange={(s) => set("state", s.toUpperCase())} />
            </Row>
          </Card>

          <Card title="Income & Debts (Monthly)">
            <Row label="Income ($/mo)">
              <InputNumber value={form.incomeMonthly} onChange={(n) => set("incomeMonthly", n)} />
            </Row>
            <Row label="Other Debt ($/mo)">
              <InputNumber value={form.otherDebtMonthly} onChange={(n) => set("otherDebtMonthly", n)} />
            </Row>
            <Row label="Housing Cost ($/mo)">
              <InputNumber value={form.housingCost} onChange={(n) => set("housingCost", n)} />
            </Row>
          </Card>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Button onClick={getOffers}>Get Offers</Button>
            <div style={{ color: "#bdbdc2", fontSize: 14 }}>
              Financed: ${financed.toLocaleString()} • DTI: {dtiPct.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Right column (Offers) */}
        <Card title="Offers" style={{ minHeight: 280 }}>
          <div style={{ color: "#9a9aa2", fontSize: 14 }}>No offers yet.</div>
        </Card>
      </div>
    </div>
  );
}

export default Page;
