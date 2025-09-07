import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from joblib import dump
rng = np.random.default_rng(42)

# Synthetic samples: features = [income_monthly, other_debt, housing_cost, principal, term_months, ltv, dti]
N = 4000
income = rng.normal(5000, 1500, N).clip(1500, 15000)
other_debt = rng.normal(400, 300, N).clip(0, 2500)
housing = rng.normal(1500, 600, N).clip(0, 4000)
principal = rng.normal(25000, 8000, N).clip(5000, 60000)
term = rng.choice([36, 48, 60, 72, 84], N)
ltv = (principal / np.maximum(principal + rng.normal(3000, 3000, N), 8000)).clip(0.5, 1.3)
# fake monthly payment approx
apr = 0.08
r = apr/12
n = term
pmt = (r*principal) / (1 - (1+r)**(-n))
dti = (other_debt + housing + pmt) / income

# Default probability “ground truth” from ltv & dti (plus some noise)
logit = -3.2 + 2.8*(ltv-0.9) + 3.5*(dti-0.35) + rng.normal(0, 0.6, N)
pd = 1 / (1 + np.exp(-logit))
y = rng.binomial(1, pd)

X = np.column_stack([income, other_debt, housing, principal, term, ltv, dti])
pipe = Pipeline([("scaler", StandardScaler(with_mean=True, with_std=True)),
                 ("lr", LogisticRegression(max_iter=200))])
pipe.fit(X, y)

dump(pipe, "model.joblib")
with open("VERSION", "w") as f:
    f.write("1.0.0\n")
print("Trained model -> model.joblib (v1.0.0)")
