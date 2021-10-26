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

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(task), task)),
      );
    });

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

  static editProject(project, newName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).setProject(newName);
    Storage.setTodoList(todoList);
  }

  static addTask(project, taskName, taskDesc) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).addTask(taskName, taskDesc);
    Storage.setTodoList(todoList);
  }

  static deleteTask(project, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).deleteTask(task);
    Storage.setTodoList(todoList);
  }

  static setTaskStatus(project, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).getTask(task).setStatus();
    Storage.setTodoList(todoList);
  }
}
