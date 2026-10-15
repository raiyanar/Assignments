const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });

async function getAiDescription(title, price, category) {
  try {
    const interaction = await ai.interactions.create({
      model: "gemini-3.1-flash-lite",
      input: `Create a product description in 30 words using these information: "title: ${title}, price: ${price}, category: ${category}"`,
    });
    return interaction.output_text;
  } catch (err) {
    console.log("Error connecting to Gemini.");
  }
}

module.exports = getAiDescription;
