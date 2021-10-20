import Logo from '../Assets/mole.svg';
import Storage from './storage';
import TodoList from './todolist';
import Project from './project';

export default class UI {
  static render() {
    function createHeader() {
      const header = document.createElement('div');
      header.classList.add('header');

      const hdrLogo = new Image();
      hdrLogo.src = Logo;
      hdrLogo.classList.add('header-icon');

      const hdrTxt = document.createElement('div');
      hdrTxt.innerHTML = 'Molehills';
      hdrTxt.classList.add('header-text');

      header.appendChild(hdrLogo);
      header.appendChild(hdrTxt);

      header.addEventListener('click', () => UI.renderHome());

      return header;
    }

    function createWorkspace() {
      const workspace = document.createElement('div');
      workspace.id = 'workspace';
      workspace.classList.add('workspace');

      return workspace;
    }

    function createNav() {
      const nav = document.createElement('div');
      nav.classList.add('nav');

      const btnHome = document.createElement('button');
      btnHome.classList.add('btn-home');
      btnHome.addEventListener('click', UI.renderHome);

      const btnAddTask = document.createElement('button');
      btnAddTask.classList.add('btn-add');
      btnAddTask.addEventListener('click', () => UI.initAddTypeButtons());

      const btnMenu = document.createElement('button');
      btnMenu.classList.add('btn-menu');
      btnMenu.addEventListener('click', UI.renderProjects);

      nav.appendChild(btnHome);
      nav.appendChild(btnAddTask);
      nav.appendChild(btnMenu);

      return nav;
    }

    document.body.appendChild(createHeader());
    document.body.appendChild(createWorkspace());
    document.body.appendChild(createNav());

    UI.renderHome();
    Storage.initTodoList();
  }

  static renderHome() {
    workspace.innerHTML = 'HOME';
  }

  static renderProjects() {
    const todoList = Storage.getTodoList();
    workspace.innerHTML = '';
    todoList.getProjects().forEach((project) => UI.initProjectHeader(project));
  }

  static initProjectHeader(project) {
    const workspace = document.getElementById('workspace');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('container');

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const projectName = document.createElement('p');
    projectName.classList.add('project-name');
    projectName.innerHTML = project.name;

    const projectBtnContainer = document.createElement('div');
    projectBtnContainer.classList.add('project-btn-container');

    const btnShowAddTask = document.createElement('button');
    btnShowAddTask.classList.add('btn-add-task');
    btnShowAddTask.innerHTML = 'add task';

    const btnDeleteProject = document.createElement('button');
    btnDeleteProject.classList.add('btn-delete-project');
    btnDeleteProject.innerHTML = '×';

    const addTaskCard = UI.addTaskHeaderView();

    workspace.appendChild(projectContainer);
    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(addTaskCard);
    projectHeader.appendChild(projectName);
    projectHeader.appendChild(projectBtnContainer);
    projectBtnContainer.appendChild(btnShowAddTask);
    projectBtnContainer.appendChild(btnDeleteProject);

    btnDeleteProject.addEventListener('click', () => UI.deleteProject(project));
    projectName.addEventListener('dblclick', () =>
      UI.editProjectNameHeaderView(project, projectHeader),
    );
    btnShowAddTask.addEventListener('click', () =>
      UI.showAddTaskHeaderView(addTaskCard),
    );
  }

  static showAddTaskHeaderView(addTaskCard) {
    addTaskCard.style.display = 'block';
  }

  static addTaskHeaderView(project) {
    const addTaskCard = document.createElement('div');
    addTaskCard.classList.add('container');

    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('name', 'TaskName');
    taskNameInput.setAttribute('placeholder', 'New Task');

    const btnAddTask = document.createElement('button');
    btnAddTask.classList.add('btn-add-task');
    btnAddTask.innerHTML = 'create';

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-add-task');
    btnCancel.innerHTML = 'cancel';

    addTaskCard.appendChild(taskNameInput);
    addTaskCard.appendChild(btnAddTask);
    addTaskCard.appendChild(btnCancel);

    addTaskCard.style.display = 'none';

    btnAddTask.addEventListener('click', () => {
      UI.addNewTask(project, taskNameInput.value);
    });
    btnCancel.addEventListener(
      'click',
      () => (addTaskCard.style.display = 'none'),
    );

    return addTaskCard;
  }

  static editProjectNameHeaderView(project, projectHeader) {
    projectHeader.innerHTML = '';

    const newNameInput = document.createElement('input');
    newNameInput.setAttribute('type', 'text');
    newNameInput.setAttribute('name', 'New Project Name');
    newNameInput.setAttribute('value', project.name);
    newNameInput.classList.add('new-project-name-input');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('cancel-create-container');

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('btn-delete-project');
    btnSubmit.innerHTML = 'update';

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-delete-project');
    btnCancel.innerHTML = 'cancel';

    projectHeader.appendChild(newNameInput);
    projectHeader.appendChild(btnContainer);
    btnContainer.appendChild(btnCancel);
    btnContainer.appendChild(btnSubmit);

    newNameInput.focus();

    btnSubmit.addEventListener('click', () => {
      UI.editProject(project, newNameInput.value);
    });

    btnCancel.addEventListener('click', () => UI.renderProjects());
  }

  static editProject(project, newName) {
    Storage.editProject(project, newName);
    UI.renderProjects();
  }

  static deleteProject(project) {
    Storage.deleteProject(project);
    UI.renderProjects();
  }

  static clearWorkspace() {
    workspace.innerHTML = '';
  }

  static initAddTypeButtons() {
    if (document.getElementById('underlay')) {
      document.getElementById('underlay').remove();
      document.getElementById('button-wrapper').remove();
    }
    const workspace = document.getElementById('workspace');

    const underlay = document.createElement('div');
    underlay.classList.add('underlay');
    underlay.id = 'underlay';

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');
    buttonWrapper.id = 'button-wrapper';

    const addTypePrompt = document.createElement('h4');
    addTypePrompt.classList.add('add-type-prompt-text');
    addTypePrompt.innerHTML = 'What would you like to add?';

    const btnAddTypeProject = document.createElement('button');
    btnAddTypeProject.classList.add('btn-add-type');
    btnAddTypeProject.innerHTML = 'Project';

    const btnAddTypeTask = document.createElement('button');
    btnAddTypeTask.classList.add('btn-add-type');
    btnAddTypeTask.innerHTML = 'Task';

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.innerHTML = 'cancel';

    workspace.appendChild(underlay);
    workspace.appendChild(buttonWrapper);
    buttonWrapper.appendChild(addTypePrompt);
    buttonWrapper.appendChild(btnAddTypeProject);
    buttonWrapper.appendChild(btnAddTypeTask);
    buttonWrapper.appendChild(btnDismiss);

    underlay.addEventListener('click', () => UI.removeAddTypeButtons());
    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    btnAddTypeProject.addEventListener('click', () => UI.addProjectCard());
    btnAddTypeTask.addEventListener('click', () => UI.addEditTaskCard());
  }

  static removeAddTypeButtons() {
    const underlay = document.getElementById('underlay');
    const buttonWrapper = document.getElementById('button-wrapper');

    buttonWrapper.remove();
    underlay.remove();
  }

  static addProjectCard() {
    const buttonWrapper = document.getElementById('button-wrapper');
    buttonWrapper.innerHTML = '';

    const cardForm = document.createElement('form');
    cardForm.id = 'new-project-form';
    cardForm.classList.add('new-project-form');

    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('name', 'ProjectName');
    projectName.setAttribute('placeholder', 'Project Name');

    const cancelCreateContainer = document.createElement('div');
    cancelCreateContainer.classList.add('cancel-create-container');

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.innerHTML = 'cancel';

    const formSubmit = document.createElement('button');
    formSubmit.classList.add('btn-dismiss-submit');
    formSubmit.innerHTML = 'create';

    buttonWrapper.appendChild(cardForm);
    cardForm.appendChild(projectName);
    cardForm.appendChild(cancelCreateContainer);
    cancelCreateContainer.appendChild(btnDismiss);
    cancelCreateContainer.appendChild(formSubmit);

    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    cardForm.addEventListener('submit', (e) => {
      UI.addNewProject(cardForm.elements[0].value);
      e.preventDefault();
    });
  }

  static addNewProject(project) {
    Storage.addProject(project);
    UI.removeAddTypeButtons();
    UI.renderProjects();
  }

  static addNewTask(project, taskName) {
    if (taskName) {
      UI.renderProjects();
    }
  }

  static addEditTaskCard(
    project = 'Project',
    name = 'Task',
    desc = 'Description',
    status = false,
    addEdit = 'add task',
  ) {
    const buttonWrapper = document.getElementById('button-wrapper');
    buttonWrapper.innerHTML = '';

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
    taskStatus.checked = status;
    taskStatus.id = 'task-status-checkbox';

    const taskStatusLabel = document.createElement('label');
    taskStatusLabel.classList.add('task-status-label');
    taskStatusLabel.htmlFor = 'task-status-checkbox';
    taskStatusLabel.innerHTML = 'Completed?';
    taskStatusLabel.appendChild(taskStatus);

    const cancelCreateContainer = document.createElement('div');
    cancelCreateContainer.classList.add('cancel-create-container');

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.innerHTML = 'cancel';

    const formSubmit = document.createElement('button');
    formSubmit.classList.add('btn-dismiss-submit');
    formSubmit.setAttribute('type', 'submit');
    formSubmit.innerHTML = addEdit;

    buttonWrapper.appendChild(cardForm);
    cardForm.appendChild(taskName);
    cardForm.appendChild(taskProj);
    cardForm.appendChild(taskDesc);
    cardForm.appendChild(taskStatusLabel);
    cardForm.appendChild(cancelCreateContainer);
    cancelCreateContainer.appendChild(btnDismiss);
    cancelCreateContainer.appendChild(formSubmit);

    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    cardForm.addEventListener('submit', () => Task.addNewTask());
  }
}
