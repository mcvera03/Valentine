// 🌌 Stars
for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.style.position = "absolute";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.background = "#66ccff";
  star.style.borderRadius = "50%";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.opacity = Math.random();
  document.body.appendChild(star);
}

// 💙 Hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💙";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 800);
