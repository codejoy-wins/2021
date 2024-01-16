exports.handler = async function(event, context) {
    // GENERATE IMAGE OF THEIR TEAM WITH AI EVENTUALLY

    // Only proceed if this is a POST request
    if (event.httpMethod !== 'POST') {
        // Return a 405 Method Not Allowed response
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }
    const stuf = ["hi","gpt"];
    try {
        // Here we know it's a POST request, so we can safely assume there is a body to parse
        const { team } = JSON.parse(event.body);
        console.log("Server Side Code trying to use GPT");
        console.log(`team is ${team}`);
        // Generate the summary with team data
        summary = `some pokemon are more equal than others but ${team[2].name} and ${team[4].name} were the most equal.  We are attempting to reach chatGPT... 
        `;

        return {
          statusCode: 200,
          body: JSON.stringify({ summary })
        };

    } catch (error) {
        console.error('Error:', error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};