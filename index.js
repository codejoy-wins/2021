// geting canvas by Boujjou Achraf
var c = document.getElementById("c");
var ctx = c.getContext("2d");
// xp
//toDataURL() canvas function almost works to make canvas a background
// document.getElementById("new3").style.background = "url(" + canvas.toDataURL() + ")";

//making the canvas full screen
// c.height = window.innerHeight;
// c.width = window.innerWidth;
// new height try
let maxheight;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    console.log("mobile device");
    maxheight=window.innerHeight*1.411;
  }else{
    // false for not mobile device
    console.log("not mobile device");
    maxheight=window.innerHeight*1.117;
  }
c.height = maxheight;
c.width = window.innerWidth;
//mobile


//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
var matrix2 = "elamahplacloudlandwhitebloodcellELAMAHPLACLOUDLANDWHITEBLOODCELL117$$$117}";

//converting the string into an array of single characters
matrix2 = matrix2.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    // ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillStyle = "rgba(0, 0, 0, 0.117)";

    ctx.fillRect(0, 0, c.width, c.height);

    // ctx.fillStyle = "#f4427d";//green text
    ctx.fillStyle = "gold";//green text

    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix2[Math.floor(Math.random()*matrix2.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);








// if user is on phone inject text " i see you're on your phone"
// if user is not on phone inject text "thank you for using your computer"


function crazy(x){
    console.log(`crazy of ${x}`);
    if(x<3){
        console.log("x is less than 3");
    }else{
        console.log("x isn't less than 3");
    }
}
crazy(32);
crazy(1);

let xyz = document.getElementById("background-video");

const maxwell = ()=>{
    const burger = document.querySelector('.burger');
    const navs = document.querySelector('.nav-links');
    // 'click'

    burger.addEventListener('click', ()=>{
        console.log("ahhh");
        navs.classList.toggle('super');
        burger.classList.toggle('green');

    })
    // burger.addEventListener('mouseover', ()=>{
    //     console.log("ahhh");
    //     navs.classList.toggle('super');
    //     burger.classList.toggle('green');
    // })

    
}

maxwell();

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        console.log('tab');
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        console.log('mobile');
        return "mobile";
    }
    console.log("desktop");
    return "desktop";
};
deviceType();

const helloWorld = () => {
    if(deviceType()=="desktop"){
        console.log("I see you're on a desktop");
        document.getElementById("intro").innerHTML=`
            <p>
            <span id="goldfirst">W</span>elcome to Cloudland, I see you're on your computer.
            </p>
        `
    }
    if(deviceType()=="tablet"){
        console.log("I see you're on a tablet");
        document.getElementById("intro").innerHTML=`
            <p>
            <span id="goldfirst">W</span>elcome to Cloudland, I see you're on instagram.
            </p>
        `
    }
    if(deviceType()=="mobile"){
        console.log("I see you're on your phone");
        document.getElementById("intro").innerHTML=`
            <p>
            <span id="goldfirst">W</span>elcome to Cloudland, I see you're on your "cell" phone.
            </p>
        `
    }
    
}
helloWorld();

const nextTime = () =>{
    let mytiming = new Date();
    let correcttime = mytiming.getHours();
    let pikachu = mytiming.getMinutes();
    let correctday = mytiming.getDay();
    let day = correctday;
    let mandela = false;
    let weekend = false;
    if(day>=5){
        weekend = true;
    }
    if(day==0){
        weekend = true;
    }

    if(correcttime>12){
        correcttime = correcttime -12;
    }
    if(correcttime == 0){
        correcttime = 12;
    }
    console.log('time');
    if(!weekend){
        document.getElementById("next").innerHTML=`
        <p>
            Is it ${correcttime} o'clock already?
        </p>
        <p>
            Only ${5-day} more days til the weekend
        </p>
        `
    }
    else{
        document.getElementById("next").innerHTML=`
        <p>
            Is it ${correcttime} o'clock already?
        </p>
        <p>Enjoy your weekend</p>
    `
    }
    
}

let songz = [
    `hates`,
    `Lying`,
    `cali`,
    `Afterlie`,
    `diamond`,
    `vice`,
    `AdoreYou`,
    `only`,
    `winter`,
    `herestoyou`,
    `fakebook`,
]

let songs = [
       `This Town Hates Me`,
       `Lying`,
       `California`,
       `Afterli(f)e`,
       `Cold Diamond`,
       `Add Vice for a Friend`,
       `Adore You`,
       `If Only`,
       `Beautiful Winter`,
       `Here's to You`,
       `Fakebook`,
]

function randosong(){
    let x = Math.random(0,songz.length);
    x=x*10;
    x = Math.floor(x);
    
    console.log(`x is ${x}`);
    document.getElementById("introsong").innerHTML=`
    <audio id="player" onended="randosong()" src="static/audio/${songz[x]}.mp3"></audio>
    `
    document.getElementById("descsong").innerHTML=`
    <p>${songs[x]}</p>
    `
}

nextTime();
randosong();

// background-image: url("../img/sensa.jpeg");
    /* background-image: url("../img/wa.jpeg"); */
    /* background-image: url("../img/HaloBeautiful\ copy.png"); */
    /* background-image: url("../img/wartri.jpeg"); */
    /* background-image: url("../img/Avriel.jpeg"); */



const tris=[
    {
        imgx:"teroh0"
    },
    {
        imgx:"teroh1"
    },
    {
        imgx:"teroh2"
    },
    {
        imgx:"teroh3"
    },
    {
        imgx:"teroh4"
    },
]
// choose random image triangle and make that the main image

let currentri = "parallaxnew";

function craig(){
    console.log("Mr. Teroh");
    let zzz = Math.floor(Math.random()*5);
    console.log(zzz);
    let trii = tris[zzz].imgx;
    console.log(`trii is ${trii}`);
    document.getElementById("teroh").classList.remove(currentri);
    document.getElementById("teroh").classList.add(trii);
    currentri = trii;
    if(currentri == "teroh3"){
        document.getElementById("picdisplay").innerHTML=`
        <img class="pic" src="static/img/HaloBeautiful\ copy.png" alt="treelam">
        `
    }
    if(currentri == "teroh2"){
        document.getElementById("picdisplay").innerHTML=`
        <img class="pic" src="static/img/wa.jpeg" alt="treelam">
        `
    }
    if(currentri == "teroh4"){
        document.getElementById("outr").innerHTML=`
        <div class="parallaxteroh"></div>
        `
    }
}
craig();

// run craig again every 5 minutes?