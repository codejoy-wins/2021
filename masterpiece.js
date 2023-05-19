console.log("master");

// what if you were inside the game/website
// and you moved around and navigated through it to different links /apps

// first-person websites

document.getElementById("tetrahedron2").addEventListener("click", Master);

function Master(){
    console.log("masta");
    document.getElementById("tetrahedron2").classList.add("xy");
}