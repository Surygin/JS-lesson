const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// проверка условия сортировки
function checkNum(num){
    return (num % 2) === 0;
}

function cleanArray(arr, func){
    const sortNumbers = [];
    for (let i = 0; i<arr.length-1; i++){
        if (func(arr[i])){
            sortNumbers.push(arr[i]);
        }
    }
    return sortNumbers;
}

console.log(cleanArray(numbers, checkNum));