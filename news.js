let data = [
    {
        "name":"golfer",
        "img": "damien.jpg",
        "story": "On Saturday Damien Marley golfed a hole in one",
        "headline": "Golfer hits a hole in one",
        "fullstory": "On Saturday Damien Marley golfed a hole in one",

    },
    {
        "name":"miss",
        "img": "sohot.jpg",
        "story": "On Friday Max turned down miss america on the grounds that she wasn't pretty enough.",
        "headline": "Miss America turned down",
        "fullstory": "Sorry ladies, I only date models.",

    },
    {
        "name":"nas",
        "img": "nas.jpg",
        "story": "On Sunday Nas punched a man for looking at him the wrong way",
        "headline": "Nas punches man on the street",
        "fullstory": "Half man half Amazing.",
    },
    {
        "name":"miss",
        "img": "sohot.jpg",
        "story": "On Friday Max turned down miss america on the grounds that she wasn't pretty enough.",
        "headline": "Miss America turned down",
        "fullstory": "Sorry ladies, I only date models.",
    },
    {
        "name":"vax",
        "img": "spacefire.jpg",
        "story": "On Planet Hell, you will now be awarded 5 minutes in the shade.  Isn't that wonderful? People actaully think a vax passport is a good thing and they get to avoid quarentine.  They don't see that they were only quarentining people to piss them off so that when they offer a vax and vax passport as a way out they take it.  It's like if I pinch you and then say paying me 5 dollars removes my pinch.  Suddenly the idea of paying me 5 dollars becomes more attractive, when the truth is I should have never pinched you in the first place.  It's such fucking bullshit. ",
        "headline": "Vaccine Passports in Hawaii",
        "fullstory": "I mean how people don't see through the bullshit I just don't know.  It's so obvious to me that they purposefully made our lives hell for no reason and are offering us a way out contingent upon vax and vax passports and all this crap we would have never otherwise put up with.  But no, people just think it's totally normal and acceptable to be quarenteened for jack shit, and then they take the first deal they're offered by the crooks who orchestrated it.  My friend actually said 'If you don't think they're doing a good job stopping the spread of the virus than I can't help you.'  Dude.  That's like if we mandated that no one could use the freeway or drive a car at all anymore period.  And then me saying to him when he complains, 'If you don't think we're doing a good job stopping auto accidents then I can't help you.' ",
    },
]



function story(magic){
    console.log(`story function with magic at ${magic}`);
    document.getElementById("sidebar").innerHTML=`
        <h1>${data[magic].headline}</h1>
        <div class="news">
            <p>${data[magic].story}</p>
            <img src="static/img/${data[magic].img}" alt="golfer" class="pic">
            <p>${data[magic].fullstory}</p>
        </div>
        Magic is ${magic}
        <img class="pic" src="${data[magic].img}>
        <h1>hello</h1>
    `
}