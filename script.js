// Get DOM elements
const playButton = document.getElementById('play-btn');
const gameContent = document.getElementById('game-content');
const startMenu = document.getElementById('start-menu');
const movingWordsContainer = document.getElementById('moving-words');
const imagePlaceholder = document.getElementById('image-placeholder');
const hoverImage = document.getElementById('hover-image');
const priceDisplay = document.getElementById('price-display'); // New element for showing price

// Change the text of the button on hover
playButton.addEventListener('mouseenter', function() {
    playButton.textContent = "GO!";
    triggerConfetti();
});

playButton.addEventListener('mouseleave', function() {
    playButton.textContent = "READY?";
});

// When the "Play" button is clicked
playButton.addEventListener('click', function() {
    startMenu.style.display = 'none';
    gameContent.style.display = 'block';
    generateMovingWords();
});

// Function to generate the moving words
function generateMovingWords() {
    const words = [
        'LOGO DESIGN', 'ANIMATIONS', 'CHARACTER DESIGN', 'COMICS', 'GAME DESIGN', 'PAINTINGS',
        'POSTERS', 'VIDEOS', 'PHOTOGRAPHY', 'WEB DESIGN', 'ZINES', 'ILLUSTRATIONS', 'PACKAGING'
    ];

    let wordsHTML = '';

    words.forEach(word => {
        wordsHTML += `<button class="moving-word" 
            onmouseover="showImage('${word.toLowerCase()}'); showPrice()" 
            onmouseleave="hideImage(); hidePrice()"
            onclick="navigateToPage('${word.toLowerCase().replace(/\s+/g, '-')}')">${word}</button>`;
    });

    movingWordsContainer.innerHTML = wordsHTML + wordsHTML; // Duplicate for seamless scroll
    setUpScrollingAnimation();
}

// Navigate to a page based on word
function navigateToPage(word) {
    window.location.href = `${word}.html`;
}

// Show hover image
function showImage(word) {
    const formatted = word.toLowerCase().replace(/\s+/g, '-');
    hoverImage.src = `${formatted}.png`; // e.g., "character design" => "character-design.png"
    imagePlaceholder.style.display = 'block';
}

// Hide hover image
function hideImage() {
    imagePlaceholder.style.display = 'none';
}

// Show a random price
function showPrice() {
    const price = (Math.random() * 100).toFixed(2); // Generate price like 23.45
    priceDisplay.textContent = `Price: $${price}`;
    priceDisplay.style.display = 'block';
}

// Hide the price display
function hidePrice() {
    priceDisplay.style.display = 'none';
}

// Set up infinite scrolling
function setUpScrollingAnimation() {
    movingWordsContainer.style.transform = "translateX(0)";
    movingWordsContainer.classList.remove("scrolling");
    movingWordsContainer.offsetHeight;
    movingWordsContainer.classList.add("scrolling");

    movingWordsContainer.addEventListener("animationiteration", function() {
        movingWordsContainer.style.transition = "none";
        movingWordsContainer.style.transform = "translateX(0)";
        movingWordsContainer.offsetHeight;
        movingWordsContainer.style.transition = "";
    });
}

// Confetti effect
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
}
