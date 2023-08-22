const numbers = [1, 40, -5, 10, 0];

function sortArray(arr){
    for(let el in arr){
        for (let item in arr){
            const [num1, num2] = [arr[el], arr[item]];
            if (arr[el] < arr[item]){
                [arr[item], arr[el]] = [num1, num2]
            }
        }
    }
    console.log(arr);
}

sortArray(numbers);

// function sortArray(arr){
//     for(let el of arr){
//         for (let item of arr){
//             const [num1, num2] = [el, item];
//             // console.log([num1, num2])
//             if (el < item){
//                 [item, el] = [num1, num2]
//             }
//         }
//     }
//     console.log(arr);
// }