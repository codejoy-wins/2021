function getLocations(){
    let Guyspot = document.getElementById('guylocation').value;
    let Girlspot = document.getElementById('girllocation').value;
    console.log(`setting locations ${Guyspot} ${Girlspot}`);
    document.getElementById("locationInfo").innerHTML=`
    <div>
    <p>He is in ${Guyspot}</p>
    </div>
    <div>
    <p>She is in ${Girlspot}</p>
    </div>
    `;
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
function getLocationNamesData(){
    let Gspot1 = document.getElementById('guylocation').value;
    let Gspot2 = document.getElementById('girllocation').value;
    let both = Gspot1 + ' and ' + Gspot2;
    return both;
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


function love(){
    document.getElementById("brick").innerHTML=`<p>MaxGPT is preparing your date...</p>`
    const teamy = getPokemonNamesData();
    const perfectspot = getLocationNamesData();
    fetch('/.netlify/functions/love', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ team: perfectspot })
    })
    .then(response => response.json())
    .then(data => {
        const magickarp = data.summary.message.content;
        document.getElementById('magica').innerHTML = `<div class="blue"><p>${magickarp}</p></div>`;
    })
    .catch(error => {
        console.error('Error117', error);
        const element = document.getElementById('brick');
        element.innerHTML = `<p> maxGPT timed out.  Forgive me and try again later.</p>`;
    });
}
 