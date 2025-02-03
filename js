// 🎈 ANIMACIÓN DE CORAZONES
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 30; i++) {
    hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3
    });
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
        ctx.globalAlpha = heart.opacity;
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
        ctx.fill();
        
        heart.y -= heart.speed;
        if (heart.y < 0) heart.y = canvas.height;
    });
    requestAnimationFrame(drawHearts);
}

drawHearts();

// 🎁 ANIMACIÓN DE LAS CARTAS
function showCard() {
    document.getElementById("card1").style.display = "block";
}

function closeCard1() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
}

function openSecondCard() {
    document.getElementById("card2").style.display = "none";
    document.getElementById("proposal").style.display = "block";
}

function showFinalMessage() {
    document.getElementById("proposal").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
}
