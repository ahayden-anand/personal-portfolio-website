
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES } from "../constants";

const CONTEXT = `
  You are the AI assistant for ${PERSONAL_INFO.name}'s portfolio.
  Hayden is a ${PERSONAL_INFO.role}.
  
  Details:
  - Bio: ${PERSONAL_INFO.bio}
  - Value Prop: ${PERSONAL_INFO.valueProp}
  - Top Projects: ${PROJECTS.map(p => `${p.title}: ${p.problem}. Impact: ${p.impact}`).join('; ')}
  - Skills: ${SKILLS.map(s => `${s.title}: ${s.skills.join(', ')}`).join('; ')}
  - Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period}). Accomplishments: ${e.description.join('. ')}`).join('; ')}

  Tone: Professional, intelligent, helpful, and industry-ready. Hayden is a student but his profile is mature and focused on growth.
  Goal: Help recruiters and peers understand Hayden's technical foundation and potential.
  Rules: Only answer based on the provided context. If asked something unrelated, politely decline.
`;

export const askAIAssistant = async (query: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently resting. Please check the resume sections below!";
  }
};
