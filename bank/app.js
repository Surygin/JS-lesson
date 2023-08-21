const startBalance = 100;

const arrivalLog = [];
const expensesLog = [];

const operations = [1000, -700, 300, -500, 10000];

function operationsSort (operations){
    for (let el of operations){
        if( el >= 0 ){
            arrivalLog.push(el)
        } else{
            expensesLog.push(el)
        }
    }
}

function balance(arr, balance){
    let sum = 0;
    arr.unshift(balance);

    for(let el of arr){
        if((sum + el) < 0){
            return false;
        } else{
            sum = sum + el;
        }
    }
    return sum;
}

function averageValue(arr){
    let sum = 0;

    for(let el of arr){
        // console.log(el);
        sum = sum + el;
    }
    if (sum < 0){
        console.log('среднее значение расходов - ' + sum / arr.length);
    } else {
        console.log('среднее значение доходов - ' + sum / arr.length);
    }

}

console.log('_________________');

operationsSort(operations);
console.log('Текущий баланс - ' + balance(operations, startBalance));

console.log('_________________');

averageValue(arrivalLog);
averageValue(expensesLog);

console.log('_________________');

console.log('История пополнений - ' + arrivalLog);
console.log('История расходов - ' + expensesLog);