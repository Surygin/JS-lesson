const card = '4561-2612-1234-5464';

function luna(card){
    let str = card.trim().replaceAll('-', '').split('');
    for (i = 0; i < str.length; i++){
        if (i % 2 === 0){
            if ((str[i] * 2) > 9){
                // console.log(str[i]);
                str[i] = Number((str[i] * 2) - 9);
            }else {
                // console.log(str[i])
                str[i] = Number(str[i] * 2);
            }
        }else {
            str[i] = Number(str[i]);
        }
    }
    const lunaNum = str.reduce((acc, currentValue) => {
        return acc += currentValue;
    }, 0);
    console.log(lunaNum % 10 === 0);
};

luna(card);