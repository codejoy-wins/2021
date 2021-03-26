let x = "steady";
let y = "Reckoner";
let current = "";

let manobj = [
    {
        "song":"Chemistry",
        "artist": "Queens of the Stone Age",
        "fullsong": "Better Living Through Chemistry"
    },
    {
        "song": "Auto",
        "artist": "Queens of the Stone Age",
        "fullsong": "Auto Pilot"
    },
    {
        "song": "Paranoid",
        "artist": "Radiohead",
        "fullsong": "Paranoid Android"
    },
    {
        "song": "Agenda",
        "artist": "The Faint",
        "fullsong": "Agenda Suicide"
    },
    {
        "song": "Don't",
        "artist": "The Beach Boys",
        "fullsong": "Don't Worry Baby"
    },
    {
        "song": "Closer",
        "artist": "Kings of Leon",
        "fullsong": "Closer"
    },
    {
        "song": "End",
        "artist": "The Strokes",
        "fullsong": "The End Has No End"
    },
    {
        "song": "First",
        "artist": "Cold War Kids",
        "fullsong": "First"
    },
    {
        "song": "Hey",
        "artist": "The Pixies",
        "fullsong": "Hey"
    },
    {
        "song": "Trouble",
        "artist": "Cage the Elephant",
        "fullsong": "Trouble"
    },
    {
        "song": "You",
        "artist": "The Strokes",
        "fullsong": "You Only Live Once"
    },
    {
        "song": "Like",
        "artist": "Audioslave",
        "fullsong": "Like a Stone"
    },
    {
        "song": "Hospital",
        "artist": "Cold War Kids",
        "fullsong": "Hospital Beds"
    },
    {
        "song": "Not",
        "artist": "Eminem",
        "fullsong": "Not Alike"
    },
    {
        "song": "Lucky",
        "artist": "Eminem",
        "fullsong": "Lucky You"
    },
    {
        "song": "Heat",
        "artist": "Glass Animals",
        "fullsong": "Heat Waves"
    },
    {
        "song": "Fast",
        "artist": "Bad Meets Evil",
        "fullsong": "Fast Lane"
    },
    {
        "song": "Poplar",
        "artist": "Glass Animals",
        "fullsong": "Poplar St"
    },
];

let womanobj = [
    {
        "song":"Broke",
        "artist": "Modest Mouse",
        "fullsong": "Broke"
    },
    {
        "song": "Reckoner",
        "artist": "Radiohead",
        "fullsong": "Reckoner"
    },
    {
        "song": "Wait",
        "artist": "The Format",
        "fullsong": "Wait, Wait, Wait"
    },
    {
        "song": "Sore",
        "artist": "The Format",
        "fullsong": "Sore Thumb"
    },
    {
        "song": "Tiny",
        "artist": "Death Cab for Cutie",
        "fullsong": "Tiny Vessels"
    },
    {
        "song": "Angeles",
        "artist": "Elliot Smith",
        "fullsong": "Angeles"
    },
    {
        "song": "Between",
        "artist": "Elliot Smith",
        "fullsong": "Between"
    },
    {
        "song": "Cigarette",
        "artist": "Cage the Elephant",
        "fullsong": "Cigarette Daydreams"
    },
    {
        "song": "Nothing",
        "artist": "Cigarettes After Sex",
        "fullsong": "Nothing's Gonna Hurt You, Baby"
    },
    {
        "song": "Grapevine",
        "artist": "Death Cab for Cutie",
        "fullsong": "Grapevine Fires"
    },
    {
        "song": "Motion",
        "artist": "Radiohead",
        "fullsong": "Motion Picture Soundtrack"
    },
    {
        "song": "Parallel",
        "artist": "Red Hot Chili Peppers",
        "fullsong": "Parallel Universe"
    },
    {
        "song": "Strawberry",
        "artist": "The Beatles",
        "fullsong": "Strawberry Fields Forever"
    },
    {
        "song": "District",
        "artist": "The Postal Service",
        "fullsong": "The District Sleeps Alone Tonight"
    },
    {
        "song": "Cemetary",
        "artist": "Say Anything",
        "fullsong": "Cemetary"
    },
    {
        "song": "Subterranean",
        "artist": "Radiohead",
        "fullsong": "Subterranean Homesick Alien"
    },
];

function newman(){
    console.log("new man");
    let k = Math.floor(Math.random()*manobj.length);

    if(current !== manobj[k].song){
        console.log("********");
    }else{
        console.log("!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(`trying to play ${manobj[k].song}`);
        k = Math.floor(Math.random()*manobj.length);
    }
    document.getElementById("info").innerHTML=`
    <p>${manobj[k].fullsong}</p>
    <p>${manobj[k].artist}</p>

    `;

    document.getElementById("status").classList.remove("hide");
    x = "playing";
    document.getElementById("master").innerHTML=`
            <audio id="music" onended="playlist()">
                <source src="static/audio/${manobj[k].song}.mp3" type="audio/mpeg">
            </audio>
    `;
    document.getElementById("music").play();
    document.getElementById("status").innerHTML=`
        <img src="static/img/pause.png" alt="pause" class="btn" onclick="pauseplay()">
        `;
        current = manobj[k].song;
        console.log(`current is ${current}`);
        console.log(`Playing ${manobj[k].fullsong} by ${manobj[k].artist}`);


}

function newwoman(){
    console.log("new woman");
    let k = Math.floor(Math.random()*womanobj.length);

    if(current !== womanobj[k].song){
        console.log("********");
    }else{
        console.log("!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(`trying to play ${womanobj[k].song}`);
        k = Math.floor(Math.random()*womanobj.length);
    }
    document.getElementById("info").innerHTML=`
    <p>${womanobj[k].fullsong}</p>
    <p>${womanobj[k].artist}</p>

    `;
    document.getElementById("status").classList.remove("hide");
    x = "playing";
    document.getElementById("master").innerHTML=`
            <audio id="music" onended="playlist()">
                <source src="static/audio/${womanobj[k].song}.mp3" type="audio/mpeg">
            </audio>
    `;
    document.getElementById("music").play();
    document.getElementById("status").innerHTML=`
        <img src="static/img/pause.png" alt="pause" class="btn" onclick="pauseplay()">
        `;
        current = womanobj[k].song;
        console.log(`current is ${current}`);
        console.log(`Playing ${womanobj[k].fullsong} by ${womanobj[k].artist}`);


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

function playlist(){
    let xx = Math.floor(Math.random()*2);
    console.log(`${xx} is xx`);
    if(xx ==0){
        newwoman()
    }
    if(xx ==1){
        newman();
    }
}