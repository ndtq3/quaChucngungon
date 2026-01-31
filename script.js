const butterfly = document.getElementById("butterfly");
const door = document.querySelector(".door");
const hint = document.getElementById("hint");
const nameText = document.getElementById("name");
const finalText = document.getElementById("final");

/* Show hint after 3s */
setTimeout(() => {
  hint.style.opacity = 1;
}, 3000);

/* Click butterfly */
butterfly.addEventListener("click", () => {
  butterfly.classList.add("fly");
  door.classList.add("open");
  hint.style.opacity = 0;

  setTimeout(() => {
    nameText.style.opacity = 1;
  }, 2000);

  setTimeout(() => {
    nameText.style.opacity = 0;
    finalText.style.opacity = 1;
  }, 7000);
});
