/*
Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса
*/

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        this.goods.map(el => {
            return 'jhg';
        })
    },
    addGood: function (item) {
        this.goods.push(item);
    },
    getWeightKg: function () {

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
warehouse.addGood(car);

console.log(warehouse.goods);