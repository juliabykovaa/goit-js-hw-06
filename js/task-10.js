const numberEl = document.querySelector("#controls input")
const controls = document.querySelector("#controls")
const createButton = document.querySelector("[data-create]")
const destroyButton = document.querySelector("[data-destroy]")
const boxesEl = document.getElementById("boxes")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDivs = document.createElement("div");
    boxesEl.appendChild(newDivs);
    newDivs.style.cssText = `width: ${width += 10}px; height: ${height += 10}px; background-color: ${getRandomHexColor()}`
  }
    boxesEl.style.cssText = 'display: flex; gap: 20px'

  }


createButton.addEventListener("click", (event) => {
    createBoxes(numberEl.value)
})

destroyButton.addEventListener("click", () => {
  boxesEl.remove();
})
