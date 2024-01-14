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
        console.log("Hallelujah");
        // Generate the summary with team data
        // ... your existing code to generate the summary
        summary = `some pokemon are more equal than others but ${team[0].name} and ${team[1].name} were the most equal`;

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