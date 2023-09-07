/*
Сделать объект склад с методами добавления на склад, поиска по складу товара и расчет веса
*/

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        // console.log(this.goods[0].id)
        // console.log(Object.keys(this.goods));
        // this.goods.filter(el => el.id === id);
        // this.goods.map(el => {
        //     return el.id === id;
        // });
        for (let step of this.goods){
           if (step.id === id){
               return step;
           }
        }
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
warehouse.addGood(chair);
warehouse.addGood(chair);
warehouse.addGood(paper);

// console.log(warehouse.findGoodById(1));
// warehouse.findGoodById(1);
console.log(warehouse.findGoodById(1));
// console.log(warehouse.goods);

// console.log(users.sort((a,b) => {
//     return a.age - b.age
// }));