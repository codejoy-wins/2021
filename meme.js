/// script link must be at bottom of html to process form locally

let data = [
    {
        "first": "charizard",
        "second": "fire"
    },
    {
        "first": "blastoise",
        "second": "water"
    },

];
function populate(){
    for(var i = 0; i <= data.length; i++){
        document.getElementById("info").innerHTML+=`
        <p>hello</p>
        `
    }
}

// Prevent form default submission.  Log values of fields.
const preventing = (e)=>{
    e.preventDefault();
    console.log(document.getElementById("first").value);
    console.log(document.getElementById("second").value);
    let thing = {
        "first": document.getElementById("first").value,
        "second": document.getElementById("second").value,
    }
    data.push(thing);
    document.getElementById("info").innerHTML="";
    for(var i = 0; i <data.length; i++){
        console.log(`data is ${data}`);
        console.log(`data[${i}] is ${data.i}`);
        console.log(`data[${i}].first is ${data[i].first}`);
        console.log(`data[${i}].second is ${data[i].second}`);
        document.getElementById("info").innerHTML+=`
        <p>${data[i].first} is ${data[i].second} type</p>
        `
    }
    



}
// Once it's loaded, get the button xxx and call a function when its clicked
document.addEventListener('DOMContentLoaded', ()=>{
    console.log("loaded");
    document.getElementById("xxx").addEventListener('click', preventing);
});


// would like to do a full ipod app with the ability to search for songs, rewind, and start over
// progress bar animation -- 


/// card game would be fun.

/// pokemon card game vs. computer

/// draft system

/// type advantages

/// use attacks against AI using random moves against you.