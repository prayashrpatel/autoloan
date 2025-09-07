export type Applicant = {
    name: string;
    creditScore: number;     // 300–850
    monthlyIncome: number;   // $
    monthlyDebt: number;     // $
    loanAmount: number;      // $
    termMonths: number;      // e.g., 36, 60
  };
  
  export type Decision = {
    approved: boolean;
    score: number;     // 0–100
    apr: number;       // %
    maxOffer: number;  // $
    reasons: string[];
  };
  
  export function evaluateApplication(a: Applicant): Decision {
    const dti = a.monthlyDebt / Math.max(1, a.monthlyIncome);         // debt-to-income
    const util = a.loanAmount / Math.max(1, a.monthlyIncome * 12);    // amount vs annual income
  
    let score = 0;
    score += normalize(a.creditScore, 300, 850) * 50;  // up to 50
    score += (1 - clamp(dti, 0, 1)) * 25;             // up to 25
    score += (1 - clamp(util, 0, 1)) * 25;            // up to 25
  
    const reasons: string[] = [];
    if (dti > 0.45) reasons.push("High debt-to-income ratio");
    if (a.creditScore < 620) reasons.push("Low credit score");
    if (util > 0.5) reasons.push("Loan amount high relative to income");
  
    const approved = score >= 60 && dti <= 0.5 && a.creditScore >= 600;
  
    // crude APR curve: better score → lower APR
    const apr = Number((20 - (score / 100) * 12).toFixed(2)); // ~8%–20%
  
    // max offer as a function of income & score
    const maxOffer = Math.floor(a.monthlyIncome * 12 * (0.25 + score / 400)); // ~25%–50% annual income
  
    return { approved, score: Math.round(score), apr, maxOffer, reasons };
  }
  
  function clamp(x: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, x)); }
  function normalize(x: number, lo: number, hi: number) { return clamp((x - lo) / (hi - lo), 0, 1); }
  