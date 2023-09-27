//интерфейс калькулятора
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const inputsNum = document.getElementsByClassName('inputNum');
const operationsBtn = document.getElementsByClassName('btn');
const result = document.getElementById('result');
//знаки операций
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
//Масив чисел для проверки ввода
const arrNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Очистка поля ввода от лишних символов
function checkNumber(elem){
    const trueNumber = [];
    for (const el of elem.value) {
        if (arrNumbers.includes(el)){
            trueNumber.push(el);
        }
    }
    elem.value = trueNumber.join('');
}

for (const el of inputsNum) {
    el.addEventListener('input', ()=>{
        checkNumber(el);
    })
}

//вычисления
function getValueBtn(el){
    return el.getAttribute('data-value');
}

for (const el of operationsBtn) {
    el.addEventListener('click', ()=>{
        switch (getValueBtn(el)){
            case '+':
                result.innerText = Number(num1.value) + Number(num2.value);
                break;
            case '-':
                result.innerText = Number(num1.value) - Number(num2.value);
                break;
            case '*':
                result.innerText = Number(num1.value) * Number(num2.value);
                break;
            case '/':
                result.innerText = Number(num1.value) / Number(num2.value);
                break;
        }
    })
}