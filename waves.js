function waves(){
    console.log("waves");
}
waves();
// I want an app with a changing background gif depending on time of day
let zeus = new Date();
let horse = zeus.getHours();
console.log(horse);

if(horse>18 && horse >7){
    console.log("night mode");
    night();
}else{
    console.log("day mode");
    day();
}
function night(){
    document.getElementById("time").innerHTML=`Good Evening - ${zeus}`;
    document.getElementById("xp").innerHTML=`
    <video autoplay="autoplay" loop class="vid" controls src="static/img/ocean.mp4" type="video/mp4"></video>
    `
}
function day(){
    document.getElementById("time").innerHTML=`Good Morning - ${zeus}`;
    document.getElementById("xp").innerHTML=`
    <video autoplay="autoplay" loop class="vid" controls src="static/img/ocean2.mp4" type="video/mp4"></video>
    `
}