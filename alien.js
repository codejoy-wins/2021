let x = "steady";
let y = "Reckoner";
let current = "";
let dj = "";

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
    {
        "song": "Yourself",
        "artist": "Audioslave",
        "fullsong": "Be Yourself"
    },
    {
        "song": "Wish",
        "artist": "Incubus",
        "fullsong": "Wish You Were Here"
    },
    {
        "song": "Undone",
        "artist": "Weezer",
        "fullsong": "Undone: The Sweater Song"
    },
    {
        "song": "Time",
        "artist": "Muse",
        "fullsong": "Time is Running Out"
    },
    {
        "song": "Stay",
        "artist": "Blink-182",
        "fullsong": "Stay Together for the Kids"
    },
    {
        "song": "Sick",
        "artist": "Red Hot Chili Peppers",
        "fullsong": "Sick Love"
    },
    {
        "song": "Self",
        "artist": "Mac Miller",
        "fullsong": "Self Care"
    },
    {
        "song": "Scorcho",
        "artist": "Weezer",
        "fullsong": "El Scorcho"
    },
    {
        "song": "Ready",
        "artist": "Cage the Elephant",
        "fullsong": "Ready to Let Go"
    },
    {
        "song": "Quiet",
        "artist": "Brand New",
        "fullsong": "Quiet Thing That No One Ever Knows"
    },
    {
        "song": "Okay",
        "artist": "Brand New",
        "fullsong": "Okay, I Believe You But My Tommy Gun Doesn't"
    },
    {
        "song": "Otherside",
        "artist": "Red Hot Chili Peppers",
        "fullsong": "Otherside"
    },
    {
        "song": "Moonlight",
        "artist": "XXXtentacion",
        "fullsong": "Moonlight"
    },
    {
        "song": "Love",
        "artist": "Incubus",
        "fullsong": "Love Hurts"
    },
];

let womanobj = [
    {
        "song": "Hand",
        "artist": "Alanis Morissette",
        "fullsong": "Hand in My Pocket"
    },
    {
        "song": "Hows",
        "artist": "Third Eye Blind",
        "fullsong": "How's it Gonna Be?"
    },
    {
        "song": "Make",
        "artist": "Queens of the Stone Age",
        "fullsong": "Make it Wit Chu"
    },
    {
        "song": "Maps",
        "artist": "Yeah Yeah Yeahs",
        "fullsong": "Maps"
    },
    {
        "song": "Night",
        "artist": "Modest Mouse",
        "fullsong": "Night on the Sun"
    },
    {
        "song": "Now",
        "artist": "Blink-182",
        "fullsong": "Not Now"
    },
    {
        "song": "Outta",
        "artist": "Alanis Morissette",
        "fullsong": "You Outta Know"
    },
    {
        "song": "Simple",
        "artist": "No Doubt",
        "fullsong": "A Simple Kind of Life"
    },
    {
        "song": "Torn",
        "artist": "Natalie Imbruglia",
        "fullsong": "Torn"
    },
    {
        "song": "Tune",
        "artist": "The Format",
        "fullsong": "Tune Out"
    },
    {
        "song": "Youth",
        "artist": "Glass Animals",
        "fullsong": "Youth"
    },
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

        dj = "man"
        document.getElementById("man").classList.add("dj");
        document.getElementById("woman").classList.remove("dj");
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

        dj = "woman";
        document.getElementById("woman").classList.add("dj");
        document.getElementById("man").classList.remove("dj");

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
    document.getElementById("switch").innerText=`
    Blog
    `;
}
function alien(){
    document.getElementById("switch").innerText=`
    DJ Aliens
    `;
}

function playlist(){
    if(dj == "woman"){
        newwoman();
    }
    else{
        newman();
    }
}