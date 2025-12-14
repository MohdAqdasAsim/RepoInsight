import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function evaluateWithAI(context: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: context,
  });

  return response.text;
}
