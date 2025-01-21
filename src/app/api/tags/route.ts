export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: Request) {
  const OLLAMA_URL = process.env.NEXT_PUBLIC_OLLAMA_URL || "http://62.72.0.213:11434";
  const res = await fetch(
    OLLAMA_URL + "/api/tags"
  );
  return new Response(res.body, res);
}
