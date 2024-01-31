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
        const requestBody = JSON.parse(event.body);
        const team = requestBody.team;
        const promptMessage = {
            max: "god?",
            contentx: `Write a short paragraph as Mewthree, the new version of Mewtwo.  A pokemon trainer has challenged you with a team of ${team.join(', ')} Briefly describe the fight.`
        };
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: promptMessage.contentx },
              ],
          });
          console.log(completion.choices[0]);
          const summary = completion.choices[0];
        return {
            statusCode: 200,
            body: JSON.stringify({ summary })
        };
    } catch (error) {
        console.error("Errorrrr6 generating Pokémon team summary simp:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internallll Server Error Simp" })
        };
    }
};
