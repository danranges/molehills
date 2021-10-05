import UI from './UI';

export let taskList = [];

export default class Task {
  constructor(name, desc, project, status) {
    this.name = name;
    this.project = project;
    this.desc = desc;
    this.status = status;
    // this.due = due
  }

  static saveLocalTasks() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }

  static restoreLocalTasks() {
    if (localStorage.getItem('taskList')) {
      taskList = JSON.parse(localStorage.getItem('taskList'));
    }
  }

  static appendNewTask(e) {
    // const form = document.getElementById('new-task-form');
    const form = e.target;
    taskList.push(
      new Task(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value,
        form.elements[3].value,
      ),
    );

    e.preventDefault();
    Task.saveLocalTasks();
    UI.clearWorkspace();
    UI.renderWorkspace();
    console.table(taskList);
  }
}
