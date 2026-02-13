for (let i = 0; i < 80; i++) {
  const star = document.createElement("div");
  star.className = "star";
  document.body.appendChild(star);

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = 2 + Math.random() * 3 + "s";
}

const style = document.createElement("style");
style.innerHTML = `
.star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #66ccff;
  border-radius: 50%;
  animation: blink infinite alternate;
}

@keyframes blink {
  from { opacity: 0.2; }
  to { opacity: 1; }
}
`;
document.head.appendChild(style);
