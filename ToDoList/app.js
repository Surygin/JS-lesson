'use strict';

const ToDoList = {

  taskList: [],

  addTask: function (name, priority){
    this.taskList.push({
      id: this.taskList.length < 1 ? 1 : this.taskList[this.taskList.length - 1].id + 1,
      name: name,
      priority: priority,
    });
  },
  howMatch: function (){ //метод для отладки - после удалить
    console.log(this.taskList.length);
  },
  removeTask: function (id){
    this.taskList.map(el => {
      if (el.id === id){
        this.taskList.splice((id - 1), id);
      }
    });
  },
  sortTaskByPriority: function (){
    console.log(this.taskList.sort((a, b) => {
      return a.priority - b.priority;
    }));
  },
  editTaskById: function (id, name){
    this.taskList.map(el => {
      if (el.id === id){
        el.name = name;
      }
    });
  },
};

ToDoList.addTask('Написать задачу', 1);
ToDoList.addTask('накормить кота', 2);
ToDoList.addTask('Написать задачу', 3);
ToDoList.removeTask(3);
ToDoList.addTask('накормить кота', 2);
ToDoList.addTask('накормить кота', 2);
ToDoList.addTask('Написать задачу', 1);

ToDoList.howMatch();

ToDoList.editTaskById(2, 'Отнять еду у кота')

ToDoList.taskList.map(el => console.log(el));

ToDoList.sortTaskByPriority();