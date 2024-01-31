const OpenAI = require("openai");

const openai = new OpenAI();

async function main(promptContent) {
    try{

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: promptContent },
              ],
          });
          console.log("starting bot");
          console.log(completion.choices[0]);
          console.log("ending bot");
    }
    catch (error) {
        console.error("Error4:", error);
      }
  
}
// Example usage with a custom prompt
const badPrompt = "what is 4*4 and how many squares are on a chessboard?";
const customPrompt = "Tell me a short fun story about a girl named Bella and her dog.";
main(badPrompt);

// successfully getting intelligent responses from the chatbot