import Anthropic from "@anthropic-ai/sdk";
import { systemPrompt } from "./contexts";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function chatWithClaude(
  userMessage: string,
  conversationHistory: Message[] = []
): Promise<string> {
  try {
    // Add the new user message to history
    const messages: Message[] = [
      ...conversationHistory,
      { role: "user", content: userMessage },
    ];

    // Call Claude API
    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    // Extract the response text
    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    if (!assistantMessage) {
      throw new Error("No response from Claude");
    }

    return assistantMessage;
  } catch (error) {
    console.error("Claude API Error:", error);
    throw error;
  }
}
