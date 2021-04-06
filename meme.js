/// script link must be at bottom of html to process form locally


// Prevent form default submission.  Log values of fields.
const preventing = (e)=>{
    e.preventDefault();
    console.log(document.getElementById("top").value);
    console.log(document.getElementById("bottom").value);
    console.log(document.getElementById("pic").value);

    let top = document.getElementById("top").value;
    let bottom = document.getElementById("bottom").value;
    let pic = document.getElementById("pic").value;

    console.log(`top is ${top} and bottom is ${bottom} and ${pic} is pic`);

    let meme = {
        "top": top,
        "bottom": bottom,
        "pic": pic,
        "false": "https://i.pinimg.com/474x/5a/e1/5f/5ae15f2ef63ecded7dbe6cf55dc47ae8.jpg"
    }
    makememe(meme);
    document.getElementById("info").innerHTML="";
    
}

function makememe(meme){
    console.log(`meme.pic = ${meme.pic}`);
    console.log(`${meme.pic}`);

    document.getElementById("master").innerHTML=`
    <div id="picture2" style="background-image: url('${meme.pic}'); background-repeat: no-repeat; background-size: cover; background-position: center;">
        <div id="trick2">
        <h1>${meme.top}</h1>
        <img src="${meme.pic}" alt="idk" class="pickle">
        <h1>${meme.bottom}</h1>
        </div>
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