let bugz= [
    {
        "name":"citronella",
        "condition": "faints at the sight of blood",
        "actor": "Megan Trainer",
        "picture": "citronella.jpg"
    },
    {
        "name": "drpill",
        "condition": "none",
        "actor": "Dr. Phil",
        "picture": "drpill.jpg"
    },
    {
        "name": "fly",
        "condition": "ocd",
        "actor": "Jay Leno",
        "picture": "flybug.jpg"
    },
    {
        "name": "dragonflies",
        "condition": "dependency",
        "actor": "Michael Jann and Michele Jourdan",
        "picture": "dragonflies.jpg"
    },
    {
        "name": "grasshopper",
        "condition": "addict",
        "actor": "unknown",
        "picture": "grasshopper.jpg"
    },
    {
        "name": "mantis",
        "condition": "delusional",
        "actor": "unknown",
        "picture": "mantis.jpg"
    },
    {
        "name": "spider",
        "condition": "aracnophobia",
        "actor": "unknown",
        "picture": "spider.jpg"
    },
    {
        "name": "stickbug",
        "condition": "insecure",
        "actor": "Sterling K Brown",
        "picture": "stick.jpg"
    },
    {
        "name": "leafbug",
        "condition": "none",
        "actor": "unknown",
        "picture": "leaf.jpg"
    },
]


function elam(){
    let x = document.getElementById("pw").value;
    console.log(`password entered is ${x}`);
    event.preventDefault();
    if(x=="elam" || x=="Elam"){
        console.log("access granted");
        document.getElementById("passcode").innerHTML=`
        `
        document.getElementById("shell").innerHTML=`
        <div id="content">
        <h1 id="main">BUG THERAPY</h1>
            <img onclick="game()" class="pic" src="static/img/bugs.jpg" alt="bugs">
            <h2>Which bug are you?</h2>

            <div id="bugs">
                
            </div>
        </div>
        `
        game();
    }else{
        console.log("access denied");
        document.getElementById("shell").innerHTML=`
        <p> Access Denied </p>
        `
    }
}
// <img onclick="${bugz[i].name}()" class="subpic" src="static/img/${bugz[i].picture}" alt="bug">
function game(){
    console.log("gametime");
    for(let i =0; i<bugz.length; i++){
        document.getElementById("bugs").innerHTML+=`
        <img onclick="info(${i})" class="subpic" src="static/img/${bugz[i].picture}" alt="bug">
        `
    }
}
function gamer(n){
    console.log("gametime");
    document.getElementById("bugs").innerHTML=`
        <img class="subpic" src="static/img/${bugz[n].picture}" alt="bug">
        <div id="info">
        <p>Name: ${bugz[n].name}</p>
        <p>Condition: ${bugz[n].condition}</p>
        <p>Played by: ${bugz[n].actor}</p>
        <p class="xp" onclick="explain(${n})"> Learn More about this condition? </a>
        <p id="special" onclick="gamer(${n})">Pick a new bug?</p>
        </div>
        `
    ;
    for(let i =0; i<bugz.length; i++){
        if(i!=n){
            document.getElementById("bugs").innerHTML+=`
            <img onclick="info(${i})" class="subpic" src="static/img/${bugz[i].picture}" alt="bug">
            `
        }
    }
}

function info(n){
    console.log(`providing info for ${n}`);
    console.log(`n is ${bugz[n].name}`);
    document.getElementById("bugs").innerHTML=`
        <img class="subpic" src="static/img/${bugz[n].picture}" alt="bug">
        <div id="info">
        <p>Name: ${bugz[n].name}</p>
        <p>Condition: ${bugz[n].condition}</p>
        <p>Played by: ${bugz[n].actor}</p>
        <p class="xp" onclick="explain(${n})"> Learn More about this condition? </p>
        <p id="special" onclick="gamer(${n})">Pick a new bug?</p>
        </div>
        `
}

function explain(n){
    console.log(`explaining ${n}`);
    document.getElementById("bugs").innerHTML=`
    <img class="subpic" src="static/img/${bugz[n].picture}" alt="bug">
    <p>Would take you to link about ${bugz[n].condition}</p>
    <p class="xp" onclick="gamer(${n})"> Play Again?</p>
    `
}

