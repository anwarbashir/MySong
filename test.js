import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: "Reply with exactly: MySong API is working",
    });

    console.log(response.output_text);
  } catch (error) {
    console.error(error);
  }
}

main();