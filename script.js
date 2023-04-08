let num1 = 0;
let num2 = 0;
let operator = null;
let result = null ;
let isResultDisplayed = false;
let isDecimal = false;

const add = (num1, num2 ) =>  num1 + num2;
const substract = (num1, num2 ) =>  num1 - num2;
const multiply = (num1, num2 ) =>  num1 * num2;
const divide = (num1, num2 ) =>  num1 / num2;


function operate (num1, num2, operator){
    if (operator === "add"){
        return add(num1, num2);
    } else if (operator ==="substract"){
        return substract(num1, num2);
    } else if (operator ==="multiply"){
        return multiply(num1, num2);
    } else if (operator ==="divide"){
        return divide(num1, num2);
    }
}


let displayValue = document.getElementById('displayValue');
const numberButtons = document.querySelectorAll('[data-number]')
let addOp = document.getElementById('addBtn');
let subOp = document.getElementById('substractBtn');
let multOp = document.getElementById('multiplyBtn');
let divOp = document.getElementById('divideBtn');
let equals = document.getElementById('equalsBtn');
let clearBtn = document.getElementById('clearBtn');
const decimalBtn = document.getElementById('decimalBtn');
const remove = document.getElementById('removeBtn');


decimalBtn.addEventListener('click', appendDecimal);
removeBtn.addEventListener('click', removeLastCharacter);

function removeLastCharacter() {
    const currentValue = displayValue.textContent;
    const newValue = currentValue.slice(0, -1);
    displayValue.textContent = newValue;
  }


function appendDecimal() {
  if (isDecimal === false) {
    displayValue.textContent += ".";
  }
}


clearBtn.addEventListener("click", function(){
    displayValue.textContent = '';
    num1 = 0;
    num2 = 0;
    operator = null;
    isResultDisplayed = false;
    isDecimal = false;
});


equals.addEventListener("click", function() {
    num2 = Number(displayValue.textContent);
    console.log(`num2 : num2`)
    result = operate(num1, num2, operator);
    appendResult(result);
    num1 = 0;
    num2 = 0;
    operator = null;
    isResultDisplayed = true;
    });


function handleOperator(newOperator){


    if (num1 === null) {
        num1 = Number(displayValue.textContent);
        console.log(`num1 : ${num1}`)
        displayValue.textContent = "";
        isResultDisplayed = false;
        return;
      }
      if (num2 === null) {
        num2 = Number(displayValue.textContent);
        console.log(`num2 : ${num2}`)
        displayValue.textContent = "";
        isResultDisplayed = false;
        return;
      }

    if (operator != null){
        
        num2 = Number(displayValue.textContent);
        console.log(`num2 : ${num2}`)
        result = operate(num1, num2, operator);
        num1 = Number(result);
        appendResult(result);
        isResultDisplayed = true;
        console.log(`num1 : ${num1}`)
        operator = newOperator;
        return;
        }
        num1 = Number(displayValue.textContent);
        console.log(num1)
        displayValue.textContent = '';
        isResultDisplayed = false;
        operator = newOperator;
        console.log(`display : ${num1}`)
        

}

addOp.addEventListener("click", function() {
    handleOperator("add");
    });

subOp.addEventListener("click", function() {
    handleOperator("substract");
});

multOp.addEventListener("click", function() {
    handleOperator("multiply");
});

divOp.addEventListener("click", function() {
    handleOperator("divide");
});




numberButtons.forEach((button) =>
    button.addEventListener('click', () => {
    if (isResultDisplayed) {
      displayValue.textContent = '';
      isResultDisplayed = false;
    }
    appendNumber(button.textContent);
  })
);

function appendNumber(number) {
    if (number === "." && isDecimal) return;
    if (number === ".") {
      isDecimal = true;
      if (displayValue.textContent === "") {
        displayValue.textContent = "0";
      }
    }
    displayValue.textContent += number;
    }  

function appendResult(result) {
    displayValue.textContent = result;
    console.log(`result : ${result}`)
  }

  window.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/\d/.test(key)) { // Si l'utilisateur a pressé un chiffre
    if (isResultDisplayed) {
        displayValue.textContent = '';
        isResultDisplayed = false;
          }
      appendNumber(key);
    } else if (key === '.') { // Si l'utilisateur a pressé le point
      appendDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === 58) { // Si l'utilisateur a pressé un opérateur
      if(key === '+'){
        handleOperator("add");
      } else if (key === '-'){
        handleOperator("substract");
      }else if (key === '*'){
        handleOperator("multiply");
      } else {
        
        handleOperator("divide");
      }
        
    } else if (key === 'Enter') { // Si l'utilisateur a pressé la touche Entrée
        num2 = Number(displayValue.textContent);
        console.log(`num2 : num2`)
        result = operate(num1, num2, operator);
        appendResult(result);
        num1 = 0;
        num2 = 0;
        operator = null;
        isResultDisplayed = true;
    } else if (key === 'Backspace') { // Si l'utilisateur a pressé la touche Retour
      removeLastCharacter();
    }
  });