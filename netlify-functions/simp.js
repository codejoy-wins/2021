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
        const trainer = team.join(', ');
        const promptMessage = 
            `Write a paragraph from your perspective describing the fight vs. ${trainer}`
        ;
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are Mewthree, a new and evolved version of Mewtwo" },
                { role: "user", content: promptMessage },
              ],
                temperature: 0.8, // Adjust as needed
                max_tokens: 220, // Adjust based on your needs
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