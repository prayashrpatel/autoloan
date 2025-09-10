import express, { Request, Response } from "express";
import cors from "cors";
import * as path from "node:path";

const app = express();
const PORT = Number(process.env.MARKETPLACE_PORT ?? 3003);
const API_URL = process.env.API_URL ?? "http://localhost:3001";

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/score", async (req: Request, res: Response): Promise<void> => {
  try {
    const r = await fetch(`${API_URL}/api/score`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(req.body),
    });
    res.json(await r.json());
  } catch (err) {
    const message = err instanceof Error ? err.message : "proxy error";
    res.status(500).json({ error: message });
  }
});

const PUBLIC_DIR = path.join(process.cwd(), "src", "public");
app.use(express.static(PUBLIC_DIR));
app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Marketplace on http://localhost:${PORT}`);
});
