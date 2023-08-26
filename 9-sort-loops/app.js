const numbers = [1, 40, -5, 10, 0];

function sortArray(arr){
    for(let el in arr){
        for (let item in arr){
            if (arr[el] < arr[item]){
                [arr[item], arr[el]] = [arr[el], arr[item]]
            }
        }
    }
    console.log(arr);
}

sortArray(numbers);