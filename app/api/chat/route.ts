import { NextRequest, NextResponse } from "next/server";
import { chatWithClaude, Message } from "@/lib/claude-client";

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid message" },
        { status: 400 }
      );
    }

    // Call Claude with conversation history
    const response = await chatWithClaude(message, history || []);

    return NextResponse.json({
      success: true,
      response: response,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}
