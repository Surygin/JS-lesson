const numbers = [1, 40, -5, 10, 0];

function sort(arr){
    for(let el in arr){
        for (let item in arr){
            let num1 = arr[el];
            let num2 = arr[item];
            if (arr[el] < arr[item]){
                arr[item] = num1;
                arr[el] = num2;

            }
        }
    }
    console.log(arr);
}

sort(numbers);