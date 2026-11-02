import "dotenv/config";
import OpenAI from "openai";
import readline from "readline";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a song theme: ", async (theme) => {
  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: `Write a short song about ${theme}`,
  });

  console.log("\nGenerated Song:\n");
  console.log(response.output_text);

  rl.close();
});