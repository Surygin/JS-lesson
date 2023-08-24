const arr = [1, 4, 4, 10];

const avgValue = arr.reduce((acc, value, i) => {
    if ((i+1) === arr.length){
        return (acc += value) / arr.length;
    }
    return (acc += value);
}, 0);

console.log(avgValue);