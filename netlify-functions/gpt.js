const { OpenAI } = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.handler = async function(event, context) {
    // Only proceed if this is a POST request
    if (event.httpMethod !== 'POST') {
        // Return a 405 Method Not Allowed response
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }
    
    try {
        // Here we know it's a POST request, so we can safely assume there is a body to parse
        const { team } = JSON.parse(event.body);
        console.log("Server Side Code trying to use GPT");

        // Construct the prompt for the OpenAI API
        const prompt = `Write a paragraph about a Pokémon team consisting of ${team.join(', ')}.`;

        // Call the OpenAI API
        console.log(`this is the part that the thugs skip`);
// EPIC FAIL trying to use api

// main();
        // Extract the summary from the OpenAI API response
        const summary = `Hello ChatGPT, ${prompt}`;
        console.log(`summary is ${summary}`);

        return {
          statusCode: 200,
          body: JSON.stringify({ summary })
        };

    } catch (error) {
        console.error('Error of Max:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};