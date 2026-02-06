const butterfly = document.getElementById("butterfly");
const door = document.getElementById("door");

const texts = [
  text1, text2, text3, text4, text5
];

let currentText = 0;

/* Show first text */
setTimeout(() => showText(0), 1000);

function showText(i){
  texts.forEach(t => t.style.opacity = 0);
  texts[i].style.opacity = 1;
}

/* Butterfly click */
butterfly.addEventListener("click", () => {
  butterfly.classList.add("fly");
  door.classList.add("open");
  startGalaxy();

  let delay = 2000;
  for(let i=1;i<texts.length;i++){
    setTimeout(() => showText(i), delay);
    delay += 2000;

    // Sau khi hiện text2 thì mới bật tim
    if(i === 1){
      setTimeout(startHearts, delay);
    }
  }
});

/* ===== GALAXY ===== */
const gCanvas = document.getElementById("galaxy");
const gCtx = gCanvas.getContext("2d");
gCanvas.width = innerWidth;
gCanvas.height = innerHeight;

let stars = [];

function startGalaxy(){
  for(let i=0;i<200;i++){
    stars.push({
      x:Math.random()*gCanvas.width,
      y:Math.random()*gCanvas.height,
      r:Math.random()*2,
      v:Math.random()*0.6
    });
  }
  animateGalaxy();
}

function animateGalaxy(){
  gCtx.clearRect(0,0,gCanvas.width,gCanvas.height);
  stars.forEach(s=>{
    gCtx.beginPath();
    gCtx.arc(s.x,s.y,s.r,0,Math.PI*2);
    gCtx.fillStyle="rgba(255,255,255,0.8)";
    gCtx.fill();
    s.y+=s.v;
    if(s.y>gCanvas.height) s.y=0;
  });
  requestAnimationFrame(animateGalaxy);
}

/* ===== HEART ===== */
const hCanvas = document.getElementById("heart");
const hCtx = hCanvas.getContext("2d");
hCanvas.width = innerWidth;
hCanvas.height = innerHeight;

let hearts = [];

function startHearts(){
  setInterval(()=>{
    hearts.push({
      t:0,
      size:Math.random()*14+10
    });
  },120);
  animateHearts();
}

function heartX(t){
  return 16*Math.pow(Math.sin(t),3);
}
function heartY(t){
  return -(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));
}

function animateHearts(){
  hCtx.clearRect(0,0,hCanvas.width,hCanvas.height);
  hearts.forEach(h=>{
    h.t+=0.04;
    const x=hCanvas.width/2+heartX(h.t)*h.size;
    const y=hCanvas.height/2+heartY(h.t)*h.size;

    hCtx.fillStyle="rgba(255,105,180,0.9)";
    hCtx.beginPath();
    hCtx.arc(x,y,2.2,0,Math.PI*2);
    hCtx.fill();
  });
  requestAnimationFrame(animateHearts);
}
