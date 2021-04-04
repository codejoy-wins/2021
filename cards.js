let player = {
    
}

let enemy = {
   
}

let charizard = {
    "name": "Charizard",
    "health": 120,
    "moves": [
        {
            "name": "flamethrowerr",
            "damage": 25,
            "fullname": "Flamethrower",
        },
        {
            "name": "dragonslam",
            "damage": 85,
            "fullname": "Dragon Slam"
        },
        {
            "name": "firespinner",
            "damage": 100,
            "fullname": "Fire Spin"
        },
        {
            "name": "fly",
            "damage": 70,
            "fullname": "Fly",
        },
    ],
    "type": "fire",
    "weakness": "water",
    "picture": "charizard.jpg",
    "maxhp": 120,
    "color": "red"
}

let blastoise = {
    "name": "Blastoise",
    "health": 100,
    "moves": [
        {
            "name": "waterpulse",
            "damage": 50,
            "fullname": "Water Pulse"
        },
        {
            "name": "bodyslam",
            "damage": 40,
            "fullname": "Body Slam"

        },
        {
            "name": "hydropump",
            "damage": 60,
            "fullname": "Hydro Pump"

        },
        {
            "name": "harden",
            "damage": 0,
            "fullname": "Harden",
        },
    ],
    "type": "water",
    "weakness": "electric",
    "picture": "blastoise.jpg",
    "maxhp": 100,
    "color": "blue"
}

let pikachu = {
    "name": "Pikachu",
    "health": 50,
    "moves": [
        {
            "name": "spark",
            "damage": 20,
            "fullname": "Spark"
        },
        {
            "name": "quickattack",
            "damage": 40,
            "fullname": "Quick Attack"

        },
        {
            "name": "thunderbolt",
            "damage": 60,
            "fullname": "Thunderbolt"

        },
        {
            "name": "thunder",
            "damage": 95,
            "fullname": "Thunder",
        },
    ],
    "type": "electric",
    "weakness": "rock",
    "picture": "pikachu.jpg",
    "maxhp": 50,
    "color": "gold"
}

let absol = {
    "name": "Absol",
    "health": 70,
    "moves": [
        {
            "name": "swordsdance",
            "damage": 0,
            "fullname": "Sword's Dance"
        },
        {
            "name": "quickattack",
            "damage": 40,
            "fullname": "Quick Attack"

        },
        {
            "name": "slash",
            "damage": 80,
            "fullname": "Slash"

        },
        {
            "name": "aerialace",
            "damage": 60,
            "fullname": "Aeriel Ace",
        },
    ],
    "type": "dark",
    "weakness": "ghost",
    "picture": "absol.jpg",
    "maxhp": 70,
    "attackpower": 1,
    "defense": 1,
    "color": "black"
}

let lapras = {
    "name": "Lapras",
    "health": 90,
    "moves": [
        {
            "name": "icebeam",
            "damage": 90,
            "fullname": "Ice Beam",
        },
        {
            "name": "dragonbreath",
            "damage": 55,
            "fullname": "Dragon Breath"
        },
        {
            "name": "blizzard",
            "damage": 120,
            "fullname": "Blizzard"
        },
        {
            "name": "aurorabeam",
            "damage": 70,
            "fullname": "Aurora Beam",
        },
    ],
    "type": "ice",
    "weakness": "fire",
    "picture": "lapras.jpg",
    "maxhp": 90,
    "color": "blue"
}

let mew = {
    "name": "Mew",
    "health": 30,
    "moves": [
        {
            "name": "icebeam",
            "damage": 90,
            "fullname": "Ice Beam",
        },
        {
            "name": "dragonbreath",
            "damage": 55,
            "fullname": "Dragon Breath"
        },
        {
            "name": "blizzard",
            "damage": 120,
            "fullname": "Blizzard"
        },
        {
            "name": "aurorabeam",
            "damage": 70,
            "fullname": "Aurora Beam",
        },
    ],
    "type": "psychic",
    "weakness": "ghost",
    "picture": "mew.jpg",
    "maxhp": 30,
    "color": "purple"
}
let legendarymew = {
    "name": "LegendaryMew",
    "health": 320,
    "moves": [
        {
            "name": "icebeam",
            "damage": 90,
            "fullname": "Ice Beam",
        },
        {
            "name": "fireblast",
            "damage": 150,
            "fullname": "Fire Blast"
        },
        {
            "name": "blizzard",
            "damage": 120,
            "fullname": "Blizzard"
        },
        {
            "name": "psybeam",
            "damage": 70,
            "fullname": "Psybeam",
        },
    ],
    "type": "psychic",
    "weakness": "ghost",
    "picture": "mewog.jpg",
    "maxhp": 320,
    "color": "purple"
}
let zapdos = {
    "name": "Zapdos",
    "health": 80,
    "moves": [
        {
            "name": "thunder",
            "damage": 90,
            "fullname": "Thunder",
        },
        {
            "name": "zapcannon",
            "damage": 150,
            "fullname": "Zap Cannon"
        },
        {
            "name": "drillpeck",
            "damage": 80,
            "fullname": "Drill Peck"
        },
        {
            "name": "fly",
            "damage": 70,
            "fullname": "Fly",
        },
    ],
    "type": "electric",
    "weakness": "rock",
    "picture": "zapdos.jpg",
    "maxhp": 80,
    "color": "gold"
}
let ninetales = {
    "name": "Ninetales",
    "health": 145,
    "moves": [
        {
            "name": "flamethrower",
            "damage": 90,
            "fullname": "Flamethrower",
        },
        {
            "name": "rest",
            "damage": 0,
            "fullname": "Rest"
        },
        {
            "name": "dig",
            "damage": 60,
            "fullname": "Dig"
        },
        {
            "name": "takedown",
            "damage": 100,
            "fullname": "Take Down",
        },
    ],
    "type": "fire",
    "weakness": "water",
    "picture": "ninetales.jpg",
    "maxhp": 145,
    "color": "red"
}
let pokemon = [
    charizard,
    blastoise,
    pikachu,
    absol,
    lapras,
    mew,
    legendarymew,
    zapdos,
    ninetales,
]

function randomize(){
    console.log("randomizing");
    let x = Math.floor(Math.random()*pokemon.length);
    player = pokemon[x];
    let y = Math.floor(Math.random()*pokemon.length);
    enemy = pokemon[y];
    if(x==y){
        console.log("mewtwo within randomizer");
        console.log("**********************");
        console.log("**********************");

        randomize();
    }
}

function initialize(){
    console.log("initializing");
    // choose random pokemon
    let x = Math.floor(Math.random()*pokemon.length);
    player = pokemon[x];
    let y = Math.floor(Math.random()*pokemon.length);
    enemy = pokemon[y];
    if(x==y){
        console.log(`mewtwo on initialization with ${player.name}`);
        randomize();
    }
    // use chosen pokemon's pictures
    document.getElementById("enemy_img").innerHTML=`
    <img src="static/img/${enemy.picture}" alt="enemy" class="card">
    `
    document.getElementById("player_img").innerHTML=`
        <img src="static/img/${player.picture}" alt="player" class="card">
    `
    // use chosen pokemon's health
    document.getElementById("player_health").innerHTML=`
        <div class="clear">${player.name}'s Health: ${player.health} HP</div>
    `
    document.getElementById("enemy_health").innerHTML=`
        <div class="clear">${enemy.name}'s Health: ${enemy.health} HP</div>
    `
    // show player's pokename about moveset
    document.getElementById("mover").innerHTML=`
            <p>${player.name}'s Moves</p>
        `
    // show player's moveset
    for(var i =0; i < player.moves.length; i++){
        document.getElementById("playermove").innerHTML+=`
            <div class="${player.color}">
            <div class="supermove" onclick=attack("${player.name}","${player.moves[i].name}",${player.moves[i].damage})>
            <div class= "move">${player.moves[i].fullname}</div>
            <div class= "move">${player.moves[i].damage}</div>
            </div>
            </div>
        `
    }
    
}
// run initial function
initialize();

function reset(){
    console.log("resetting");
    // randomly select new pokemon
    let x = Math.floor(Math.random()*pokemon.length);
    player = pokemon[x];
    let y = Math.floor(Math.random()*pokemon.length);
    enemy = pokemon[y];
    if(x==y){
        console.log(`mewtwo on resetting with ${player.name}`);
        randomize();
    }
    // log new pokemon to console
    console.log(`player is ${player.name} and enemy is ${enemy.name}`);
    // display chosen pokemon pictures
    document.getElementById("enemy_img").innerHTML=`
    <img src="static/img/${enemy.picture}" alt="enemy" class="card">
    `
    document.getElementById("player_img").innerHTML=`
        <img src="static/img/${player.picture}" alt="player" class="card">
    `
    //reset player and enemy health to maxhp
    player.health = player.maxhp;
    enemy.health = enemy.maxhp;

    document.getElementById("info").innerHTML=``;
    document.getElementById("enemy_health").innerHTML=`
    <div class="clear">${enemy.name}'s Health: ${enemy.health} HP</div>
    `;
    document.getElementById("player_health").innerHTML=`
    <div class="clear">${player.name}'s Health: ${player.health} HP</div>
    `
    document.getElementById("playermove").innerHTML=``;
    document.getElementById("mover").innerHTML=`
        <p>${player.name}'s Moves</p>
    `
    for(var i =0; i < player.moves.length; i++){
        document.getElementById("playermove").innerHTML+=`
            <div class="${player.color}">
            <div class="supermove" onclick=attack("${player.name}","${player.moves[i].name}",${player.moves[i].damage})>
            <div class= "move">${player.moves[i].fullname}</div>
            <div class= "move">${player.moves[i].damage}</div>
            </div>
            </div>
        `
    }
}
function retaliate(i){
    if(enemy.health>0){
        console.log(`retaliating ${i}`);
        document.getElementById("info").innerHTML+=`
        <p>${enemy.name} used ${enemy.moves[i].fullname}</p>
        <p>It did ${enemy.moves[i].damage} damage!!</p>
        `
        player.health-=enemy.moves[i].damage
        if(player.health >0){
            document.getElementById("player_health").innerHTML=`
            <div class="clear">${player.name}'s Health: ${player.health}</div>
            `
        }else{
            document.getElementById("player_health").innerHTML=`
            <div class="clear">${player.name} Fainted</div>
            `
        }
        
    }

    
}

function attack(name, move, dmg){
    if(player.health<=0 || enemy.health<=0){
        document.getElementById("info").innerHTML +=`
    <p>
        ${name} cannot attack
    </p>
    `
    }else{
        console.log(`${name} used ${move}`);
        console.log(`It caused ${dmg} damage!`);
        document.getElementById("info").innerHTML +=`
        <p>
            ${name} used ${move}
        </p>
        <p>
            It caused ${dmg} damage!
        </p>
        `
        enemy.health-=dmg;
        if(enemy.health<=0){
            document.getElementById("enemy_health").innerHTML=`
            <div class="clear">${enemy.name} Fainted</div>
        `
        }
        else{
            document.getElementById("enemy_health").innerHTML=`
            <div class="clear">${enemy.name}'s Health: ${enemy.health} HP</div>
        `
        }
        let k = Math.floor(Math.random()*enemy.moves.length);
        console.log(`k is ${k}`);
        retaliate(k);
    }
}