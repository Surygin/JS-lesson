const quantity = 1000;
const currency = 'RUB';
const targetСurrency = 'YUAN';

function converterCurrency (quantity, currency, targetСurrency){

    // отталкиваюсь от рубля
    const rateUSD = 92.08;
    const rateRUB = 1;
    const rateYuan = 12.79;
    // Системные сообщение
    const systemMessage = 'Вашей валюты не существует в нашей базе!';
    const systemMessage2 = 'Валюта, которыю вы хотите получить - не существует в нашей базе!';

    // Читабельность у такого кода конечно страдает =)
    // хочется использовать массивы, в внутри Свича можно использовать массив? 
    switch(targetСurrency){
        case 'USD':
            currency === 'RUB' ? console.log(rateRUB / rateUSD * quantity) :
                currency === 'YUAN' ? console.log(rateYuan / rateUSD * quantity) :
                    currency === 'USD' ? console.log('Нечего конвертировать') :
                        console.log(systemMessage);
            break;
        case 'YUAN':
            currency === 'RUB' ? console.log(rateRUB / rateYuan * quantity) :
                currency === 'USD' ? console.log(rateUSD / rateYuan * quantity) :
                    currency === 'YUAN' ? console.log('Нечего конвертировать') :
                        console.log(systemMessage);
            break;
        case 'RUB':
            currency === 'USD' ? console.log(rateUSD / rateRUB * quantity) :
                currency === 'YUAN' ? console.log(rateYuan / rateRUB * quantity) :
                    currency === 'RUB' ? console.log('Нечего конвертировать') :
                        console.log(systemMessage);
            break;
        default:
            console.log(systemMessage2);
    }


}

converterCurrency(quantity, currency, targetСurrency);