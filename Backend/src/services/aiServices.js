// src/services/aiService.js
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateScenario = async (prompt) => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4o"
      messages: [{ role: "user", content: `What if: ${prompt}` }],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("❌ AI Error:", error);
    throw new Error("Failed to generate scenario");
  }
};
