imgs=[
    {
        imgname:"Warilla.jpg",
        imgdesc:"",
        category:"ai",
    },
    {
        imgname:"elamfuture.jpg",
        imgdesc:"",
        category:"ai",

    },
    
    {
        imgname:"ElamForever.png",
        imgdesc:"",
        category:"ai",

    },
    {
        imgname:"Aurora and Tigon.png",
        imgdesc:"",
        category:"ai",

    },
    {
        imgname:"angel.png",
        imgdesc:"",
        category:"ai",

    },
    {
        imgname:"mj3.png",
        imgdesc:"",
        category:"ai",

    },
    {
        imgname:"Iridielle.jpg",
        imgdesc:"",
        category:"ai",

    },
    {
        imgname:"Tigon.png",
        imgdesc:"",
        category:"ai",

    },
    {
        imgname:"snakeeater.jpg",
        imgdesc:"",
        category:"ai",

    },
    
    {
        imgname:"",
        imgdesc:"",
        category:"ai",

    },
]

function emitter(){
    console.log("hey");
    let targ = document.getElementById("target");
    for(let i=0; i < imgs.length;i++){
        targ.innerHTML+= `
        <div class="phase">
        <img class="${imgs[i].category}" src="static/img/${imgs[i].imgname}">
        <p>${imgs[i].imgdesc}</p>
        </div>
        `
    }
}
emitter();