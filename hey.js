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
            Welcome, I see you're on your desktop.
            </p>
            <p>
            That provides the best user experience
            </p>
        `
    }
    if(deviceType()=="tablet"){
        console.log("I see you're on a tablet");
        document.getElementById("intro").innerHTML=`
            <p>
            Welcome, I see you're on instagram.
            </p>
        `
    }
    if(deviceType()=="mobile"){
        console.log("I see you're on your phone");
        document.getElementById("intro").innerHTML=`
            <p>
            Welcome, I see you're on your phone.
            </p>
            <p>
            While you are using your cellphone and listening to me hear me speak:
            </p>
            <p>
            Turn all notifications off completely even to the last vibrate and ring.
            </p>
            <p>
            You already look at your phone enough.  You don't need to look at your phone when you weren't planning on looking at your phone too because it vibrated.
            </p>
            <p>
            This is craziness of couse, like Amish people.  But listen to the truth in what I'm saying and find within the range of you and me to adjust your smartphone to better suit the happiness of you and those around you.  I can teach you how to manage your notification setting and optimize your personal relationships.
            </p
            <p>
            I would recommend starting <a target="_blank" href="welcome.html">here</a> instead
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