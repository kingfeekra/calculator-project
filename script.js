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
const displayDiv = document.createElement("div");
const buttonsDiv = document.createElement("div");
const numberDiv = document.createElement("div");

container.appendChild(displayDiv);
displayDiv.classList.add("displayDiv");
container.appendChild(buttonsDiv);

buttonsDiv.classList.add("buttonsDiv");
buttonsDiv.appendChild(numberDiv);

const buttonRows = [];
const buttons = [];
const numberOfButtons = 12;
const buttonHeight = 40;
const buttonWidth = 40;

numberDiv.style.cssText = `height: ${buttonHeight*4}px; width: ${buttonWidth*3}px;`;
//create number buttons 0-9, "." button and "=" button
for(let i = 0; i < numberOfButtons; i++) {
    buttons[i] = document.createElement("button");
    buttons[i].classList.add("button");
    buttons[i].style.cssText = `height: ${buttonHeight}px; width: ${buttonWidth}px;`;
    buttons[i].textContent = i + 1;
    numberDiv.appendChild(buttons[i]);
}
buttons[9].textContent = ".";
buttons[10].textContent = 0;
buttons[11].textContent = "=";


const operatorDiv = document.createElement("div");
operatorDiv.classList.add("operatorDiv");
buttonsDiv.appendChild(operatorDiv);
const operatorButtons = [];

//creates four operator buttons in separate div
for(let i = 0; i < 4; i++) {
    operatorButtons[i] = document.createElement("button");
    operatorButtons[i].classList.add("operatorButtons");
    operatorDiv.appendChild(operatorButtons[i]);
}
operatorButtons[0].textContent = "+";
operatorButtons[1].textContent = "-";
operatorButtons[2].textContent = "x";
operatorButtons[3].textContent = "÷";

//creates clear button
const clearButton = document.createElement("button");
clearButton.classList.add("clearButton");
clearButton.textContent = "C";
buttonsDiv.appendChild(clearButton);

let lastButtonClicked;

//event listeners for number buttons, clear display if previous button click was operator
const buttonPress = document.querySelectorAll(".button");
for(let i = 0; i < buttonPress.length; i++) {
    buttonPress[i].addEventListener("click", () => {
        if(lastButtonClicked == "+" || lastButtonClicked == "-" || lastButtonClicked == "x" || lastButtonClicked == "÷") {
            displayDiv.textContent = "";
        }
        lastButtonClicked = buttons[i].textContent;
        displayDiv.textContent = displayDiv.textContent + buttons[i].textContent;
        

        
        
        console.log(lastButtonClicked);
    });
}

let sumArray = [];
//event listeners for operator buttons, push number to array
for(let i = 0; i < 4; i++) {
    operatorButtons[i].addEventListener("click", () => {
        lastButtonClicked = operatorButtons[i].textContent;
        sumArray.push(displayDiv.textContent);
        console.log(sumArray);
        console.log(lastButtonClicked);
        //displayDiv.textContent = operatorButtons[i].textContent;
    })
}



//clear button listener to clear display
clearButton.addEventListener("click", () => {
    displayDiv.textContent = "";
})



