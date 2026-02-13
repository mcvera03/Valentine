// 🌌 ESTRELLAS
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    alpha: Math.random()
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.alpha += (Math.random() - 0.5) * 0.05;
    star.alpha = Math.max(0, Math.min(1, star.alpha));

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(173,216,255,${star.alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();

// 🌊 FLORES
function createFlower(x, y) {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = x + "px";
  flower.style.top = y + "px";

  for (let i = 0; i < 6; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.transform = `rotate(${i * 60}deg)`;
    flower.appendChild(petal);
  }

  const center = document.createElement("div");
  center.classList.add("center");
  flower.appendChild(center);

  document.body.appendChild(flower);
}

for (let i = 0; i < 12; i++) {
  createFlower(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight
  );
}

// 💙 CORAZONES
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const size = 10 + Math.random() * 20;

  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "-20px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 800);
