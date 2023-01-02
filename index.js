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
c.height = window.innerHeight;
c.width = window.innerWidth;

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
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
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




// end of stolen but edited canvas js


// //DTX version
// // geting canvas by Boujjou Achraf
// var d = document.getElementById("d");
// var dtx = d.getContext("2d");
// // xp
// //toDataURL() canvas function almost works to make canvas a background
// // document.getElementById("new3").style.background = "url(" + canvas.toDataURL() + ")";

// //making the canvas full screen
// d.height = window.innerHeight;
// d.width = window.innerWidth;

// //chinese characters - taken from the unicode charset
// var matrix3 = "elamahplacloudlandwhitebloodcellELAMAHPLACLOUDLANDWHITEBLOODCELL117$$$117}";

// //converting the string into an array of single characters
// matrix3 = matrix3.split("");

// var font_size2 = 10;
// var columns2 = d.width/font_size2; //number of columns for the rain
// //an array of drops - one per column
// var drops2 = [];
// //x below is the x coordinate
// //1 = y co-ordinate of the drop(same for every drop initially)
// for(var xx = 0; xx < columns; xx++)
//     drops2[xx] = 1; 

// //drawing the characters
// function draw()
// {
//     //Black BG for the canvas
//     //translucent BG to show trail
//     dtx.fillStyle = "rgba(0, 0, 0, 0.04)";
//     dtx.fillRect(0, 0, d.width, d.height);

//     dtx.fillStyle = "#f4427d";//green text
//     dtx.font = font_size2 + "px arial";
//     //looping over drops
//     for(var ii = 0; ii < drops2.length; ii++)
//     {
//         //a random chinese character to print
//         var text2 = matrix2[Math.floor(Math.random()*matrix3.length)];
//         //x = i*font_size, y = value of drops[i]*font_size
//         dtx.fillText(text2, ii*font_size2, drops2[ii]*font_size2);

//         //sending the drop back to the top randomly after it has crossed the screen
//         //adding a randomness to the reset to make the drops scattered on the Y axis
//         if(drops2[ii]*font_size2 > d.height && Math.random() > 0.975)
//             drops2[ii] = 0;

//         //incrementing Y coordinate
//         drops2[ii]++;
//     }
// }

// setInterval(draw, 35);



// // dtx end of stolen but edited canvas js dtx






var xpcanva = document.getElementById("xpcanvas");
const dataURL = xpcanva.toDataURL();
console.log(dataURL);
//








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
    

    burger.addEventListener('click', ()=>{
        console.log("ahhh");
        navs.classList.toggle('super');
        burger.classList.toggle('green');

    })

    
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
nextTime();