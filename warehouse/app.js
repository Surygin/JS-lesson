/*
Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса
*/

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        console.log(this.goods.filter(el => Number(el.id) === id));
    },
    addGood: function (item) {
        this.goods.push(item);
    },
    getWeightKg: function () {
        const sumKg = [];
        this.goods.map(el => {
            if (el?.weight?.kg){
                sumKg.push(Number(el.weight.kg));
            }
        });
        return sumKg.reduce((acc, currentValue) => {
            return  acc += currentValue;
        }, 0);
    },
};

/* Товары */
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
}

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
}

const paper = {
    id: 3,
    color: 'red'
}

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.findGoodById(2);
console.log(warehouse.getWeightKg());