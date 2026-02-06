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

// === Botón NO travieso ===
const noBtn = document.getElementById('noBtn');
const zona = document.getElementById('zona-juego');

noBtn.addEventListener('mouseover', () => {
    const zonaRect = zona.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const minX = 0;
    const minY = 0;
    const maxX = zonaRect.width - btnRect.width;
    const maxY = zonaRect.height - btnRect.height;

    const bordes = ['top', 'bottom', 'left', 'right'];
    const borde = bordes[Math.floor(Math.random() * bordes.length)];

    let x, y;
    switch(borde) {
        case 'top':
            x = Math.random() * maxX;
            y = 0;
            break;
        case 'bottom':
            x = Math.random() * maxX;
            y = maxY;
            break;
        case 'left':
            x = 0;
            y = Math.random() * maxY;
            break;
        case 'right':
            x = maxX;
            y = Math.random() * maxY;
            break;
    }

    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});
