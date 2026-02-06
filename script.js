/* ===== TIỆN ÍCH ===== */
const $ = id => document.getElementById(id);

const show = id => {
  if ($(id)) $(id).style.opacity = 1;
};

const hide = id => {
  if ($(id)) $(id).style.opacity = 0;
};

const hideAllText = () => {
  document.querySelectorAll(".text").forEach(t => {
    t.style.opacity = 0;
  });
};

/* ===== KHỞI TẠO ===== */
hideAllText();
setTimeout(() => show("text0"), 800);

/* ===== CLICK BƯỚM ===== */
$("butterfly").onclick = () => {

  // BƯỚM BAY
  $("butterfly").style.top = "-30%";
  $("butterfly").style.opacity = 0;
  hide("text0");

 const texts = [
  "text1", "text2", "text3", "text4",
  "text5", "text6", "text7",
  "text10", "text11", "text12",
  "text13", "text14"
];

let t = 1500;

texts.forEach(id => {
  setTimeout(() => {
    hideAllText();              // 1️⃣ cho chữ cũ biến mất

    setTimeout(() => {
      show(id);                 // 2️⃣ đợi nó mất hẳn rồi mới hiện chữ mới
    }, 1000);                   // ⏱ khớp với transition opacity 1s
  }, t);

  t += 2500; // thời gian mỗi câu (mất + hiện + đứng)
});

  /* ===== TIMELINE ẢNH ===== */

  // ÁO XANH
  setTimeout(() => show("imgT"), 1500);
  setTimeout(() => hide("imgT"), 3500);

  // ÁO ĐEN
  setTimeout(() => show("imgH"), 3500);
  setTimeout(() => hide("imgH"), 6500);

  // CÔNG VIỆC
  setTimeout(() => show("imgT1"), 6500);
  setTimeout(() => show("imgT2"), 7000);

  // QUỲNH
  setTimeout(() => show("imgQ"), 9000);

  // NƯỚC MẮT
  setTimeout(() => show("imgN"), 11500);
  setTimeout(() => hide("imgN"), 14000);

  // TRÁI TIM CUỐI
  setTimeout(() => show("imgH1"), 15000);
  setTimeout(() => show("imgH2"), 17500);

  // HIỆU ỨNG
  startGalaxy();
  setTimeout(startHearts, 14000);
};
