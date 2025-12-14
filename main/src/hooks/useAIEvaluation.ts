import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export function useAIEvaluation() {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runAIAnalysis = async (repoData: any) => {
    try {
      setLoading(true);
      setError(null);

      const prompt = `
You are an expert software mentor.
Analyze the GitHub repository data below and provide:

1. Score / Rating (0-100)
2. Short written summary (2–3 sentences)
3. Personalized roadmap of actionable steps

Output STRICTLY in this format:

**Score:** <number>/100
**Summary:** <text>
**Roadmap:**
- <step>
- <step>
- <step>

Repository raw data:
${JSON.stringify(repoData, null, 2)}
`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      setAnalysis(response.text);
    } catch (err: any) {
      console.error(err);
      setError("AI evaluation failed");
    } finally {
      setLoading(false);
    }
  };

  return { analysis, loading, error, runAIAnalysis };
}
