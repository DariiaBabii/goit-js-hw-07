function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input[type="number"]');
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (isNaN(amount) || amount <= 0 || amount > 100) {
    return alert("Please enter a valid number (between 1 - 100)");
  }

  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  destroyBoxes();
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
