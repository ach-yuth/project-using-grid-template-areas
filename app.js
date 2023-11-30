const hamburg = document.querySelector(".hamburg");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const navbox = document.querySelector(".navbox");
hamburg.addEventListener("click", () => {
  bar1.classList.toggle("animatebar1");
  bar2.classList.toggle("animatebar2");
  bar3.classList.toggle("animatebar3");
  navbox.classList.toggle("opendraw");
});
