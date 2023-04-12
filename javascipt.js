const result = document.getElementById('result');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');
const buttons = document.querySelectorAll('.buttons button');

let input = '';

function updateInput(e) {
  const button = e.target;
  input += button.textContent;
  result.value = input;
}

function clearInput() {
  input = '';
  result.value = input;
}

function deleteInput() {
  input = input.slice(0, -1);
  result.value = input;
}

function calculate() {
  input = eval(input);
  result.value = input;
}

function addDecimal() {
  if (input.indexOf('.') === -1) {
    input += decimal.textContent;
    result.value = input;
  }
}

clear.addEventListener('click', clearInput);
backspace.addEventListener('click', deleteInput);
divide
