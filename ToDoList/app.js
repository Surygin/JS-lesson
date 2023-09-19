'use strict';

const ToDoList = {

  id: 1,
  taskList: [],

  addTask(name, priority){
    this.taskList.push({
      id: this.id++,
      name: name,
      priority: priority,
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
        el.name = task.name;
        el.priority = task.priority;
      }
    });
  },
};

ToDoList.addTask('Написать задачу', 1);
ToDoList.addTask('накормить кота', 2);
ToDoList.addTask('Написать задачу 2', 3);
ToDoList.removeTask(3);
ToDoList.addTask('накормить кота 2', 2);
ToDoList.addTask('накормить кота 3', 2);
ToDoList.removeTask(2);
ToDoList.addTask('Написать книгу', 1);
ToDoList.removeTask(5);
ToDoList.addTask('Написать книгу 2', 1);
ToDoList.addTask('Написать книгу 3', 1);
ToDoList.editTaskById(4, {name: 'Отнять еду у кота', priority: 1});
ToDoList.addTask('Написать книгу 4', 1);
console.log('_________________')
ToDoList.taskList.map(el => console.log(el));
console.log('_________________')
ToDoList.sortTaskByPriority();