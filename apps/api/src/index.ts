import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = Number(process.env.API_PORT ?? 3001);

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => res.json({ ok: true }));

app.post("/api/score", (req: Request, res: Response) => {
  // plug scoring service here if desired
  res.json({ ok: true, received: req.body });
});

app.listen(PORT, () => {
  console.log(`[api] listening on http://localhost:${PORT}`);
});
