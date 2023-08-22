const hasLicense = false;
const age = 18;
const isDrink = false;


// const hasLicense = randomIntFromInterval(0, 1);
// const age = randomIntFromInterval(15, 25);
// const isDrink = randomIntFromInterval(0, 1);

// функцию нашел в интернете =)
// с этой функцией - это превращается в приложение для тестирования =) как интересно!
// function randomIntFromInterval(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
console.log(age >= 18 && hasLicense && isDrink ? 'Можно ехать' : 'Нельзя за руль');
// console.log(age >= 18 ? hasLicense ? !isDrink ? 'Можно ехать!' : 'Нельзя за руль, вы пьяны!' : 'Нельзя за руль, нет прав!' : 'Нельзя за руль, вам нет 18!');

// Прошлая практика, на проверку прав, была сложнее. =)