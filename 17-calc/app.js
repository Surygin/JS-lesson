//интерфейс калькулятора
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const inputsNum = document.getElementsByClassName('inputNum');
const operationsBtn = document.getElementsByClassName('btn');
const result = document.getElementById('result');
const lastResult = document.getElementById('lastResult');
//Масив чисел для проверки ввода
const arrNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//Объект для хранения последней операции
const lastOperation = {
    result: '',
    text: ''
}

addEventListener('load', ()=>{
    getLastOperation()
})

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

function resetInput(){
    num1.value = '';
    num2.value = '';
}

function saveLastOperation(btn){
    lastOperation.result = result.innerText;
    lastOperation.text = `${num1.value} ${getValueBtn(btn)} ${num2.value} = `;
    localStorage.setItem('result', JSON.stringify(lastOperation));
}

function getLastOperation(){
    const result = JSON.parse(localStorage.getItem('result'));
    lastResult.innerText = result.text + result.result;
    return JSON.parse(localStorage.getItem('result'));
}

for (const el of operationsBtn) {
    el.addEventListener('click', ()=>{
        if ((num1.value.length > 0) && (num2.value.length > 0)) {
            switch (getValueBtn(el)){
                case '+':
                    result.innerText = Number(num1.value) + Number(num2.value);
                    saveLastOperation(el);
                    getLastOperation();
                    resetInput();
                    break;
                case '-':
                    result.innerText = Number(num1.value) - Number(num2.value);
                    saveLastOperation(el);
                    getLastOperation();
                    resetInput();
                    break;
                case '*':
                    result.innerText = Number(num1.value) * Number(num2.value);
                    saveLastOperation(el);
                    getLastOperation();
                    resetInput();
                    break;
                case '/':
                    result.innerText = Number(num1.value) / Number(num2.value);
                    saveLastOperation(el);
                    getLastOperation();
                    resetInput();
                    break;
            }
        }else{
            alert('Оба поля должны быть заполнены')
        }
    })
}