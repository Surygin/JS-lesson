const tasks = ['Задача 1'];

console.log(tasks);
console.log('Первычный массив ↑ ______________________');

addTasks(tasks, 'Проверить!');
addTasks(tasks, 'Почитать!');
addTasks(tasks, 'Купить воды!');
addTasks(tasks, 'Сделать сальто!');

console.log(tasks);
console.log('Результаты добавления ↑ ______________________');

removeTaskOnTitle(tasks, 'Задача 1');
console.log(tasks);
console.log('Результаты Удаления ↑ ______________________');

moveTaskToStart(tasks, 'Купить воды!');
console.log(tasks);
console.log('Результаты смены мест ↑ ______________________');

function addTasks(arr, task) {
    arr.push(task);
}

function removeTaskOnTitle(arr, task){
    removeEl = arr.indexOf(task);
    if(removeEl >= 0){
        return arr.splice(removeEl, 1);
    }else{
        console.log('Элемент, который вы хотите удалить - не существует в массиве!');
    }
    
}

function moveTaskToStart(arr, task){
    moveEl = removeTaskOnTitle(arr, task);
    if(moveEl){
        return arr.unshift(moveEl[0]);
    }else{
        console.log('Элемент, который вы хотите переместить - не существует в массиве!');
    }
}

