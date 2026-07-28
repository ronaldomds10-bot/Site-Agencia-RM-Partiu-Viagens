import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const WHATSAPP_NUMBER = "5511987569836";

function clean(value: unknown, maxLength = 180) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const name = clean(body.name, 80);
  const destination = clean(body.destination, 100);
  const date = clean(body.date, 80);
  const travelers = clean(body.travelers, 40);
  const style = clean(body.style, 80);
  const notes = clean(body.notes, 260);

  if (!name || !destination) {
    return NextResponse.json(
      { error: "Nome e destino são obrigatórios." },
      { status: 400 },
    );
  }

  const lines = [
    "Olá! Vim pelo site da RM Partiu Viagens e quero uma cotação.",
    `Nome: ${name}`,
    `Destino: ${destination}`,
    date ? `Data prevista: ${date}` : "Data prevista: ainda estou definindo",
    travelers ? `Viajantes: ${travelers}` : "Viajantes: a definir",
    style ? `Tipo de viagem: ${style}` : "Tipo de viagem: a definir",
    notes ? `Detalhes: ${notes}` : "",
  ].filter(Boolean);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lines.join("\n"),
  )}`;

  return NextResponse.json({
    ok: true,
    whatsappUrl,
  });
}
