b = document.querySelector(".menu")
box = document.querySelector(".box")


b.addEventListener("click",() => {
  if (box.style.background === "orange") {
    console.log("TRUE")
  }
  box.style.background = "orange";
})