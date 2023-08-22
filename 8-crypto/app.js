const password = 'qweasdzx';

// Функция криптографии
function crypto(password){
    const arr = password.split('');
    const cryptoPass = [];
    
    for(i = 0; i < arr.length; i++){
        cryptoPass.push(arr[i].charCodeAt(0));
    }
    return cryptoPass;
}

// Функция расшифровки
function checkPass(cryptoPass, password){
    const arr = [];

    for(i = 0; i < cryptoPass.length; i++){
        arr.push(String.fromCharCode(cryptoPass[i]));
    }

    const check = arr.join('');

    return check === password
}

// запуск
console.log(crypto(password));

console.log(checkPass(crypto(password), password));
