'use strict';

const ToDoList = {

  id: 1,
  taskList: [],

  addTask(task){
    this.taskList.push({
      id: this.id++,
      name: task.name ? task.name : '',
      description: task.description ? task.description : '',
      priority: task.priority ? task.priority : 0,
    });
  },
  removeTask(id){
    const elId = this.taskList.findIndex(el => el.id === id);
    this.taskList.splice(elId, 1);
  },
  sortTaskByPriority(){
    console.log(this.taskList.sort((a, b) => {
      return a.priority - b.priority;
    }));
  },
  editTaskById(id, task){
    this.taskList.map(el => {
      if (el.id === id){
        task.name ? el.name = task.name : false;
        task.description ? el.description = task.description : false;
        task.priority ? el.priority = task.priority : false;
      }
    });
  },
};

const tasks = ToDoList;
const task1 = {
  description: 'Взять кота на руки и почесать ему за ухом',
  priority: 3,
}
const task2 = {
  name: 'сварить кашу',
  description: 'Сварить гречневую кашу',
  priority: 1,
}
const task3 = {
  name: 'Погладить вещи',
  description: 'достать гладильную доску и погладить вещи',
  priority: 2,
}
const task4 = {
  description: 'Взять кота на руки и почесать ему за ухом',
}

tasks.addTask(task1);
tasks.addTask(task2);
tasks.addTask(task3);
tasks.addTask(task4);
tasks.editTaskById(2, {name: 'приготовить завтрак', description: 'пожарить омлет'})
tasks.removeTask(1);

console.log('________Просмотр содержимого_________')
tasks.taskList.map(el => console.log(el));
console.log('________Сортировка по приоритету_________')
tasks.sortTaskByPriority();