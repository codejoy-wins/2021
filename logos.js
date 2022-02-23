const album = [
    {
        "song":"AdoreYou",
        "fullsong":"Come In to Adore You"
    },
    {
        "song":"California",
        "fullsong":"cali",
    },
    {
        "song": "Lying",
        "fullsong": "Lying",
    },
    {
        "song":"Add Vice For a Friend",
        "fullsong": "vice",
    },
    {
        "song":"Cold Diamond",
        "fullsong": "diamond",
    },
    {
        "song":"Alone",
        "fullsong": "alone",
    },
    {
        "song":"Someone Else",
        "fullsong": "someoneelse",
    },
    {
        "song":"This Town Hates Me",
        "fullsong": "caliv2",
    },
    {
        "song":"Alone v2",
        "fullsong": "alonev2",
    },
    {
        "song":"Only",
        "fullsong": "only",
    },
    {
        "song":"Here's to you",
        "fullsong": "herestoyou",
    },
    {
        "song":"Fakebook",
        "fullsong": "fakebook",
    },
    {
        "song":"Beautiful Winter",
        "fullsong": "winter",
    },
]
let currentsong = 0;

let xyz = document.getElementById("background-video");

xyz.classList.add('red');
console.log("hey 1");
    setTimeout(() => {
        console.log("cloudtime1");
        xyz.classList.remove('red');
        xyz.classList.add('blue');
    }, 45000);
    xyz.classList.remove('blue');
    xyz.classList.add('red');
setInterval(() => {
    console.log("hi");
    setTimeout(() => {
        console.log("cloudtime");
        xyz.classList.remove('red');
        xyz.classList.add('blue');
    }, 45000);
    console.log("firetime");
    xyz.classList.remove('blue');
    xyz.classList.add('red');
}, 85500);

const maxwell = ()=>{
    const burger = document.querySelector('.burger');
    const closer = document.querySelector('.perfect');
    const mega = document.querySelector('.megaphone');
    // let song = document.querySelector('.song');
    const navs = document.querySelector('.nav-links');
    const vid = document.querySelector('.backyard');
    let skip = document.querySelector('.skip');
    // let currentsong = 0;



    let isplaying = true;

    burger.addEventListener('click', ()=>{
        console.log("ahhh");
        navs.classList.toggle('super');
        burger.classList.toggle('super');

    })
    closer.addEventListener('click', ()=>{
        console.log("closing nav");
        navs.classList.toggle('super');
        burger.classList.toggle('super');

    })

    vid.addEventListener('click',()=>{
        console.log("background clicked");
        console.log(vid);
        vid.play();
    })

    mega.addEventListener('click', ()=>{
        let song2 = document.querySelector('.song');
        if(isplaying==false){
            console.log("playing now")
            song2.play();
            isplaying = true;
        }else{
            console.log("volume toggle");
            song2.pause();
            isplaying = false;
        }
    })
    skip.addEventListener('click', ()=>{
        let song = document.querySelector('.song');
        console.log("skipping function triggered");
        console.log(`current is ${album[currentsong].fullsong}`)
        if(currentsong<album.length-1){
            currentsong++;
            console.log(`allenght is ${album.length} and current song is ${currentsong}`);
        }else{
            currentsong=0;
        }
        document.getElementById("song").innerHTML=``;
        document.getElementById("song").innerHTML=`
        <audio class="special song" src="static/audio/${album[currentsong].fullsong}.mp3" autoplay onended="nextsong()"></audio>
        `
        console.log(album[currentsong].song);
        document.getElementById("songname").innerHTML=`
        ${album[currentsong].song}
        `
        song.play();
        document.getElementById("tight").innerHTML=album[currentsong].song;

    })

    
}

maxwell();

const nextsong = ()=>{
    console.log("next ");
    let song = document.querySelector('.song');
        console.log("next function triggered");
        console.log(`current is ${album[currentsong].fullsong}`)
        if(currentsong<album.length-1){
            currentsong++;
            console.log(`allenght is ${album.length} and current song is ${currentsong}`);
        }else{
            currentsong=0;
        }
        document.getElementById("song").innerHTML=``;
        document.getElementById("song").innerHTML=`
        <audio class="special song" src="static/audio/${album[currentsong].fullsong}.mp3" autoplay onended="nextsong()"></audio>
        `
        console.log(album[currentsong].song);
        document.getElementById("songname").innerHTML=`
        ${album[currentsong].song}
        `
        song.load();
        song.play();
        document.getElementById("tight").innerHTML=album[currentsong].song;
}