let textPw = document.querySelector('#pw-text');
let displaySizePw = document.querySelector('.display-pw-size span');
let btnGenerate = document.querySelector('.generate');
let clipboard = document.querySelector('.password a');

let passwordAll = '';

let upper = document.querySelector('#upper');
let lower = document.querySelector('#lower');
let number = document.querySelector('#number');
let symbol = document.querySelector('#symbol');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


addEventListeners();
function addEventListeners(){
  btnGenerate.addEventListener("click", generatePw);

  clipboard.addEventListener("click", copyPw)
}

function copyPw(e){
  e.preventDefault();
  const password = textPw.textContent;
  if (password) {
    const textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
  alert('Password copied to clipboard');
}

function generatePw(e){
  passwordAll = "";
  if (upper.checked) {
    passwordAll += getUpperCase();
  }if (lower.checked) {
    passwordAll += getLowerCase();
  }if (number.checked) {
    passwordAll += getNumbers();
  }if (symbol.checked) {
    passwordAll += getSymbols();
  }

  if (upper.checked || lower.checked || number.checked || symbol.checked) {
    completePw();
  }
}

function completePw() {
  while(passwordAll.length < parseInt(displaySizePw.textContent)){
    const numberR = getRandom();
    if (upper.checked && numberR === 0) {
      passwordAll += getUpperCase();
    }if (lower.checked && numberR === 1) {
      passwordAll += getLowerCase();
    }if (number.checked && numberR === 2) {
      passwordAll += getNumbers();
    }if (symbol.checked && numberR === 3) {
      passwordAll += getSymbols();
    }
  }

  textPw.innerHTML = passwordAll;
}

function getRandomNumber(max){
  return Math.floor(Math.random() * max)
}

function getRandom(){
  return Math.floor(Math.random() * 4)
} 

function getUpperCase(){
  return upperLetters[getRandomNumber(upperLetters.length)];
}

function getLowerCase(){
  return lowerLetters[getRandomNumber(lowerLetters.length)];
}

function getNumbers(){
  return numbers[getRandomNumber(numbers.length)];
}

function getSymbols(){
  return symbols[getRandomNumber(symbols.length)];
}

function showVal(value){
  displaySizePw.textContent = value;
}