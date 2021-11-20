import Task from './task';

export default class Project {
  constructor(name, expanded) {
    this.name = name;
    this.tasks = [];
    this.expanded = expanded;
  }

  getProject() {
    return this.name;
  }

  setProject(newName) {
    this.name = newName;
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    tasks.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      // eslint-disable-next-line no-nested-ternary
      return x === y ? 0 : x > y ? 1 : -1;
    });
    this.tasks = tasks;
  }

  // eslint-disable-next-line consistent-return
  getTask(task) {
    if (typeof task === 'object') {
      return this.tasks.find(({ name }) => name === task.name);
    }

    if (typeof task === 'string') {
      return this.tasks.find(({ name }) => name === task);
    }
  }

  addTask(taskName, taskDesc, taskDue) {
    this.tasks.push(new Task(taskName, taskDesc, taskDue));
  }

  deleteTask(task) {
    const toDelete = this.tasks.find(({ name }) => name === task.name);
    this.tasks.splice(this.tasks.indexOf(toDelete), 1);
  }

  setView() {
    this.expanded = !this.expanded;
  }
}
