import TodoList from './todolist';
import Project from './project';
import Task from './task';

export default class Storage {
  static initTodoList() {
    if (!localStorage.getItem('todoList')) {
      localStorage.setItem('todoList', JSON.stringify(new TodoList()));
      Storage.addProject('Default Project');
      Storage.addTask(
        'Default Project',
        'Sample Task',
        'This is a sample task description.',
        new Date(),
      );
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

  static addProject(project, expanded) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project, true);
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

  static setProjectView(project) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).setView();
    Storage.setTodoList(todoList);
  }

  static addTask(project, taskName, taskDesc, taskDue) {
    const todoList = Storage.getTodoList();
    todoList.getProject(project).addTask(taskName, taskDesc, taskDue);
    // console.table(todoList.getProjects());
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

  static editTask(project, task, newName, newDesc, newDue) {
    const todoList = Storage.getTodoList();
    todoList
      .getProject(project)
      .getTask(task)
      .editTask(newName, newDesc, newDue);
    Storage.setTodoList(todoList);
  }
}
