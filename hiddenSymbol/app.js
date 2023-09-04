const card = '2342834503458353';

function hiddenSymbol(card) {
    const arr = card.split('');
    for (i = 0; i<12; i++){
        arr[i] = '*';
    }
    console.log(arr.join(''))
}

hiddenSymbol(card);

// решение 2
console.log(card.slice(-4).padStart(16, '*'));