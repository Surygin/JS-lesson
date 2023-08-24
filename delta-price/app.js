const prices = [[100, 200], [120, 100], [200, 350]];

const deltaPrices = prices
    .map(([oldPrice, newPrice]) => newPrice - oldPrice)
    .filter(delta => delta > 0);

console.log(deltaPrices);