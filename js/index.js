console.log("reached index.js")
$(document).ready(function() {
  $(".cs-text-cut").lettering('words');
});

const optEl = document.getElementById("opt")
const catEl = document.getElementById("cat")
const playEl = document.getElementById("play")
const csTextEl = document.querySelector(".cs-text")
const cutEl = document.querySelectorAll(".cs-text-cut")
const containerEl = document.getElementById("container")
const categoriesEl = document.getElementById("categories")
const moviesEl = document.getElementById("movies")
const wordsEl = document.getElementById("words")
const shakespeareEl = document.getElementById("shakespeare")
const geographyEl = document.getElementById("geography")
const randomEl = document.getElementById("random")

let addListeners = true;


csTextEl.addEventListener("click", function (e) {
  console.log("clicked on text")
  cutEl[0].classList.toggle("slide-up");
  cutEl[1].classList.toggle("slide-down");
  optEl.classList.toggle("show-mid");
  catEl.classList.toggle("show-mid");
  playEl.classList.toggle("show-mid");
  catEl.style.visibility = "block"
  optEl.style.display = "block"
  playEl.style.display = "block"

  const midEl = document.querySelectorAll(".show-mid")
  if (midEl.length === 3){
    console.log("midEls showing length = " + midEl.length)
    catEl.addEventListener("click", catHandler)
    playEl.addEventListener("click", playHandler)
    optEl.addEventListener("click", optHandler)
    } else {
      console.log("midEls not showing")
    }
}
)


moviesEl.addEventListener("click", function (e) {
      console.log("clicked on movies - set localstorage then go to play ")
      localStorage.setItem("hangmanCat",3);
      window.location.href="index3.html";
}
)


wordsEl.addEventListener("click", function (e) {
  console.log("clicked on words - set localstorage then go to play ")
  localStorage.setItem("hangmanCat",7);
  window.location.href="index3.html";
}
)


shakespeareEl.addEventListener("click", function (e) {
  console.log("clicked on shakespeare - set localstorage then go to play ")
  localStorage.setItem("hangmanCat",8);
  window.location.href="index3.html";
}
)


geographyEl.addEventListener("click", function (e) {
  console.log("clicked on geography - set localstorage then go to play ")
  localStorage.setItem("hangmanCat",2);
  window.location.href="index3.html";
}
)


randomEl.addEventListener("click", function (e) {
  console.log("clicked on random - set localstorage then go to play ")
  localStorage.setItem("hangmanCat",9);
  window.location.href="index3.html";
}
)





function catHandler(){
  console.log("clicked on category")
  catEl.removeEventListener("click", catHandler)
  playEl.removeEventListener("click", playHandler)
  optEl.removeEventListener("click", optHandler)
  containerEl.style.display = "none"
  categoriesEl.style.display = "block"
}


function playHandler(){
  console.log("clicked on play")
  window.location.href="index3.html";
  catEl.removeEventListener("click", catHandler)
  playEl.removeEventListener("click", playHandler)
  optEl.removeEventListener("click", optHandler)
}


function optHandler(){
  console.log("clicked on options")
  catEl.removeEventListener("click", catHandler)
  playEl.removeEventListener("click", playHandler)
  optEl.removeEventListener("click", optHandler)
}