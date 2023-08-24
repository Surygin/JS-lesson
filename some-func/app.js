/*
Написать функцию, которая возвращает true,
если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];

function some(arr, num){
   return arr.includes(num);
}

console.log(some(arr, 5));