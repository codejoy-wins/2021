let data = [
    {
        "name":"golfer",
        "img": "damien.jpg",
        "story": "On Saturday Damien Marley golfed a hole in one",
        "headline": "Golfer hits a hole in one"
    },
    {
        "name":"miss",
        "img": "sohot.jpg",
        "story": "On Friday Max turned down miss america on the grounds that she wasn't pretty enough.",
        "headline": "Miss America turned down"

    },
    {
        "name":"nas",
        "img": "nas.jpg",
        "story": "On Sunday Nas punched a man for looking at him the wrong way",
        "headline": "Nas punches man on the street"
    },
    {
        "name":"miss",
        "img": "sohot.jpg",
        "story": "On Friday Max turned down miss america on the grounds that she wasn't pretty enough.",
        "headline": "Miss America turned down"
    }
]



function story(magic){
    console.log(`story function with magic at ${magic}`);
    document.getElementById("sidebar").innerHTML=`
        <h1>${data[magic].headline}</h1>
        <div class="news">
            <p>${data[magic].story}</p>
            <img src="static/img/${data[magic].img}" alt="golfer" class="pic">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit ex hic, adipisci omnis dolores odio a eaque accusantium eos, illum cumque culpa esse saepe quos inventore eum facilis autem!</p>
        </div>
        Magic is ${magic}
        <img class="pic" src="${data[magic].img}>
        <h1>hello</h1>
    `
}