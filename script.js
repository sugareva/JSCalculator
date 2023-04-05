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
let num1 = '';
let num2 ='';
let operator = null;

let displayValue = document.getElementById('displayValue');


const numberButtons = document.querySelectorAll('[data-number]')

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)


function appendNumber(number) {
    displayValue.textContent += number;
  }
