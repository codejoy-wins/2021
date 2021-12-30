/// script link must be at bottom of html to process form locally

let p = "p";
// Prevent form default submission.  Log values of fields.
const preventing = (e)=>{
    e.preventDefault();
    console.log(document.getElementById("top").value);
    console.log(document.getElementById("bottom").value);
    console.log(document.getElementById("pic").value);

    let top = document.getElementById("top").value;
    let bottom = document.getElementById("bottom").value;
    let pic = document.getElementById("pic").value;
    let color = document.getElementById("color").value;


    console.log(`top is ${top} and bottom is ${bottom} and ${pic} is pic`);

    let meme = {
        "top": top,
        "bottom": bottom,
        "pic": pic,
        "false2": "https://i.pinimg.com/474x/5a/e1/5f/5ae15f2ef63ecded7dbe6cf55dc47ae8.jpg",
        "false": "static/img/babe.jpeg",
        "color": color,
    }
    makememe(meme);
    document.getElementById("info").innerHTML="";
    
}
function clearurl(){
    console.log(`clearing`);
    document.getElementById("pic").value=``;
}

function makememe(meme){
    console.log(`meme.color = ${meme.color}`);
    console.log(`${meme.pic}`);
    console.log(`${meme.color}`);


    document.getElementById("master").innerHTML=`
    <div id="wtf" style="background-image: url('${meme.pic}');">
    <h2 style="color: ${meme.color};" >${meme.top}</h2>
    <div id="picture2" >
        <div id="trick2" >
        <img src="${meme.pic}" alt="id2k" class="pickle">
        </div>
    </div>
    <h2 style="color: ${meme.color};" >${meme.bottom}</h2>
    </div>
    `
}
// Once it's loaded, get the button xxx and call a function when its clicked
document.addEventListener('DOMContentLoaded', ()=>{
    console.log("loaded");
    document.getElementById("xxx").addEventListener('click', preventing);
});


// would like to do a full ipod app with the ability to search for songs, rewind, and start over
// progress bar animation -- 