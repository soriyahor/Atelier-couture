let btn = document.querySelector(".btn1");
let list_nav = document.querySelector(".list_nav");
let bye = document.querySelectorAll(".bye");

btn.addEventListener("click", (e) => {
  btn.classList.toggle("active");
  console.log("bye", bye);
  bye.forEach((element) => {
    element.classList.toggle("smallScreen");
  });
});
