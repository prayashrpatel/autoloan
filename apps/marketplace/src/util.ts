export function payment(aprPct: number, nMonths: number, principal: number): number {
    const r = (aprPct / 100) / 12;
    return r === 0 ? principal / nMonths : (r * principal) / (1 - Math.pow(1 + r, -nMonths));
  }
  export const round2 = (n: number) => Math.round(n * 100) / 100;