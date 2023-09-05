const users = [
    {name: 'Вася', age: 38},
    {name: 'Катя', age: 18},
    {name: 'Аня', age: 40},
    {name: 'Петя', age: 25},
];

function sortUsersByAge(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[i].age < arr[j].age){
                [arr[j].age, arr[i].age] = [arr[i].age, arr[j].age]
            }
        }
    }
    console.log(arr);
}

sortUsersByAge(users);

// Второй вариант (проще)
console.log(users.sort((a,b) => {
    return a.age - b.age
}));