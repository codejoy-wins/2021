let x = "steady";
let y = "Reckoner";
let current = "";
let dj = "";

let manobj = [
    {
        "song":"Sweatpants",
        "artist": "Childish Gambino",
        "fullsong": "Sweatpants",
        "picture": "childish.jpg",
    },
    {
        "song":"Goldie",
        "artist": "Asap Rocky",
        "fullsong": "Goldie",
        "picture": "asap.jpg",
    },
    {
        "song":"Put",
        "artist": "Big L",
        "fullsong": "Put It On",
        "picture": "l.jpg",
    },
    {
        "song":"Chemistry",
        "artist": "Queens of the Stone Age",
        "fullsong": "Better Living Through Chemistry",
        "picture": "qotsa.jpg",
    },
    {
        "song":"Go",
        "artist": "Queens of the Stone Age",
        "fullsong": "Go With the Flow",
        "picture": "qotsa.jpg",
    },
    {
        "song":"Little",
        "artist": "Queens of the Stone Age",
        "fullsong": "Little Sister",
        "picture": "qotsa.jpg",
    },
    {
        "song":"Noone",
        "artist": "Queens of the Stone Age",
        "fullsong": "No One Knows",
        "picture": "qotsa.jpg",
    },
    {
        "song":"1251",
        "artist": "The Strokes",
        "fullsong": "12:51",
        "picture": "strokes.jpg",
    },
    {
        "song":"Pyro",
        "artist": "Kings of Leon",
        "fullsong": "Pyro",
        "picture": "kings.jpg",
    },
    {
        "song":"California",
        "artist": "Kings of Leon",
        "fullsong": "California Waiting",
        "picture": "kings.jpg",
    },
    {
        "song": "Auto",
        "artist": "Queens of the Stone Age",
        "fullsong": "Auto Pilot",
        "picture": "qotsa.jpg",
    },
    {
        "song": "Paranoid",
        "artist": "Radiohead",
        "fullsong": "Paranoid Android",
        "picture": "radiohead.jpg"
    },
    {
        "song": "Agenda",
        "artist": "The Faint",
        "fullsong": "Agenda Suicide",
        "picture": ""
    },
    {
        "song": "Don't",
        "artist": "The Beach Boys",
        "fullsong": "Don't Worry Baby"
    },
    {
        "song": "Closer",
        "artist": "Kings of Leon",
        "fullsong": "Closer",
        "picture": "kings.jpg"
    },
    {
        "song": "Stormy",
        "artist": "Kings of Leon",
        "fullsong": "Stormy Weather",
        "picture": "kings.jpg"
    },
    {
        "song": "End",
        "artist": "The Strokes",
        "fullsong": "The End Has No End",
        "picture": "strokes.jpg"
    },
    {
        "song": "First",
        "artist": "Cold War Kids",
        "fullsong": "First",
        "picture": "cold.jpg"
    },
    {
        "song": "Hey",
        "artist": "The Pixies",
        "fullsong": "Hey",
        "picture": ""
    },
    {
        "song": "Trouble",
        "artist": "Cage the Elephant",
        "fullsong": "Trouble",
        "picture": "cage.png"
    },
    {
        "song": "You",
        "artist": "The Strokes",
        "fullsong": "You Only Live Once",
        "picture": "strokes.jpg"
    },
    {
        "song": "Like",
        "artist": "Audioslave",
        "fullsong": "Like a Stone",
        "picture": "audioslave.jpg"
    },
    {
        "song": "Hospital",
        "artist": "Cold War Kids",
        "fullsong": "Hospital Beds",
        "picture": "cold.jpg"
    },
    {
        "song": "Not",
        "artist": "Eminem",
        "fullsong": "Not Alike",
        "picture": "m.jpg"
    },
    {
        "song": "Lucky",
        "artist": "Eminem",
        "fullsong": "Lucky You",
        "picture": "m.jpg",
    },
    {
        "song": "Heat",
        "artist": "Glass Animals",
        "fullsong": "Heat Waves",
        "picture": "glass2.jpg",
    },
    {
        "song": "Fast",
        "artist": "Bad Meets Evil",
        "fullsong": "Fast Lane",
        "picture": "m.jpg",
    },
    {
        "song": "Poplar",
        "artist": "Glass Animals",
        "fullsong": "Poplar St",
        "picture": "glass2.jpg",
    },
    {
        "song": "Yourself",
        "artist": "Audioslave",
        "fullsong": "Be Yourself",
        "picture": "audioslave.jpg"
    },
    {
        "song": "Wish",
        "artist": "Incubus",
        "fullsong": "Wish You Were Here",
        "picture": "incubus.jpg"
    },
    {
        "song": "Undone",
        "artist": "Weezer",
        "fullsong": "Undone: The Sweater Song",
        "picture": "weezer2.jpg",
    },
    {
        "song": "Time",
        "artist": "Muse",
        "fullsong": "Time is Running Out",
        "picture": "muse.jpg"
    },
    {
        "song": "Stay",
        "artist": "Blink-182",
        "fullsong": "Stay Together for the Kids",
        "picture": "blink.jpg",
    },
    {
        "song": "Sick",
        "artist": "Red Hot Chili Peppers",
        "fullsong": "Sick Love",
        "picture": "rhcp.jpg",
    },
    {
        "song": "Self",
        "artist": "Mac Miller",
        "fullsong": "Self Care",
        "picture": "mac.jpg",
    },
    {
        "song": "Scorcho",
        "artist": "Weezer",
        "fullsong": "El Scorcho",
        "picture": "weezer2.jpg",
    },
    {
        "song": "Ready",
        "artist": "Cage the Elephant",
        "fullsong": "Ready to Let Go",
        "picture": "cage.png",
    },
    {
        "song": "Quiet",
        "artist": "Brand New",
        "fullsong": "Quiet Thing That No One Ever Knows",
        "picture": "brand.jpg"
    },
    {
        "song": "Okay",
        "artist": "Brand New",
        "fullsong": "Okay, I Believe You But My Tommy Gun Doesn't",
        "picture": "brand.jpg"
    },
    {
        "song": "Otherside",
        "artist": "Red Hot Chili Peppers",
        "fullsong": "Otherside",
        "picture": "rhcp.jpg",
    },
    {
        "song": "Moonlight",
        "artist": "XXXtentacion",
        "fullsong": "Moonlight",
        "picture": "x.jpg"
    },
    {
        "song": "Love",
        "artist": "Incubus",
        "fullsong": "Love Hurts",
        "picture": "incubus.jpg"
    },
    {
        "song": "Bullet",
        "artist": "Smashing Pumpkins",
        "fullsong": "Bullet With Butterfly Wings",
        "picture": "smashingpumpkins.jpg"
    },
    {
        "song": "Calls",
        "artist": "Mac Miller",
        "fullsong": "Missed Calls",
        "picture": "mac.jpg",
    },
    {
        "song": "Nikes",
        "artist": "Mac Miller",
        "fullsong": "Nikes on My Feet",
        "picture": "mac.jpg",
    },
    {
        "song": "Warning",
        "artist": "Notorious B.I.G.",
        "fullsong": "Warning",
        "picture": "biggie.jpeg",
    },
    {
        "song": "ny",
        "artist": "Nas",
        "fullsong": "New York State of Mind",
        "picture": "nas.jpg",
    },
    {
        "song": "Darling",
        "artist": "Eminem",
        "fullsong": "My Darling",
        "picture": "m.jpg",
    },
    {
        "song": "Jesus",
        "artist": "Kanye West",
        "fullsong": "Jesus Walks",
        "picture": "kanye.jpg"
    },
    {
        "song": "Good",
        "artist": "Weezer",
        "fullsong": "The Good Life",
        "picture": "weezer2.jpg",
    },
    {
        "song": "Shrinking",
        "artist": "Muse",
        "fullsong": "Shrinking Universe",
        "picture": "muse.jpg"
    },
    {
        "song": "Tundra",
        "artist": "Modest Mouse",
        "fullsong": "Tundra Desert",
        "picture": "mouse.jpg",
    },
    {
        "song": "When",
        "artist": "Eminem",
        "fullsong": "When I'm Gone",
        "picture": "m.jpg",
    },
    {
        "song": "Admit",
        "artist": "Say Anything",
        "fullsong": "Admit It!",
        "picture": "sayanything.jpeg",
    },
    {
        "song": "Alot",
        "artist": "21 Savage",
        "fullsong": "A lot",
        "picture": "savage.jpg",
    },
    {
        "song": "Black",
        "artist": "Rolling Stones",
        "fullsong": "Painted Black",
        "picture": ""
    },
    {
        "song": "Blur",
        "artist": "Say Anything",
        "fullsong": "Baby Girl, I'm a Blur",
        "picture": "sayanything.jpeg",
    },
    {
        "song": "High",
        "artist": "Broken Bells",
        "fullsong": "High Road",
        "picture": "brokenbells.jpg"
    },
    {
        "song": "Feeling",
        "artist": "Blink-182",
        "fullsong": "Feeling This",
        "picture": "blink.jpg",
    },
    {
        "song": "Holding",
        "artist": "Broken Bells",
        "fullsong": "Holding On for Dear Life",
        "picture": "brokenbells.jpg"
    },
    {
        "song": "Molly",
        "artist": "Say Anything",
        "fullsong": "Every Man Has a Molly",
        "picture": "sayanything.jpeg",
    },
    {
        "song": "Money",
        "artist": "Cardi B",
        "fullsong": "Money",
        "picture": "moneyperfect.jpg",
    },
    {
        "song": "Revolution",
        "artist": "The Beatles",
        "fullsong": "Revolution",
        "picture": "abbey.jpg",
    },
    {
        "song": "Sleeping",
        "artist": "The Shins",
        "fullsong": "Sleeping Lessons",
        "picture": "shins.jpg",
    },
    {
        "song": "Paradise",
        "artist": "Coldplay",
        "fullsong": "Paradise",
        "picture": "coldplay.png"
    },
    {
        "song": "Ticktock",
        "artist": "Joji",
        "fullsong": "Tick Tock",
        "picture": "joji.jpg"
    },
    {
        "song": "430",
        "artist": "Atmosphere",
        "fullsong": "4:30 A.M.",
        "picture": "atmos.jpg"
    },
    {
        "song": "Bathroom",
        "artist": "Atmosphere",
        "fullsong": "God's Bathroom Floor",
        "picture": "atmos.jpg"
    },
    {
        "song": "Vibration",
        "artist": "Atmosphere",
        "fullsong": "Sound is Vibration",
        "picture": "atmos.jpg"
    },
    {
        "song": "FeelGood",
        "artist": "Gorillaz",
        "fullsong": "Feel Good Inc.",
        "picture": "gorillaz.jpg"
    },
    {
        "song": "SunshineInABag",
        "artist": "Gorillaz",
        "fullsong": "Sunshine In A Bag",
        "picture": "gorillaz.jpg"
    },
    {
        "song": "Trump",
        "artist": "Mac Miller",
        "fullsong": "Donald Trump",
        "picture": "mac.jpg"
    },
    {
        "song": "Jet",
        "artist": "Mac Miller",
        "fullsong": "Jet Fuel",
        "picture": "mac.jpg"
    },
    
];

let womanobj = [
    {
        "song": "Loser",
        "artist": "Beck",
        "fullsong": "Loser",
        "picture": "",
    },
    {
        "song": "Rolling",
        "artist": "Childish Gambino feat. Adelle",
        "fullsong": "Rolling in the Deep",
        "picture": "childish.jpg",
    },
    {
        "song": "Dejavu",
        "artist": "Olivia Rodrigo",
        "fullsong": "Deja Vu",
        "picture": "olivia.jpg",
    },
    {
        "song": "Feather",
        "artist": "Nujabes",
        "fullsong": "Feather",
        "picture": "nujabes.jpg",
    },
    {
        "song": "luvsic",
        "artist": "Nujabes",
        "fullsong": "Luv Sic pt3",
        "picture": "nujabes.jpg",
    },
    {
        "song": "DoForLove",
        "artist": "Tupac Shakur",
        "fullsong": "Do For Love",
        "picture": "pac.jpg",
    },
    {
        "song": "Spiderwebs",
        "artist": "No Doubt",
        "fullsong": "Spiderwebs",
        "picture": "gwenhot.jpg"
    },
    {
        "song": "Somewhere",
        "artist": "Keane",
        "fullsong": "Somewhere Only We Know",
        "picture": ""
    },
    {
        "song": "Afterthought",
        "artist": "Joji",
        "fullsong": "Afterthought",
        "picture": "Joji.jpg"
    },
    {
        "song": "Bittersweet",
        "artist": "The Verve",
        "fullsong": "Bittersweet Symphony",
        "picture": "verve.jpeg"
    },
    {
        "song": "Death",
        "artist": "Coldplay",
        "fullsong": "Death and All of His Friends",
        "picture": "coldplay.png"
    },
    {
        "song": "Lost",
        "artist": "Coldplay",
        "fullsong": "Lost!",
        "picture": "coldplay.png"
    },
    {
        "song": "LuckyMan",
        "artist": "The Verve",
        "fullsong": "Lucky Man",
        "picture": "verve.jpeg"
    },
    {
        "song": "Title",
        "artist": "Death Cab for Cutie",
        "fullsong": "Title And Registration",
        "picture": "death5.jpg"
    },
    {
        "song": "Requiem",
        "artist": "Mozart",
        "fullsong": "Requiem",
        "picture": ""
    },
    {
        "song": "Disguise",
        "artist": "Kings of Leon",
        "fullsong": "Time in Disguise",
        "picture": "kings.jpg"
    },
    {
        "song": "Wave",
        "artist": "Kings of Leon",
        "fullsong": "Wave",
        "picture": "kings.jpg"
    },
    {
        "song": "Gooey",
        "artist": "Glass Animals",
        "fullsong": "Gooey",
        "picture": "glass2.jpg"
    },
    {
        "song": "Life",
        "artist": "No Doubt",
        "fullsong": "It's my life",
        "picture": "gwenhot.jpg"
    },
    {
        "song": "Sonata",
        "artist": "Beethoven",
        "fullsong": "Moonlight Sonata",
        "picture": "",
    },
    {
        "song": "Slang",
        "artist": "The Shins",
        "fullsong": "New Slang",
        "picture": "shins.jpg",
    },
    {
        "song": "Revenge",
        "artist": "Say Anything",
        "fullsong": "Total Revenge",
        "picture": "sayanything.jpeg",
    },
    {
        "song": "Phantom",
        "artist": "The Shins",
        "fullsong": "Phantom Limb",
        "picture": "shins.jpg",
    },
    {
        "song": "Nocturne",
        "artist": "Chopin",
        "fullsong": "Nocturne op2 no9",
        "picture": "",
    },
    {
        "song": "Miss",
        "artist": "Blink-182",
        "fullsong": "Miss You",
        "picture": "blink.jpg",
    },
    {
        "song": "Let",
        "artist": "The Beatles",
        "fullsong": "Let it Be",
        "picture": "abbey.jpg",
    },
    {
        "song": "Careful",
        "artist": "Cardi B",
        "fullsong": "Be Careful",
        "picture": "cardi.jpg",
    },
    {
        "song": "Caring",
        "artist": "The Shins",
        "fullsong": "Caring is Creepy",
        "picture": "shins.jpg",
    },
    {
        "song": "Better",
        "artist": "Say Anything",
        "fullsong": "Do Better",
        "picture": "sayanything.jpeg",
    },
    {
        "song": "Madness",
        "artist": "Muse",
        "fullsong": "Madness",
        "picture": "muse.jpg"
    },
    {
        "song": "There",
        "artist": "Radiohead",
        "fullsong": "There There",
        "picture": "radiohead.jpg"
    },
    {
        "song": "Melancholy",
        "artist": "Gorillaz",
        "fullsong": "On Melancholy Hill",
        "picture": "gorillaz.jpg"
    },
    {
        "song": "Edit",
        "artist": "Modest Mouse",
        "fullsong": "Edit the Sad Parts",
        "picture": "mouse.jpg",
    },
    {
        "song": "Boat",
        "artist": "Modest Mouse",
        "fullsong": "Missed the Boat",
        "picture": "mouse.jpg",
    },
    {
        "song": "1979",
        "artist": "Smashing Pumpkins",
        "fullsong": "1979",
        "picture": "smashingpumpkins.jpg"
    },
    {
        "song": "Hand",
        "artist": "Alanis Morissette",
        "fullsong": "Hand in My Pocket",
        "picture": "alanis.jpg"
    },
    {
        "song": "Soul",
        "artist": "Death Cab for Cutie",
        "fullsong": "Soul Meets Body",
        "picture": "death5.jpg"
    },
    {
        "song": "Hows",
        "artist": "Third Eye Blind",
        "fullsong": "How's it Gonna Be?",
        "picture": "thirdeye.jpg"
    },
    {
        "song": "Make",
        "artist": "Queens of the Stone Age",
        "fullsong": "Make it Wit Chu",
        "picture": "qotsa.jpg",
    },
    {
        "song": "Maps",
        "artist": "Yeah Yeah Yeahs",
        "fullsong": "Maps",
        "picture": "yeah.jpg"
    },
    {
        "song": "Night",
        "artist": "Modest Mouse",
        "fullsong": "Night on the Sun",
        "picture": "mouse.jpg",
    },
    {
        "song": "Now",
        "artist": "Blink-182",
        "fullsong": "Not Now",
        "picture": "blink.jpg",
    },
    {
        "song": "Outta",
        "artist": "Alanis Morissette",
        "fullsong": "You Outta Know",
        "picture": "alanis.jpg"
    },
    {
        "song": "Simple",
        "artist": "No Doubt",
        "fullsong": "A Simple Kind of Life",
        "picture": "gwenhot.jpg",
    },
    {
        "song": "Torn",
        "artist": "Natalie Imbruglia",
        "fullsong": "Torn",
        "picture": "natalie.jpg"
    },
    {
        "song": "Tune",
        "artist": "The Format",
        "fullsong": "Tune Out",
        "picture": "format.jpg",
    },
    {
        "song": "Youth",
        "artist": "Glass Animals",
        "fullsong": "Youth",
        "picture": "glass2.jpg",
    },
    {
        "song":"Broke",
        "artist": "Modest Mouse",
        "fullsong": "Broke",
        "picture": "mouse.jpg",
    },
    {
        "song": "Reckoner",
        "artist": "Radiohead",
        "fullsong": "Reckoner",
        "picture": "radiohead.jpg",
    },
    {
        "song": "Wait",
        "artist": "The Format",
        "fullsong": "Wait, Wait, Wait",
        "picture": "format.jpg",
    },
    {
        "song": "Sore",
        "artist": "The Format",
        "fullsong": "Sore Thumb",
        "picture": "format.jpg",
    },
    {
        "song": "Tiny",
        "artist": "Death Cab for Cutie",
        "fullsong": "Tiny Vessels",
        "picture": "deathcab.jpg"
    },
    {
        "song": "Angeles",
        "artist": "Elliot Smith",
        "fullsong": "Angeles",
        "picture": ""
    },
    {
        "song": "Between",
        "artist": "Elliot Smith",
        "fullsong": "Between",
        "picture": ""
    },
    {
        "song": "Cigarette2",
        "artist": "Cage the Elephant",
        "fullsong": "Cigarette Daydreams",
        "picture": "cage.png",
    },
    {
        "song": "Nothing",
        "artist": "Cigarettes After Sex",
        "fullsong": "Nothing's Gonna Hurt You, Baby",
        "picture": ""
    },
    {
        "song": "Grapevine",
        "artist": "Death Cab for Cutie",
        "fullsong": "Grapevine Fires",
        "picture": "deathcab.jpg"
    },
    {
        "song": "Motion",
        "artist": "Radiohead",
        "fullsong": "Motion Picture Soundtrack",
        "picture": "radiohead.jpg",
    },
    {
        "song": "Parallel",
        "artist": "Red Hot Chili Peppers",
        "fullsong": "Parallel Universe",
        "picture": "rhcp.jpg",
    },
    {
        "song": "Strawberry",
        "artist": "The Beatles",
        "fullsong": "Strawberry Fields Forever",
        "picture": "abbey.jpg",
    },
    {
        "song": "District",
        "artist": "The Postal Service",
        "fullsong": "The District Sleeps Alone Tonight",
        "picture": "postal2.jpeg"
    },
    {
        "song": "Cemetary",
        "artist": "Say Anything",
        "fullsong": "Cemetary",
        "picture": "sayanything.jpeg",
    },
    {
        "song": "Subterranean",
        "artist": "Radiohead",
        "fullsong": "Subterranean Homesick Alien",
        "picture": "radiohead.jpg",
    },
];

console.log(`${manobj.length} is man length`);

console.log(`${womanobj.length} is woman length`);

console.log(`${womanobj.length + manobj.length} is total length`);

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

    if(manobj[k].picture){
        console.log("there is a pic");
        document.getElementById("picture").innerHTML=`
    <img src="static/img/${manobj[k].picture}" alt="${manobj[k].artist}" class="pic">
    `
    }
    else{
        console.log("no pic");
        document.getElementById("picture").innerHTML=`
    
    `
    }

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
    if(womanobj[k].picture){
        console.log("there is a pic");
        document.getElementById("picture").innerHTML=`
    <img src="static/img/${womanobj[k].picture}" alt="${womanobj[k].artist}" class="pic">
    `
    }
    else{
        console.log("no pic");
        document.getElementById("picture").innerHTML=`
    
    `
    }
    


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
    document.getElementById("switch").innerHTML=`
    Blog
    `;
}
function alien(){
    document.getElementById("switch").innerHTML=`
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