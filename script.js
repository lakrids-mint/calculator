let currentNumber = "";
let previousNumber = "";
let operator = "";
let result = "";

//MODEL - calculator functionality
// = final calculation
function operate(operator, x, y){
  result = operator(x,y);
  updateDisplay(result);
  currentNumber = "";
  previousNumber = result;
  operator="";
}

function add(x, y){
  // because adding two string with the number 5 equals 55 .o.
  let result = Number(x) + Number(y);
  return result;
}

function subtract(x,y){
  let result = x - y;
  return result;
}

function multiply(x,y){
  let result = x * y;
  return result;
}

function divide(x,y){
  let result = x/y;
  return result;
}


//View ************************************************************
let display = document.getElementById("display");

//display input, display result, clear display, handle overflow
function updateDisplay(input){
  display.innerHTML = input;
}

//Controller *************************************************************

//
function setupEventListener(classId, saveInputFn){
  let element = document.getElementsByClassName(classId);
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", ()=>saveInputFn(element[i].innerText));
  }
}

function saveNumber(digit){
  currentNumber = currentNumber + digit;
  updateDisplay(currentNumber);
}

function saveOperator (operator_btn){
  if (previousNumber !="" && currentNumber !=""){
    operate(operator, previousNumber, currentNumber);
  }else{
    previousNumber = currentNumber;
    currentNumber = "";
  }
    if(operator_btn == "+"){
      operator = add;
    }else if (operator_btn == "-"){
      operator =subtract;
    }else if (operator_btn == "/"){
      operator = divide;
    }else if (operator_btn =="x"){
      operator = multiply;
    }else{
      updateDisplay("Something went wrong!");
    }

    updateDisplay(previousNumber + operator_btn);

}



// Check if any number buttons have been clicked
setupEventListener("numpad", saveNumber);

//same for operators
setupEventListener("operator", saveOperator);


//Clear button
let clear = document.getElementById("reset");
clear.addEventListener("click", ()=> clearDisplay());


//clear display function - clears display + set strings to empty
function clearDisplay(){
  updateDisplay("");
  currentNumber = "";
  previousNumber = "";
}

//= button
let sum = document.getElementById("equal");
sum.addEventListener("click", ()=> operate(operator, previousNumber, currentNumber));

//m* button
let magic = document.getElementById("dot");
magic.addEventListener("click", ()=> updateDisplay(":D"));
