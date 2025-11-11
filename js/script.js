const btn = document.querySelector(".share-icon");

btn.addEventListener("click", () => {
  btn.classList.toggle("clicked");
  btn.nextElementSibling.classList.toggle("open");
  console.log(btn);
});
