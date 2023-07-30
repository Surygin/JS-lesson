const deposit = 12000;     // USD
const rate = 0.07;        // %
const priceHome = 13500; // USD
const depositTerm = 24; // mounth

// const result = deposit + (deposit * (rate / 12) * depositTerm);

const result = deposit * (1 + rate / 12) ** depositTerm;

if(result > priceHome){
    const remains = result - priceHome;
    console.log(`Василий сможет купить недвижимость за ${priceHome}$!
    У него останеться ${remains}$.`);
} else {
    const difference = priceHome - result;
    console.log(`Василию не хватает ${difference}$, для покупки не движимости!`);
}
