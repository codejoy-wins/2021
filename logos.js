const maxwell = ()=>{
    const burger = document.querySelector('.burger');
    const closer = document.querySelector('.perfect');
    const mega = document.querySelector('.megaphone');
    const song = document.querySelector('.song');
    const navs = document.querySelector('.nav-links');
    const vid = document.querySelector('.backyard');

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
        if(isplaying==false){
            console.log("playing now")
            song.play();
            isplaying = true;
        }else{
            console.log("volume toggle");
            song.pause();
            isplaying = false;
        }
    })
}

maxwell();