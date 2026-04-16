type VercelRequestLike = {
  method?: string;
  url?: string;
};

type VercelResponseLike = {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponseLike;
  json(body: unknown): void;
};

const HEALTHY_RESPONSE = { status: "ok" } as const;

export default function handler(
  req: VercelRequestLike,
  res: VercelResponseLike,
) {
  const pathname = (req.url ?? "/api").split("?")[0];

  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "GET" && pathname === "/api/healthz") {
    res.status(200).json(HEALTHY_RESPONSE);
    return;
  }

  res.status(404).json({
    error: "Not Found",
    message: "Only GET /api/healthz is available in the Vercel deployment.",
  });
}
