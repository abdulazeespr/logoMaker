const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
//   async function run() {
   export const AIDesignIdea = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: " Based on Logo of type : food Generate a text prompt to create Logo for Logo title/Brand name : foodie with description: man eating food and refering to prompt: {        prompt:'Create a sophisticated and elegant logo design that is inspired by nature and vintage aesthetics. The logo should incorporate elements of symbolism, intricate details, and a touch of mystery. Use a combination of typography, line art, and subtle color palettes to create a timeless and visually striking design. The logo should convey a sense of luxury, tradition, and quality.'\n. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field',\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"ideas\": [\n    \"Man enjoying gourmet bite\",\n    \"Elegant line art eater\",\n    \"Vintage fork with face\", \n     \"Mysterious foodie silhouette\",\n     \"Refined eater with spoon\"\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
//     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     console.log(result.response.text());
//   }
  
