// === Música y audio ===
const cancion = document.getElementById('cancion');
const miAudio = document.getElementById('miAudio');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
    cancion.play();
    setTimeout(() => {
        miAudio.play();
    }, 30000); // 30 segundos después entra tu audio
});

// === Efectos de pétalos y emojis ===
const canvas = document.getElementById('efectos');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let elementos = [];

class Particula {
    constructor(x, y, text) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.speedY = Math.random() * 2 + 1;
        this.opacity = 1;
    }
    update() {
        this.y -= this.speedY;
        this.opacity -= 0.01;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.font = "30px Arial";
        ctx.fillText(this.text, this.x, this.y);
        ctx.globalAlpha = 1;
    }
}

function generarParticulas() {
    const texts = ['💖', '🌸', '❤️', 'Amor', 'Te amo'];
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    const text = texts[Math.floor(Math.random() * texts.length)];
    elementos.push(new Particula(x, y, text));
}

function animar() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    elementos.forEach((p,i)=>{
        p.update();
        p.draw();
        if(p.opacity <= 0) elementos.splice(i,1);
    });
    requestAnimationFrame(animar);
}

setInterval(generarParticulas, 300);
animar();

// === Botón NO travieso y suave ===
const noBtn = document.getElementById('noBtn');
const zona = document.getElementById('zona-juego');

// Evita click
noBtn.addEventListener('click', e => e.preventDefault());

// Se mueve suavemente al intentar acercar el mouse
noBtn.addEventListener('mouseenter', () => {
    const zonaRect = zona.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = zonaRect.width - btnRect.width;
    const maxY = zonaRect.height - btnRect.height;

    const bordes = ['top', 'bottom', 'left', 'right'];
    const borde = bordes[Math.floor(Math.random() * bordes.length)];

    let newX, newY;

    switch(borde) {
        case 'top':
            newX = Math.random() * maxX;
            newY = 0;
            break;
        case 'bottom':
            newX = Math.random() * maxX;
            newY = maxY;
            break;
        case 'left':
            newX = 0;
            newY = Math.random() * maxY;
            break;
        case 'right':
            newX = maxX;
            newY = Math.random() * maxY;
            break;
    }

    // Movimiento suave
    noBtn.style.transition = 'all 0.5s ease';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});
