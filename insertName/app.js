const someStr ='Вася aka Termonator Пупкин';
const firstName = 'Вася';
const lastName = 'Пупкин';

if (someStr.includes(firstName)){
    let startPoint = someStr.indexOf(firstName);
    const firstPart = someStr.slice(startPoint, startPoint + firstName.length);
    console.log(firstPart);
}
if (someStr.includes(lastName)){
    let startPoint = someStr.indexOf(lastName);
    const secondPart = someStr.slice(startPoint, startPoint + lastName.length);
    console.log(secondPart);
}