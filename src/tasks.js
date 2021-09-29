let taskList = [];

class Task {
  constructor(name, desc, project, status) {
    this.name = name;
    this.project = project;
    this.desc = desc;
    this.status = status;
    // this.due = due
  }
}

export default function addTask() {
  clearWorkspace();
  addEditTaskCard();
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
      form.elements[3].value
    )
  );

  clearWorkspace();
  renderWorkspace();
}

function renderWorkspace(project = '*') {}

function clearWorkspace() {
  workspace.innerHTML = '';
}

function addEditTaskCard(
  name = 'Task',
  desc = 'Description',
  project = 'Project',
  status = true,
  addEdit = 'Add Task'
) {
  const workspace = document.getElementById('workspace');

  const overlay = document.createElement('div');
  overlay.classList.add('new-task-overlay');

  const card = document.createElement('div');
  card.classList.add('new-task-card');

  const cardForm = document.createElement('form');
  cardForm.id = 'new-task-form';
  cardForm.classList.add('new-task-form');

  const taskName = document.createElement('input');
  taskName.setAttribute('type', 'text');
  taskName.setAttribute('name', 'TaskName');
  taskName.setAttribute('placeholder', name);

  const taskDesc = document.createElement('textarea');
  taskDesc.setAttribute('type', 'text');
  taskDesc.setAttribute('name', 'TaskDescription');
  taskDesc.setAttribute('placeholder', desc);
  taskDesc.setAttribute('rows', 5);

  const taskProj = document.createElement('input');
  taskProj.setAttribute('type', 'text');
  taskProj.setAttribute('name', 'TaskProject');
  taskProj.setAttribute('placeholder', project);

  const taskStatus = document.createElement('input');
  taskStatus.setAttribute('type', 'checkbox');
  taskStatus.setAttribute('name', 'TaskStatus');
  taskStatus.setAttribute('value', status);
  taskStatus.id = 'task-status-checkbox';

  const taskStatusLabel = document.createElement('label');
  taskStatusLabel.classList.add('task-status-label');
  taskStatusLabel.htmlFor = 'task-status-checkbox';
  taskStatusLabel.innerHTML = 'Completed?';
  taskStatusLabel.appendChild(taskStatus);

  const formSubmit = document.createElement('input');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.setAttribute('value', addEdit);

  workspace.appendChild(overlay);
  overlay.appendChild(card);
  card.appendChild(cardForm);
  cardForm.appendChild(taskName);
  cardForm.appendChild(taskProj);
  cardForm.appendChild(taskDesc);
  cardForm.appendChild(taskStatusLabel);
  cardForm.appendChild(formSubmit);

  overlay.addEventListener('click', clearWorkspace);
  cardForm.addEventListener('submit', appendNewTask);
}
