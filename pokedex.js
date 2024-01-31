// functions are generated by chatGPT in the pokeproject
function getPokemon() {
    let pokemonName = document.getElementById('pokemonInput').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            console.log(`data is ${data}`);
            document.getElementById('pokemonInfo').innerHTML = 
                `<h2>${data.name} has been added to your team</h2>
                 <img class="big" src="${data.sprites.front_default}" alt="${data.name}">`;
                 console.log("trying to add pokemon to team");
            addPokemonToTeam(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('pokemonInfo').innerHTML = 
                `<p>Pokémon not found. Please try again.</p>`;
        });
}
// Function to add a pokemon to the team
function addPokemonToTeam(pokemonData) {
    console.log("adding pokemon to team");
    // Get the current team from local storage or create a new one if it doesn't exist
    let team = JSON.parse(localStorage.getItem('pokemonTeam')) || [];

    // Add the new pokemon to the start of the team array
    team.unshift(pokemonData);

    // If the team has more than 6 pokemon, remove the last one
    if (team.length > 6) {
        team.pop();
    }

    // Save the updated team back to local storage
    localStorage.setItem('pokemonTeam', JSON.stringify(team));

    // Update the display
    console.log("trying to update the display");
    displayPokemonTeam(team);
}

// Function to display the team
function displayPokemonTeam(team) {
    console.log("displaying pokemon team");
    // Use the team array to display the pokemon
    // This is where you would update the HTML to show the pokemon images and names
    document.getElementById("teamDisplay").innerHTML=``;
    for(let i=0; i < team.length; i++){
        console.log(team[i].name);
        console.log(team[i].types[0].type.name);
        let poketype = team[i].types[0].type.name;
        let alttype = "";
        if(team[i].types.length==2){
            alttype = team[i].types[1].type.name;
        }

        document.getElementById("teamDisplay").innerHTML+=`
        <div class="pok">
        ${team[i].name.toUpperCase()}
        <img class="poke" src="${team[i].sprites.front_default}" alt="${team[i].name}">
        ${poketype}
        ${alttype}
        </div>
        `
    }
}
// More chatgpt functions

// This function returns the current team data from local storage
function getTeamData() {
    console.log("getting team data");
    // Retrieve the team data stored as a JSON string in local storage
    const teamJSON = localStorage.getItem('pokemonTeam');
    
    // Parse the JSON string back into an array of Pokémon objects
    const team = teamJSON ? JSON.parse(teamJSON) : [];
    
    return team; // This returns the array of Pokémon objects
}
function getPokemonNamesData(){
    console.log("getting team data but only an array of names");
    // Retrieve the team data stored as a JSON string in local storage
    const teamJSON = localStorage.getItem('pokemonTeam');
    
    // Parse the JSON string back into an array of Pokémon objects
    const team = teamJSON ? JSON.parse(teamJSON) : [];

    console.log(`team is ${team} but I want teamx (names)`);
    // let teamz = ["pikachu","raichu","ninetales","snorlax","espeon","dragonair"];
    let teamx = team.map(pokename => pokename.name);
    return teamx; // This returns the array of Pokémon Names, hopefully
}

function useGPT(){
    console.log("using chatGPT API");
    const team = getTeamData();
    const teamy = getPokemonNamesData();
    console.log(`teamy is ${teamy}`);
    console.log(`sending team data`, team);
    console.log(`sending team data names only`, teamy);
    console.log(`team[1].name = ${team[1].name}`);
    console.log(`teamy[2] is ${teamy[2]}`);
    fetch('/.netlify/functions/gpt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ team: teamy }) // shot in the dark
    })
    .then(response => response.json())
    .then(data => {
        console.log("client side code equipped with server side chat response");
        console.log(`we did it. data.summary is  ${data.summary}`);
        console.log(`we did it. data.summary.message is  ${data.summary.message}`);
        console.log(`we did it. data.summary.message.content is  ${data.summary.message.content}`);
        const magic = data.summary.message.content;
        document.getElementById('magica').innerHTML = `<div class="perfect">${magic}</div>`;
    })
    .catch(error => console.error('Error123:', error));
}
// simpler one is not timing out and it works
function simp(){
    document.getElementById("brick").innerHTML="Mewthree is psychically analyzing your pokemon team..."
    console.log("using simp chatGPT API");
    const teamy = getPokemonNamesData();
    fetch('/.netlify/functions/simp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ team: teamy })
    })
    .then(response => response.json())
    .then(data => {
        console.log(`we did it simp. data.summary.message.content is  ${data.summary.message.content}`);
        const magickarp = data.summary.message.content;
        document.getElementById('magica').innerHTML = `<div class="blue">${magickarp}</div>`;
    })
    .catch(error => console.error('Error123343:', error));
}