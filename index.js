const hammenuBtn = document.querySelector(".hammenu-btn");
const ham = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-xmark");
const hammenu = document.querySelector(".hammenu");

hammenuBtn.addEventListener("click", function (e) {
  ham.classList.toggle("show");
  cross.classList.toggle("show");
  if (cross.classList.contains("show")) {
    hammenu.classList.add("hammenu-show");
  } else {
    hammenu.classList.remove("hammenu-show");
  }
});
