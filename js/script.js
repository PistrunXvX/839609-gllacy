const linkOpen = document.querySelector(".btn-news-js");
const popUp = document.querySelector(".pop-up-feedback");
const linkClose = popUp.querySelector(".close");

// Modal-show

linkOpen.addEventListener("click", function (evt)  {
  evt.preventDefault();
  console.log("Get");
  popUp.classList.add("pop-up-show");
});

linkClose.addEventListener("click", function (evt)  {
  evt.preventDefault();
  console.log("close");
  popUp.classList.remove("pop-up-show");
});


const linkOpenUnder = document.querySelector(".under-item-btn");
const popUpUnder = document.querySelector(".under-item-wrapper");

linkOpenUnder.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Get");
  popUpUnder.classList.add("pop-up-show");
});

linkOpenUnder.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  console.log("Close");
  popUpUnder.classList.remove("pop-up-show");
});

const linkOpenFind = document.querySelector(".btn-search-js");
const popUpFind = document.querySelector(".pop-up-find-js");

linkOpenFind.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Get");
  popUpFind.classList.add("pop-up-show");
});

linkOpenFind.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  console.log("Close");
  popUpFind.classList.remove("pop-up-show");
});

const linkOpenEnter = document.querySelector(".btn-enter-js");
const popUpEnter = document.querySelector(".pop-up-enter-js");

linkOpenEnter.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Get");
  popUpEnter.classList.add("pop-up-show");
});

linkOpenEnter.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  console.log("Close");
  popUpEnter.classList.remove("pop-up-show");
});


