const OpenAI = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }
    const requestBody = JSON.parse(event.body);
    const team = requestBody.team;
    const promptMessage = 
        `Plan a fun date at a convenient location located in between ${team}`
    ;
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are MaxGPT, a helpful assistant that plans dates and helps people safely pursue love"},
            { role: "user", content: promptMessage },
        ],
            temperature: 0.8, // Adjust as needed. .8 was working before
            max_tokens: 1170, // Adjust based on your needs. 220 never errors
        });
    console.log(completion.choices[0]);
    const summary = completion.choices[0];
    return {
        statusCode: 200,
        body: JSON.stringify({ summary })
    };
};