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
    "weakness": "water"
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
    "weakness": "electric"
}

let pokemon = [
    charizard,
    blastoise
]

document.getElementById("player_health").innerHTML=`
    <div>${charizard.name}'s Health: ${charizard.health} HP</div>
`
document.getElementById("enemy_health").innerHTML=`
    <div>${blastoise.name}'s Health: ${blastoise.health} HP</div>
`
function reset(){
    console.log("resetting");
    blastoise.health = 100;
    charizard.health = 120;
    document.getElementById("info").innerHTML=``;
    document.getElementById("enemy_health").innerHTML=`
    <div>${blastoise.name}'s Health: ${blastoise.health} HP</div>
    `;
    document.getElementById("player_health").innerHTML=`
    <div>${charizard.name}'s Health: ${charizard.health} HP</div>
    `
}
function retaliate(i){
    if(blastoise.health>0){
        console.log(`retaliating ${i}`);
        document.getElementById("info").innerHTML+=`
        <p>${blastoise.name} used ${blastoise.moves[i].fullname}</p>
        <p>It did ${blastoise.moves[i].damage} damage!!</p>
        `
        charizard.health-=blastoise.moves[i].damage
        if(charizard.health >0){
            document.getElementById("player_health").innerHTML=`
            ${charizard.name}'s Health: ${charizard.health} HP
            `
        }else{
            document.getElementById("player_health").innerHTML=`
            ${charizard.name} Fainted!
            `
        }
        
    }

    
}

function attack(name, move, dmg){
    if(charizard.health<=0 || blastoise.health<=0){
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
        blastoise.health-=dmg;
        if(blastoise.health<=0){
            document.getElementById("enemy_health").innerHTML=`
            <div>${blastoise.name} Fainted</div>
        `
        }
        else{
            document.getElementById("enemy_health").innerHTML=`
            <div>${blastoise.name}'s Health: ${blastoise.health} HP</div>
        `
        }
        let k = Math.floor(Math.random()*blastoise.moves.length);
        console.log(`k is ${k}`);
        retaliate(k);
    }


    
    
}
//blastoise movelist


// console.log(`blastoise has ${blastoise.moves.length} moves`);
// for(var i =0; i < blastoise.moves.length; i++){
//     document.getElementById("enemymove").innerHTML+=`
//         <div class="mastermove2">
//         <div class="supermove">
//         <div class= "move">${blastoise.moves[i].fullname}</div>
//         <div class= "move">${blastoise.moves[i].damage}</div>
//         </div>
//         </div>
//     `
// }


console.log(`charizard has ${charizard.moves.length} moves`);

for(var i =0; i < charizard.moves.length; i++){
    document.getElementById("playermove").innerHTML+=`
        <div class="mastermove">
        <div class="supermove" onclick=attack("${charizard.name}","${charizard.moves[i].name}",${charizard.moves[i].damage})>
        <div class= "move">${charizard.moves[i].fullname}</div>
        <div class= "move">${charizard.moves[i].damage}</div>
        </div>
        </div>
    `
}




