from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
from pathlib import Path

# Load model + version
MODEL_PATH = Path(__file__).parent / "model.joblib"
VERSION_PATH = Path(__file__).parent / "VERSION"

model = joblib.load(MODEL_PATH)
version = VERSION_PATH.read_text().strip() if VERSION_PATH.exists() else "unknown"

# Define request schema
class Application(BaseModel):
    income_monthly: float
    other_debt_monthly: float
    housing_cost: float
    principal: float
    term_months: int
    ltv: float
    dti: float
    state: str  # placeholder for later, not used in model yet

# FastAPI app
app = FastAPI(title="Loan Scoring Service", version=version)

@app.get("/health")
def health():
    return {"ok": True, "version": version}

@app.post("/score")
def score(app_data: Application):
    # Prepare feature vector (match train.py order)
    X = np.array([
        app_data.income_monthly,
        app_data.other_debt_monthly,
        app_data.housing_cost,
        app_data.principal,
        app_data.term_months,
        app_data.ltv,
        app_data.dti,
    ]).reshape(1, -1)

    # Predict default probability
    pd = model.predict_proba(X)[0, 1]

    # Simple APR suggestion rule (example)
    base_rate = 0.05
    apr = base_rate + pd * 0.15  # riskier borrowers pay higher APR

    return {
        "pd": round(float(pd), 4),
        "recommended_apr": round(apr, 4),
        "model_version": version
    }
