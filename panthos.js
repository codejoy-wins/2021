document.addEventListener('DOMContentLoaded', function() {
    console.log("max used gpt");
    var audio = document.getElementById('myAudio');
    var playButton = document.getElementById('playButton');
    
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            console.log("x");
            audio.play();
            playButton.textContent = 'Pause';
        } else {
            console.log("xy");
            audio.pause();
            playButton.textContent = 'Play';
        }
    });
    
    audio.addEventListener('ended', function() {
        playButton.textContent = 'Play';
    });
});
// all chatgpt
document.addEventListener('DOMContentLoaded', function() {
    console.log("max used gpt2");
    var audio2 = document.getElementById('myAudio2');
    var playButton2 = document.getElementById('playButton2');
    
    playButton2.addEventListener('click', function() {
        if (audio2.paused) {
            console.log("x");
            audio2.play();
            playButton2.textContent = 'Pause';
        } else {
            console.log("xy");
            audio2.pause();
            playButton2.textContent = 'Play';
        }
    });
    
    audio.addEventListener('ended', function() {
        playButton2.textContent = 'Play';
    });
});