const maxwell = ()=>{
    const burger = document.querySelector('.burger');
    const closer = document.querySelector('.perfect');


    const navs = document.querySelector('.nav-links');

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
}

maxwell();