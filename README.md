# Auto Loan Calculator

A simple end-to-end demo that takes borrower and vehicle info, computes affordability metrics, scores risk with an ML model, applies hard rules, and (optionally) queries lender APIs to return ranked offers.

## How It Works (Story Level)
1. **Borrower inputs**: vehicle price, down payment, trade-in, fees, tax rate, term, state; plus monthly income, housing cost, and other debt.
2. **App computes features**: LTV (loan-to-value), DTI (debt-to-income), and affordability.
3. **AI risk model**: returns **PD (probability of default)** with confidence.
4. **Rule engine**: enforces hard rules (e.g., max LTV, min income, PD threshold).
5. **Lender APIs (optional)**: partners receive a minimal profile + score and return offers.
6. **Offer ranking**: offers are re-ranked by risk-adjusted APR and displayed to the user.

![System Diagram](./docs/auto-loan-flow.png)

## Key Metrics
- **PD (Probability of Default)**: model-estimated likelihood the borrower will default (0–1).
- **LTV (Loan‑to‑Value)**: `loanAmount / vehiclePrice`. Lower is safer.
- **DTI (Debt‑to‑Income)**: `(housing + otherDebt) / income`. Lower is safer.

## Dev Quickstart
```bash
# Backend
cd api
npm install
npm run dev   # exposes /health, /score, etc.

# Frontend
cd web
npm install
npm run dev   # open http://localhost:3000
```

## Example API Shape
**POST /score** (example)
```json
{
  "vehiclePrice": 30000,
  "downPayment": 5000,
  "tradeIn": 0,
  "fees": 600,
  "taxRate": 8.5,
  "termMonths": 60,
  "state": "CA",
  "incomeMonthly": 6000,
  "otherDebtMonthly": 400,
  "housingCost": 1800
}
```
**Response**
```json
{
  "ltv": 0.83,
  "dti": 0.37,
  "pd": 0.07,
  "decision": "approve"
}
```

## Tech Stack
- Next.js (UI), Express/Node (API)
- Zod for request validation
- Simple ML model (e.g., Logistic Regression; can upgrade to XGBoost/NN later)
- Optional: GitHub Actions for CI
```

