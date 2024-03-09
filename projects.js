document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { title: "Unreal Cloudland", 
        description: "I'm learning Unreal Engine 5.3 with my new Macbook Pro M3", 
        imageUrl: "static/img/elamcloud.png",
        linkURL: "",
        videoembed:"https://www.youtube.com/embed/RD_gv9ljuF0?si=ZlVkygmg-2FsuiWn",
     },
        { title: "OneDate",
         description: "A single-page web application that uses artificial intelligence to generate a date for you in between you and your date's current location.", 
         imageUrl: "static/img/1d.jpg",
         linkURL:"onedate.html",
         videoembed:"",
         },
         { title: "Mewthree",
         description: "A single-page web application that uses artificial intelligence and a pokemon API to let you pick a team of any 6 pokemon and challenge Mewthree to a battle.", 
         imageUrl: "static/img/mewthree.png",
         linkURL:"pokedex.html",
         videoembed:"",
         },
         { title: "Blog",
         description: "A dynamically styled blog that automatically displays all my blog posts from that month", 
         imageUrl: "static/img/blogexample.png",
         linkURL:"blog.html",
         videoembed:"",
         },
         { title: "DJ Aliens",
         description: "A iPod type App that simulates 2 Alien DJ's for you, a male and a female with different tastes",
         imageUrl: "static/img/djaliensj.jpg",
         linkURL:"alien.html",
         videoembed:"",
         },
        // I should also add video demos for each project, as well as a link
    ];

    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        const item = document.createElement('div');
        item.classList.add('project-item');

        const image = document.createElement('img');
        image.src = project.imageUrl;
        image.classList.add('project-image');

        const title = document.createElement('div');
        title.classList.add('project-title');
        title.textContent = project.title;

        const description = document.createElement('div');
        description.classList.add('project-description');
        description.textContent = project.description;

        const linkButton = document.createElement('a');
        linkButton.href = project.linkURL;
        linkButton.textContent = "Try App";
        linkButton.classList.add('project-link', 'hidden');
        linkButton.target = "_blank"; // Opens the link in a new tab

        const video = document.createElement('div');
        video.innerHTML = `
        <iframe width="100%" height="315" src="${project.videoembed}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
        video.classList.add('project-vid', 'hidden');
        item.appendChild(image);
        item.appendChild(title);
        item.appendChild(description);
        if(project.linkURL){
            item.appendChild(linkButton);
        }
        if(project.videoembed){
            item.appendChild(video);
        }else{
            console.log("not");
        }

        item.addEventListener('click', function() {
            // Toggle the visibility of the description and link together
            const isDescriptionVisible = description.style.display === 'block';
            description.style.display = isDescriptionVisible ? 'none' : 'block';
            linkButton.style.display = isDescriptionVisible ? 'none' : 'inline-block'; // Toggle link visibility
            video.style.display = isDescriptionVisible ? 'none' : 'inline-block';
        });

        projectsList.appendChild(item);
    });
});
