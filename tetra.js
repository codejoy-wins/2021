console.log("tetra");

// what if you were inside the game/website
// and you moved around and navigated through it to different links /apps

// first-person websites

let stata = false;
document.getElementById("tetrahedron").addEventListener("click", Master);

function Master(){
    console.log("masta");
    if(stata==true){
        document.getElementById("tetrahedron").classList.remove("xy");
        stata = false;
    }else{
        document.getElementById("tetrahedron").classList.add("xy");
        stata = true;
    }
}

//   I want a clickable dragable reactive 3d Tetrahedron homepage used to navigate my site like a magic 8 ball, each face of the tetrahedron should take you to another part of the website

// blog, book, djaliens, intro

// It needs a halo like my symbol

// Perfect Tetrahedron with all interger sides, 117 length for the base


