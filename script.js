//operator functions

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

let operate = function(operator, a, b) {
    if(lastButtonClicked == "=") {
        return;
    }
    if(operator == "+") {
        return add(a, b);
    }
    else if (operator == "-") {
        return subtract(a, b);
    }
    else if(operator == "x") {
        return multiply(a, b);
    }
    else if(operator == "÷") {
        if(b == 0) {
            return "Can't divide by zero."
        }
        else {
        return divide(a, b);
        }
    }
    else {
        return;
    }
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
numberDiv.classList.add("numberDiv");

const buttonRows = [];
const buttons = [];
const numberOfButtons = 12;
const buttonHeight = 40;
const buttonWidth = 40;

//numberDiv.style.cssText = `height: ${buttonHeight*4}px; width: ${buttonWidth*3}px;`;
//create number buttons 0-9, "." button and "=" button
for(let i = 0; i < numberOfButtons; i++) {
    buttons[i] = document.createElement("button");
    buttons[i].classList.add("numberButtons");
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

//create clear button and backspace 
const clearButtonsDiv = document.createElement("div");
clearButtonsDiv.classList.add("clearButtonsDiv");
buttonsDiv.appendChild(clearButtonsDiv);

const clearButton = document.createElement("button");
clearButton.classList.add("clearButton");
clearButton.textContent = "C";
clearButtonsDiv.appendChild(clearButton);

const backspaceButton = document.createElement("button");
backspaceButton.classList.add("backspaceButton");
backspaceButton.textContent = "⌫";
backspaceButton.classList.add("backspaceButton");
clearButtonsDiv.appendChild(backspaceButton);

let lastButtonClicked;
let lastOperatorClicked;

//event listeners for number buttons, clears display if previous button click was an operator button
const buttonPress = document.querySelectorAll(".numberButtons");
for(let i = 0; i < buttonPress.length; i++) {
    if(i == 11) { continue; }
    buttonPress[i].addEventListener("click", () => {
        if (displayDiv.textContent == "Can't divide by zero.") {
            displayDiv.textContent = "";
        }
        if(lastButtonClicked == "+" || lastButtonClicked == "-" || lastButtonClicked == "x" || lastButtonClicked == "÷" || lastButtonClicked == "=") {
            displayDiv.textContent = "";
        }

        lastButtonClicked = buttons[i].textContent;

        if(buttons[i].textContent != "=") {
        displayDiv.textContent = displayDiv.textContent + buttons[i].textContent;
        }

        console.log(lastButtonClicked);
    });
}

let sumArray = [];
//event listeners for operator buttons, push number to array
for(let i = 0; i < 4; i++) {
    operatorButtons[i].addEventListener("click", () => {
        lastButtonClicked = operatorButtons[i].textContent;
        lastOperatorClicked = operatorButtons[i].textContent;
        sumArray.push(displayDiv.textContent);
        console.log(sumArray);
        console.log(lastButtonClicked);
        //displayDiv.textContent = operatorButtons[i].textContent;
    })
}



//event listener for clear button to clear display and stored values
clearButton.addEventListener("click", () => {
    displayDiv.textContent = "";
    sumArray = [];
    lastOperatorClicked = "";
    lastButtonClicked = "";
})


backspaceButton.addEventListener("click", () => {
    const backspaceArray = displayDiv.textContent.split('');
    //console.log(back)
    backspaceArray.pop();
    displayDiv.textContent = backspaceArray.join('');

})


//event listener for "=" button, depending on last operator clicked, will operate 2 values
buttons[11].addEventListener("click", () => {
    if(sumArray.length === 0) { //if array is empty, do nothing
        return;
    }
    else {
    sumArray.push(displayDiv.textContent);
    console.log(sumArray);
    console.log(operate(lastOperatorClicked, parseInt(sumArray[0]), parseInt(sumArray[1])));
    displayDiv.textContent = operate(lastOperatorClicked, parseFloat(sumArray[0]), parseFloat(sumArray[1]));
    sumArray = [];
    lastButtonClicked = "=";
    }
    //return operate(lastOperatorClicked, sumArray[0], sumArray[1]);
} )



