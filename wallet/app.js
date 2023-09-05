/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив operations
в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не хватает баланса.
Также реализовать метод вывода числа операций по кошельку */

const wallet = {
    balance: 0,
    operations: [],
    addBalance: function (money, msg){
        this.operations.push({
            reason: 'Пополнение баланса - ' + msg,
            sum: money
        });
        return this.balance += money;
    },
    deductionBalance: function (money, msg) {
        if ((this.balance - money) < 0){
            return this.operations.push({
                reason: 'Не достаточно средств на операцию - ' + msg,
                sum: '-' + money,
            });
        } else {
            this.operations.push({
                reason: 'Списание средств - ' + msg,
                sum: '-'+money,
            });
            return this.balance -= money;
        }
    }
};

wallet.addBalance(100, 'Перевод от мамы');
wallet.deductionBalance(50, 'Покупка лимонада');
wallet.deductionBalance(100, 'Покупка Пельменей');

console.log(wallet)