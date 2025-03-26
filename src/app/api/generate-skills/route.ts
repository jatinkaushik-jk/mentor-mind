import { NextRequest, NextResponse } from "next/server";
import { runGemini } from "@/helpers/ai";

export async function POST(req: NextRequest) {
  try {
    const { userData } = await req.json();
    console.log("route accessed");

    const response = await runGemini(JSON.stringify(userData));
    return NextResponse.json({ recommendations: response });
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return NextResponse.json(
      { error: "Failed to fetch recommendations" },
      { status: 500 }
    );
  }
}
