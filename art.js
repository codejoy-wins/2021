document.addEventListener('DOMContentLoaded', function() {
    // Check if the screen width is less than or equal to 768 pixels (common breakpoint for mobile devices)
    if (window.innerWidth <= 768) {
        // If on mobile, load both AI and Original galleries
        loadArt('ai');
        loadArt('original');
        window.location.href = "https://www.maxjann.com/artsave/";
    }
});



// ... rest of your JavaScript code ...



function showOptions() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('artOptions').style.display = 'block';
}

// ... Existing JavaScript code ...


// ChatGPT latest below

function hoverEffect(side) {
    var leftText = document.querySelector('.left-text');
    var rightText = document.querySelector('.right-text');

    if (side === 'ai') {
        leftText.style.opacity = '1';
        rightText.style.opacity = '0';
    } else if (side === 'original') {
        rightText.style.opacity = '1';
        leftText.style.opacity = '0';
    }
    if (side === 'ai') {
        document.querySelector('.left').classList.add('light');
        document.querySelector('.right').classList.add('dark');
    } else if (side === 'original') {
        document.querySelector('.right').classList.add('light');
        document.querySelector('.left').classList.add('dark');
    }
}

function resetHover() {
    var leftText = document.querySelector('.left-text');
    var rightText = document.querySelector('.right-text');
    leftText.style.opacity = '0.5';
    rightText.style.opacity = '0.5';
    document.querySelectorAll('.half-screen').forEach(function (el) {
        el.classList.remove('dark', 'light');
    });
}

function loadArt(type) {
    var gallery = document.getElementById('gallery');
    var welcome = document.getElementById('welcomeScreen');

    // gallery.innerHTML = ''; // Clear the gallery
    if (window.innerWidth > 768) {
        gallery.innerHTML = ''; // Clear the gallery only if not on mobile
    }
    var basePath = type === 'ai' ? 'static/img/ai/' : 'static/img/og/';
    var count = type === 'ai' ? 20 : 10;
    
    for (var i = 1; i <= count; i++) {
        var img = document.createElement('img');
        img.src = basePath + i + '.png'; // Assuming images are named 'image1.jpg', 'image2.jpg', etc.
        img.alt = type + ' art ' + i;
        gallery.appendChild(img);
    }
    
    // Hide the welcome screen after loading the gallery
    if (window.innerWidth > 768) {
        welcome.innerHTML = ''; // Clear the welcome
    }
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('x').innerHTML=`
        <div class="xy">Gallery Under Construction - Yours Truly</div>
    `
}