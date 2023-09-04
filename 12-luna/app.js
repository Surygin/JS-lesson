const card = '4561-2612-1234-5464';

function luna(card){
    let str = card.replaceAll('-', '');
    for (i = 0; i < 16; i++){
        if (i % 2 == 0){
            if ((str[i] * 2) > 9){
                // console.log((str[i] * 2) - 9);
                str[i] = (str[i] * 2) - 9;
            }else {
                // console.log(str[i])
                str[i] = str[i] * 2;
            }
        }


    }
    console.log(str);
};

luna(card);