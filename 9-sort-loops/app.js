const numbers = [1, 40, -5, 10, 0];

function sortArray2(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[i] < arr[j]){
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    console.log(arr);
}

sortArray2(numbers);