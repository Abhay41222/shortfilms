// Function to load the selected cartoon into the video player
function loadCartoon(cartoonFile) {
    const player = document.getElementById('cartoon-player');
    const source = document.getElementById('cartoon-source');
    source.src = cartoonFile;
    player.load(); // Reload the player with the new source
    player.play(); // Automatically play the video after the source change
}

// Function to filter cartoons by category
function filterCategory(category) {
    const allCartoons = document.querySelectorAll('.cartoon-item');
    allCartoons.forEach(cartoons => {
        if (category === 'all' || cartoons.dataset.category === category) {
            cartoons.style.display = 'block';
        } else {
            cartoons.style.display = 'none';
        }
    });
}
