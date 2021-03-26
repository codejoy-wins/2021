let x = "steady";
let y = "Reckoner";
let womanr = ["Broke", "Reckoner", "Wait", "Sore", "Tiny", "Angeles", "Between", "Cigarette", "Nothing", "Grapevine", "Motion", "Parallel", "Strawberry"];
let manr = ["Chemistry", "Auto", "Paranoid", "Motion","Agenda", "Don't", "Closer", "End", "First", "Hey", "Trouble", "You", "Like", "Hospital"];


function woman(){
    let k = Math.floor(Math.random()*womanr.length);
    console.log("woman");
    console.log(`${womanr[k]} is the song`);
    document.getElementById("info").innerHTML=`
    <p>${womanr[k]} is the song</p>
    `

    document.getElementById("status").classList.remove("hide");
    x = "playing";
    document.getElementById("master").innerHTML=`
            <audio id="music">
                <source src="static/audio/${womanr[k]}.mp3" type="audio/mpeg">
            </audio>
    `;
    document.getElementById("music").play();
    document.getElementById("status").innerHTML=`
        <img src="static/img/pause.png" alt="pause" class="btn" onclick="pauseplay()">
        `

}
function man(){
    let k = Math.floor(Math.random()*manr.length);
    console.log("man");
    console.log(`${manr[k]} is the song`);
    document.getElementById("status").classList.remove("hide");
    x = "playing";
    document.getElementById("master").innerHTML=`
            <audio id="music">
                <source src="static/audio/${manr[k]}.mp3" type="audio/mpeg">
            </audio>
    `;
    document.getElementById("music").play();
    document.getElementById("status").innerHTML=`
        <img src="static/img/pause.png" alt="pause" class="btn" onclick="pauseplay()">
        `;
    document.getElementById("info").innerHTML=`
    <p>${manr[k]} is the song</p>
    `
    

}
function pauseplay(){
    if(x == "steady"){
        console.log("x steady");
    }
    if(x=="paused"){
        console.log("status is now playing");
        document.getElementById("music").play();
        x = "playing";
        document.getElementById("status").innerHTML=`
        <img src="static/img/pause.png" alt="pause" class="btn" onclick="pauseplay()">
        `
    }
    else if(x=="playing"){
        console.log("status is now paused");
        document.getElementById("music").pause();
        x = "paused";
        document.getElementById("status").innerHTML=`
        <img src="static/img/play.png" alt="resume" class="btn" onclick="pauseplay()">
        `
    }
}

function blog(){
    document.getElementById("switch").innerHTML=`Blog`;
}
function alien(){
    document.getElementById("switch").innerHTML=`DJ Aliens`;
}