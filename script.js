function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(operator, a, b) {

}

const container = document.querySelector("#container");
const buttonRows = [];
const buttons = [];
const numberOfButtons = 12;
const buttonHeight = 40;
const buttonWidth = 40;

container.style.cssText = `height: ${buttonHeight*4}px; width: ${buttonWidth*3}px;`;

for(let i = 0; i < numberOfButtons; i++) {
    buttons[i] = document.createElement("button");
    buttons[i].classList.add("button");
    buttons[i].style.cssText = `height: ${buttonHeight}px; width: ${buttonWidth}px;`;
    buttons[i].textContent = i + 1;

    container.appendChild(buttons[i]);
}
buttons[9].textContent = ".";
buttons[10].textContent = 0;
buttons[11].textContent = "=";




