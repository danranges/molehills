import TodoList from './todolist';
import Project from './project';
import Task from './task';

export class Storage {
  static getTodoList() {}

  static setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  static addProject(projectName) {}
}
