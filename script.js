const accordionItems = document.querySelectorAll(".item");

accordionItems.forEach(function (item) {
  const btn = item.querySelector(".item__button");
  const content = item.querySelector(".item__content");
  btn.addEventListener("click", function () {
    content.classList.toggle("visually-hidden");
  });
})