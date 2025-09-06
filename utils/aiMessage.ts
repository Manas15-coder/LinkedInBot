import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateMessage(name) {
    const prompt = `Generate a short professional LinkedIn message to ${name} for networking.`;
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0].message.content || "Hello!";
}
