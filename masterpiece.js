let masterlist = [
    {
        "song":"Queen",
        "artist": "Perfume Genius",
        "fullsong": "Queen",
        "picture": "",
        "video":`<iframe width="560" height="315" src="https://www.youtube.com/embed/C5i-UnuUKUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },
    {
        "song":"Hurt",
        "artist": "Oliver Tree",
        "fullsong": "Hurt",
        "picture": "",
        "video":`<iframe width="100%" height="315" src="https://www.youtube.com/embed/NqpnbSFprB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },
]


document.getElementById("song").innerHTML=`
    <h2>${masterlist[0].song}</h2>
    <div class="vid">${masterlist[0].video}</div>
`