// Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
// Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
// Он не забанен (isBanned)
// Игра не куплена (isExist)
// Игра в продаже (isSelling)
// Напишите условие для покупки и выведите в консоль результат.

// функцию нашел в интернете =)
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const userBalanceUSD = 1000;
const userBalanceBonus = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

// Этот вариант я разрабатывал дольше всего. Очень запутано. Не читабельно! поддерживать такой код - Ад =)
console.log(!isBanned ? !isExist ? isSelling ? userBalanceUSD >= 1000 ? "Вы можете купить игру за деньги!" : userBalanceBonus >= 100 ? 'Вы можете купить игру за бонусы.' : 'вы не можете купить игру' : 'игры нет в продаже' : 'Игра куплена!' : 'Вы забаненны!');

// Не знаю почему, но очень захотелось написать проверку в одну строчку, но я сразу понял, что такой подход не эфективен.
// Хочется получать обратную связь по каждому состоянию

// if(((userBalanceUSD >= 1000) || (userBalanceBonus >= 100)) && ((!isBanned && !isExist) && isSelling)){
//     console.log('Вы можете купить игру');
// } else{
//     console.log('Купить игру не возможно');
// }


// Проверка с бесконечными if'ами xD

// if(!isBanned){
//     if(!isExist){
//         if(isSelling){
//             if((userBalanceUSD >= 1000) || (userBalanceBonus >= 100)){
//                 console.log('Вы можете купить игру!');
//             } else{
//                 console.log('На вашем балансе не хватает средств и бонусов');
//             }
//         } else {
//             console.log('Данной игры нет в продаже!');
//         }
//     } else {
//         console.log('Данная игра куплена.');
//     }
// } else{
//     console.log('Вы забаннены!');
// }

