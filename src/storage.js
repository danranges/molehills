import TodoList from './todolist';
import Project from './project';
import Task from './task';

export default class Storage {
  static getTodoList() {
    const todoList = object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem('todoList')),
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => object.assign(new Project(), project)),
    );

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => object.assign(new Task(), task)),
      );
    });

    return todoList;
  }

  static setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}
