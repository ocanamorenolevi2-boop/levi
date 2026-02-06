// script.js

// Functionality for the "escaping no" button
const escapingNoButton = document.getElementById('noButton');

function handleNoButtonClick() {
    // Move the button to a random position
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    escapingNoButton.style.position = 'absolute';
    escapingNoButton.style.left = `${x}px`;
    escapingNoButton.style.top = `${y}px`;

    // Trigger confetti animation
    triggerConfetti();
}

function triggerConfetti() {
    // Simple confetti animation using JavaScript
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

escapingNoButton.addEventListener('click', handleNoButtonClick);
