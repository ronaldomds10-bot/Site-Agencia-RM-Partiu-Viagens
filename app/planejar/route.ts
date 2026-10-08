import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const [home, planner] = await Promise.all([
    readFile(path.join(process.cwd(), "index.html"), "utf8"),
    readFile(path.join(process.cwd(), "planejar.html"), "utf8"),
  ]);
  const styles = home.match(/<style>[\s\S]*?<\/style>/)?.[0] ?? "";
  return new NextResponse(planner.replace("<!-- shared-styles -->", styles), {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  });
}
