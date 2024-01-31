const OpenAI = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }
    try {
        const requestBody = JSON.parse(event.body); // idk why I need this now
        const team = requestBody.team;
        const promptMessage = {
            max: "god?",
            contentx: `Write a paragraph as Mewthree, the new version of Mewtwo, vs. ${team.join(', ')} Describe the fight.`
        };
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: promptMessage.contentx },
              ],
                temperature: 0.7, // Adjust as needed
                max_tokens: 160, // Adjust based on your needs
          });
          console.log(completion.choices[0]);
          const summary = completion.choices[0];
        return {
            statusCode: 200,
            body: JSON.stringify({ summary })
        };
    } catch (error) {
        console.error("Errorrrr77 generating Pokémon team summary simp:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internallll Server Error Simpy" })
        };
    }
};