let taskList = [];

export default class Task {
  constructor(name, desc, project, status) {
    this.name = name;
    this.project = project;
    this.desc = desc;
    this.status = status;
    // this.due = due
  }
}

function addTask() {
  clearWorkspace();
  addEditTaskCard();
}

function saveLocal() {
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function restoreLocal() {
  if (localStorage.getItem('taskList')) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }
}

function appendNewTask(e) {
  e.preventDefault();

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

  clearWorkspace();
  renderWorkspace();
}

function renderWorkspace(project = '*') {
  console.log(taskList);
}

function clearWorkspace() {
  workspace.innerHTML = '';
}
