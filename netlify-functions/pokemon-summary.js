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

    try {
        // Here we know it's a POST request, so we can safely assume there is a body to parse
        const { team } = JSON.parse(event.body);
        console.log("Hallelujah");
        // Generate the summary with team data
        let poketype ="";
        let alttype = "";
        let typus = [];

        for(let i =0; i<team.length; i++){
            poketype = team[i].types[0].type.name;
            typus.push(poketype);
            if(team[i].types.length==2){
                alttype = team[i].types[1].type.name;
                typus.push(alttype);
            }
        }
        const typesHTML = typus.map(type => `<div class="spx"><span class="${type}">${type}</span></div>`).join(' ');

        summary = `some pokemon are more equal than others but ${team[0].name} and ${team[1].name} were the most equal.  The pokemon types of your team are: 
        <div class="typhos">
        ${typesHTML}
        </div>
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