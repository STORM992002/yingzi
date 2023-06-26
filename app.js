const codeElements = document.querySelectorAll(".code");
const btnElements = document.querySelectorAll(".btn");

for (let i = 0; i < btnElements.length; i++) {
  btnElements[i].addEventListener("mouseover", show);
  btnElements[i].addEventListener("mouseleave", hide);
}

function show() {
  let codeElement = this.parentNode.querySelector(".code");
  codeElement.style.opacity = "1";
  codeElement.style.zIndex= "1";
}

function hide() {
  let codeElement = this.parentNode.querySelector(".code");
  codeElement.style.opacity = "0";
  codeElement.style.zIndex = "-1";
}
