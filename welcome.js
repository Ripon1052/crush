const enterButton = document.getElementById('enterButton');
const backgroundMusic = document.getElementById('backgroundMusic');

enterButton.addEventListener('click', () => {
    // Play the background music
    backgroundMusic.play();
    
    // Redirect to the second page after a delay
    setTimeout(() => {
        window.location.href = 'crush.html';
    }, ); // Redirect after 1 second (1000 milliseconds)
});
