function getPokemon() {
    let pokemonName = document.getElementById('pokemonInput').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemonInfo').innerHTML = 
                `<h2>${data.name} has been added to your team</h2>
                 <img class="big" src="${data.sprites.front_default}" alt="${data.name}">`;
            addPokemonToTeam(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('pokemonInfo').innerHTML = 
                `<p>Pokémon not found. Please try again.</p>`;
        });
}
function addPokemonToTeam(pokemonData) {
    let team = JSON.parse(localStorage.getItem('pokemonTeam')) || [];
    team.unshift(pokemonData);
    if (team.length > 6) {
        team.pop();
    }
    localStorage.setItem('pokemonTeam', JSON.stringify(team));
    displayPokemonTeam(team);
}

function displayPokemonTeam(team) {
    document.getElementById("teamDisplay").innerHTML=``;
    for(let i=0; i < team.length; i++){
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
        document.getElementById("magica").innerHTML=`
        GPT Response will go here.
        `
        document.getElementById("brick").innerHTML=`
        <button id="mew" onclick="simp()"><div id="mewtwo">Challenge Mewthree to a fight!</div></button>
        `
    }
}

function getTeamData() {
    const teamJSON = localStorage.getItem('pokemonTeam');
    const team = teamJSON ? JSON.parse(teamJSON) : [];
    return team;
}
function getPokemonNamesData(){
    const teamJSON = localStorage.getItem('pokemonTeam');
    const team = teamJSON ? JSON.parse(teamJSON) : [];
    let teamx = team.map(pokename => pokename.name);
    return teamx;
}
function simp(){
    document.getElementById("brick").innerHTML=`<p>Mewthree is psychically analyzing your pokemon team...</p>`
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
        const magickarp = data.summary.message.content;
        document.getElementById('magica').innerHTML = `<div class="blue"><p>${magickarp}</p></div>`;
    })
    .catch(error => {
        console.error('Error117', error);
        const element = document.getElementById('brick');
        element.innerHTML = `<p> chatGPT timed out.  Try more well known pokemon.</p>`;
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the Enter key within the input field
    document.getElementById('pokemonInput').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents the form from submitting
            getPokemon(); // Triggers the function to get and display the Pokemon
        }
    });
    const specialteam = getTeamData();
    if (specialteam && specialteam.length > 0) {
        displayPokemonTeam(specialteam);
    }
});