const butterfly = document.getElementById("butterfly");

const $ = id => document.getElementById(id);
const show = id => $(id).style.opacity = 1;
const hide = id => $(id).style.opacity = 0;

setTimeout(()=>show("text0"),1000);

$("butterfly").onclick = () => {
  // BƯỚM BAY
  $("butterfly").style.top = "-30%";
  $("butterfly").style.opacity = 0;

  // BẠN ÁO XANH TO MỜ RỒI BIẾN MẤT
  show("imgT");
  setTimeout(()=>hide("imgT"),2000);

  // TEXT CHÍNH
  let t = 2000;

  ["text1","text2","text3","text4","text5","text6"].forEach(id=>{
    setTimeout(()=>show(id),t);
    setTimeout(()=>hide(id),t+1800);
    t+=2000;
  });

  // TEXT 2 + ẢNH ÁO ĐEN
  setTimeout(()=>{
    show("text2");
    show("imgH");
  },6000);

  setTimeout(()=>{
    hide("imgH");
  },9000);

  // CÔNG VIỆC 2–3
  setTimeout(()=>show("imgT1"),10000);
  setTimeout(()=>show("imgT2"),10500);

  setTimeout(()=>show("imgQ"),12500);

  // KẾT PHẦN NƯỚC MẮT
  setTimeout(()=>{
    show("text7");
    show("imgN");
  },15000);

  setTimeout(()=>{
    hide("imgN");
    hide("text7");
  },17500);

  // TRÁI TIM + ĐỘNG VIÊN
  setTimeout(()=>{
    startHearts();
    show("text10");
    show("imgH1");
  },18000);

  setTimeout(()=>{
    hide("imgH1");
    show("text11");
    show("imgH2");
  },21000);

  setTimeout(()=>{
    show("text12");
  },23000);

  setTimeout(()=>{
    show("text13");
  },24500);

  setTimeout(()=>{
    show("text14");
  },27000);
};

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
