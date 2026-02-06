const butterfly = document.getElementById("butterfly");

const texts = [
  text1, text2, text3, text4, text5,
  text6, text7, text8, text9
];

texts.forEach(t => t.style.opacity = 0);

butterfly.addEventListener("click", () => {
  butterfly.classList.add("fly");
  document.querySelector(".hint").style.display = "none";

  let delay = 500;
  texts.forEach(t => {
    setTimeout(() => {
      t.style.opacity = 1;
    }, delay);
    delay += 600;
  });

  startGalaxy();
  setTimeout(startHearts, delay + 500);
});

/* ===== GALAXY ===== */
const gCanvas = document.getElementById("galaxy");
const gCtx = gCanvas.getContext("2d");

function resize() {
  gCanvas.width = innerWidth;
  gCanvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

let stars = [];

function startGalaxy() {
  stars = [];
  for (let i = 0; i < 180; i++) {
    stars.push({
      x: Math.random() * gCanvas.width,
      y: Math.random() * gCanvas.height,
      r: Math.random() * 2,
      v: Math.random() * 0.6 + 0.2
    });
  }
  animateGalaxy();
}

function animateGalaxy() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
  stars.forEach(s => {
    gCtx.beginPath();
    gCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    gCtx.fillStyle = "rgba(255,255,255,0.8)";
    gCtx.fill();
    s.y += s.v;
    if (s.y > gCanvas.height) s.y = 0;
  });
  requestAnimationFrame(animateGalaxy);
}

/* ===== HEARTS ===== */
const hCanvas = document.getElementById("heart");
const hCtx = hCanvas.getContext("2d");

hCanvas.width = innerWidth;
hCanvas.height = innerHeight;

let hearts = [];

function startHearts() {
  setInterval(() => {
    hearts.push({
      t: 0,
      size: Math.random() * 14 + 10
    });
  }, 120);
  animateHearts();
}

function heartX(t) {
  return 16 * Math.pow(Math.sin(t), 3);
}

function heartY(t) {
  return -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
}

function animateHearts() {
  hCtx.clearRect(0, 0, hCanvas.width, hCanvas.height);
  hearts.forEach(h => {
    h.t += 0.06;
    const x = hCanvas.width / 2 + heartX(h.t) * h.size;
    const y = hCanvas.height / 2 + heartY(h.t) * h.size;

    hCtx.fillStyle = "rgba(255,120,180,0.9)";
    hCtx.beginPath();
    hCtx.arc(x, y, 2.2, 0, Math.PI * 2);
    hCtx.fill();
  });
  requestAnimationFrame(animateHearts);
}
