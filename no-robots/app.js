const numberFirst = randomIntFromInterval(1, 20);
const numberSecond = randomIntFromInterval(1, 20);
const secretKey = 'я не робот!';
const question = `сколько будет ${numberFirst} + или - ${numberSecond}?`

// функцию нашел в интернете =)
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const result = prompt(question);

const trueResultFirst = numberFirst + numberSecond;
const trueResultSecond = numberFirst - numberSecond;

// console.log(`Первый правильный ответ - ${trueResultFirst}`);
// console.log(`Второй правильный ответ - ${trueResultSecond}`);

switch (result) {
    case String(trueResultFirst):
    case String(trueResultSecond):
      alert( 'Успех!' );
      break;
    case secretKey:
      alert( 'Ты знаешь пароль! Проходи.' );
      break;
    default:
      alert( "вы робот!" );
  }

console.log(Number(result));

