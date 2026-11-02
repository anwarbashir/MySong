import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler(event) {
  try {
    const { theme } = JSON.parse(event.body);

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: `Write a song about ${theme}. Use plain text only.`
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        song: response.output_text
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
}