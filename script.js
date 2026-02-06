// Contraseña
const passwordBtn = document.getElementById('password-btn');
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');
const passwordScreen = document.getElementById('password-screen');
const memoryScreen = document.getElementById('memory-screen');
const finalMessage = document.getElementById('final-message');

// Botones
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const noMsg = document.getElementById('no-msg');

const correctPassword = "amor123"; // Cambia la contraseña

// Función para mostrar la pantalla de recuerdos
passwordBtn.addEventListener('click', () => {
    if(passwordInput.value === correctPassword){
        passwordScreen.style.display = 'none';
        memoryScreen.style.display = 'block';
    } else {
        passwordError.style.display = 'block';
    }
});

// Botón NO se mueve y muestra mensaje
noBtn.addEventListener('mouseenter', () => {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 50) - 25;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener('click', () => {
    noMsg.style.display = 'block';
    // Cada vez que presionan NO, el botón SÍ crece
    let currentScale = yesBtn.style.transform.replace('scale(','').replace(')','') || 1;
    currentScale = parseFloat(currentScale) + 0.1;
    yesBtn.style.transform = `scale(${currentScale})`;
});

// Botón SÍ
yesBtn.addEventListener('click', () => {
    memoryScreen.style.display = 'none';
    finalMessage.style.display = 'block';
});
