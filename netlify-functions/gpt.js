const OpenAI = require('openai');
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
        // Parse the request body to get the team data
        const requestBody = JSON.parse(event.body);
        const team = requestBody.team; // This is how you access the team data passed in the request body
        console.log("Server-side GPT code trying to view team:", team);

        // Construct the prompt
        // eventually generate an image of the conflict
        const promptMessage = {
            max: "god",
            // content: `A pokemon trainer has assembled a team of ${team.join(', ')} to challenge you to a pokemon battle.  Only a well balanced strong team can defeat you.  Rate the trainer's team on a scale of 1-10. 6 and below lose to you. Describe the fight as it happens. Let the trainer know if he won or lost the battle.  Provide advice if the trainer loses, and congratulate him if he wins.`,
            content: `A pokemon trainer has assembled a team of ${team.join(', ')} to challenge you to a pokemon battle.  Only a well balanced strong team can defeat you.  Rate the trainer's team on a scale of 1-10. 6 and below lose to you. Describe the fight as it happens. Let the trainer know if he won or lost the battle.  Provide advice if the trainer loses, and congratulate him if he wins.`
        };
    
        // Call the OpenAI API

        const completion = await openai.chat.completions.create({
            // model: "gpt-3.5-turbo",
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are Mewthree, the next version of the Pokemon Mewtwo." },
                { role: "user", content: promptMessage.content },
              ],
          });
          console.log("starting bot");
          console.log(completion.choices[0]);
          const summary = completion.choices[0];
          console.log("ending bot");
        
        // Return the completion text in the response
        return {
            statusCode: 200,
            body: JSON.stringify({ summary })
        };
    } catch (error) {
        console.error("Error generating Pokémon team summary:", error);
        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" })
        };
    }
};
