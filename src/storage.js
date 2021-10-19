import TodoList from './todolist';
import Project from './project';
import Task from './task';

export default class Storage {
  static initTodoList() {
    if (!localStorage.getItem('todoList')) {
      localStorage.setItem('todoList', JSON.stringify(new TodoList()));
    }
  }

  static getTodoList() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem('todoList')),
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new Project(project), project)),
    );

    return todoList;
  }

  static setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.setTodoList(todoList);
  }

  static deleteProject(project) {
    const todoList = Storage.getTodoList();
    todoList.deleteProject(project);
    Storage.setTodoList(todoList);
  }
}
