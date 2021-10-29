import Logo from '../Assets/mole.svg';
import ExpandOptions from '../Assets/option-dots.png';
import ExpandTasks from '../Assets/expand.png';
import ExpandTask from '../Assets/expand-light.png';
import Storage from './storage';
import TodoList from './todolist';
import Project from './project';
import Task from './task';
import { format } from 'date-fns';

export default class UI {
  static render() {
    function createHeader() {
      const header = document.createElement('div');
      header.classList.add('header');

      const hdrContainer = document.createElement('div');
      hdrContainer.classList.add('header-container');

      const hdrLogo = new Image();
      hdrLogo.src = Logo;
      hdrLogo.classList.add('header-icon');

      const hdrTxt = document.createElement('div');
      hdrTxt.innerHTML = 'Molehills';
      hdrTxt.classList.add('header-text');

      header.appendChild(hdrContainer);
      hdrContainer.appendChild(hdrLogo);
      hdrContainer.appendChild(hdrTxt);
      header.appendChild(createNav());

      hdrContainer.addEventListener('click', () => UI.renderHome());

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

    function createFooter() {
      const footer = document.createElement('div');
      footer.classList.add('footer');
      footer.id = 'footer';
      footer.innerHTML = `<p class="footer">Made by</p> 
                          <a class="footer" href=https://github.com/danranges> <img id="gh-logo" src="../Assets/GitHub-Mark-64px.png" alt="github logo"/></a>
                          <a class="footer" href=https://github.com/danranges>Dan Ranges</a>`;

      return footer;
    }

    document.body.appendChild(createHeader());
    document.body.appendChild(createWorkspace());
    document.body.appendChild(createNav());
    document.body.appendChild(createFooter());

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
    projectName.textContent = project.name;

    const projectUIControls = document.createElement('div');
    projectUIControls.classList.add('flex');

    const iconExpandControls = new Image();
    iconExpandControls.src = ExpandOptions;
    iconExpandControls.classList.add('icon-expand-controls');
    projectUIControls.appendChild(iconExpandControls);

    const iconExpandTasks = new Image();
    iconExpandTasks.src = ExpandTasks;
    iconExpandTasks.classList.add('icon-expand-tasks');
    projectUIControls.appendChild(iconExpandTasks);

    const projectControls = document.createElement('div');
    projectControls.classList.add('container');
    projectControls.classList.add('hidden');

    const projectBtnContainer = document.createElement('div');
    projectBtnContainer.classList.add('container');

    const btnEditProject = document.createElement('button');
    btnEditProject.classList.add('btn-project-control');
    btnEditProject.textContent = 'edit project';

    const btnShowAddTask = document.createElement('button');
    btnShowAddTask.classList.add('btn-project-control');
    btnShowAddTask.textContent = 'add task';

    const btnDeleteProject = document.createElement('button');
    btnDeleteProject.classList.add('btn-project-control');
    btnDeleteProject.textContent = 'delete project';

    const addTaskCard = UI.addTaskHeaderView(project);

    const tasksContainer = UI.renderTasks(project);

    workspace.appendChild(projectContainer);
    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(projectControls);
    projectContainer.appendChild(addTaskCard);
    projectContainer.appendChild(tasksContainer);
    projectHeader.appendChild(projectName);
    projectHeader.appendChild(projectUIControls);
    projectControls.appendChild(projectBtnContainer);
    projectBtnContainer.appendChild(btnShowAddTask);
    projectBtnContainer.appendChild(btnEditProject);
    projectBtnContainer.appendChild(btnDeleteProject);

    btnDeleteProject.addEventListener('click', () => UI.deleteProject(project));

    iconExpandControls.addEventListener('click', () =>
      UI.showProjectControls(projectControls, iconExpandControls),
    );

    iconExpandTasks.addEventListener('click', () =>
      UI.showTasks(tasksContainer, project, iconExpandTasks),
    );

    projectName.addEventListener('click', () => {
      UI.showTasks(tasksContainer, project, iconExpandTasks);
    });

    btnEditProject.addEventListener('click', () =>
      UI.editProjectNameHeaderView(project, projectHeader),
    );

    btnShowAddTask.addEventListener('click', () => {
      UI.showAddTaskHeaderView(addTaskCard),
        UI.showProjectControls(projectControls, iconExpandControls);
    });

    if (!project.expanded) {
      tasksContainer.classList.add('hidden');
      iconExpandTasks.classList.add('expanded');
    }
  }

  static showTasks(tasksContainer, project, iconExpandTasks) {
    tasksContainer.classList.toggle('hidden');
    Storage.setProjectView(project);
    iconExpandTasks.classList.toggle('expanded');
  }

  static showProjectControls(projectControls, icon) {
    projectControls.classList.toggle('hidden');
    icon.classList.toggle('expanded');
  }

  static showAddTaskHeaderView(addTaskCard) {
    addTaskCard.style.display = 'block';
  }

  static hideAddTaskHeaderView(addTaskCard, taskNameInput) {
    addTaskCard.style.display = 'none';
    taskNameInput.value = '';
  }

  static addTaskHeaderView(project) {
    const addTaskCard = document.createElement('div');
    addTaskCard.classList.add('container');

    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('name', 'TaskName');
    taskNameInput.setAttribute('placeholder', 'New Task');

    const btnAddTask = document.createElement('button');
    btnAddTask.classList.add('btn-task-control');
    btnAddTask.textContent = 'create';

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-task-control');
    btnCancel.textContent = 'cancel';

    addTaskCard.appendChild(taskNameInput);
    addTaskCard.appendChild(btnAddTask);
    addTaskCard.appendChild(btnCancel);

    addTaskCard.style.display = 'none';

    btnAddTask.addEventListener('click', () => {
      UI.addNewTask(project, taskNameInput.value);
    });
    btnCancel.addEventListener('click', () => {
      UI.hideAddTaskHeaderView(addTaskCard, taskNameInput);
    });

    return addTaskCard;
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

  static renderTasks(project) {
    const tasksContainer = document.createElement('div');

    project.getTasks().forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-container');

      const taskHeader = document.createElement('div');
      taskHeader.classList.add('task-header');

      const taskName = document.createElement('p');
      taskName.classList.add('task-item');
      if (task.status) taskName.classList.add('done');
      taskName.textContent = task.name;

      const iconExpandTask = new Image();
      iconExpandTask.src = ExpandTask;
      iconExpandTask.classList.add('icon-expand-task');

      const taskDetails = document.createElement('div');
      taskDetails.classList.add('task-details');
      taskDetails.classList.add('hidden');

      const taskDesc = document.createElement('p');
      taskDesc.classList.add('task-desc');
      taskDesc.textContent = task.description;

      const taskDue = document.createElement('p');
      taskDue.classList.add('task-due');
      // taskDue.textContent = `Due: ${format(
      //   new Date(task.dueDate),
      //   'dd/MM/yyyy',
      // )}`;
      taskDue.textContent = `Due: ${task.dueDate}`;

      const btnDelete = document.createElement('button');
      btnDelete.classList.add('btn-task-control');
      btnDelete.textContent = '×';

      taskItem.appendChild(taskHeader);
      taskHeader.appendChild(iconExpandTask);
      taskHeader.appendChild(taskName);
      taskItem.appendChild(taskDetails);
      taskDetails.appendChild(taskDesc);
      taskDetails.appendChild(taskDue);
      taskDetails.appendChild(btnDelete);

      iconExpandTask.addEventListener('dblclick', () => {
        UI.markTaskDone(project, task, taskName);
      });

      taskItem.addEventListener('click', () =>
        UI.showTaskDetails(taskDetails, iconExpandTask),
      );

      btnDelete.addEventListener('click', () => {
        UI.deleteTask(project, task);
      });

      tasksContainer.appendChild(taskItem);
    });

    return tasksContainer;
  }

  static showTaskDetails(taskDetails, icon) {
    taskDetails.classList.toggle('hidden');
    icon.classList.toggle('expanded');
  }

  static markTaskDone(project, task, taskDOM) {
    Storage.setTaskStatus(project, task);
    taskDOM.classList.toggle('done');
  }

  static deleteTask(project, task) {
    Storage.deleteTask(project, task);
    UI.renderProjects();
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
    btnSubmit.classList.add('btn-project-control');
    btnSubmit.textContent = 'update';

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn-project-control');
    btnCancel.textContent = 'cancel';

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
    addTypePrompt.textContent = 'What would you like to add?';

    const btnAddTypeProject = document.createElement('button');
    btnAddTypeProject.classList.add('btn-add-type');
    btnAddTypeProject.textContent = 'Project';

    const btnAddTypeTask = document.createElement('button');
    btnAddTypeTask.classList.add('btn-add-type');
    btnAddTypeTask.textContent = 'Task';

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.textContent = 'cancel';

    workspace.appendChild(underlay);
    workspace.appendChild(buttonWrapper);
    buttonWrapper.appendChild(addTypePrompt);
    buttonWrapper.appendChild(btnAddTypeProject);
    buttonWrapper.appendChild(btnAddTypeTask);
    buttonWrapper.appendChild(btnDismiss);

    underlay.addEventListener('click', () => UI.removeAddTypeButtons());
    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    btnAddTypeProject.addEventListener('click', () => UI.addProjectCard());
    btnAddTypeTask.addEventListener('click', () => UI.addTaskCard());
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
    btnDismiss.textContent = 'cancel';

    const formSubmit = document.createElement('button');
    formSubmit.classList.add('btn-dismiss-submit');
    formSubmit.textContent = 'create';

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

  static addNewTask(project, taskName, taskDesc, taskDue) {
    Storage.addTask(project, taskName, taskDesc, taskDue);
    UI.renderProjects();
  }

  static addTaskCard() {
    const buttonWrapper = document.getElementById('button-wrapper');
    buttonWrapper.innerHTML = '';

    const cardForm = document.createElement('form');
    cardForm.id = 'new-task-form';
    cardForm.classList.add('new-task-form');

    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('name', 'TaskName');
    taskName.setAttribute('placeholder', 'Task');

    const taskDesc = document.createElement('textarea');
    taskDesc.setAttribute('type', 'text');
    taskDesc.setAttribute('name', 'TaskDescription');
    taskDesc.setAttribute('placeholder', 'Description');
    taskDesc.setAttribute('rows', 5);

    const taskProj = UI.initProjectSelection();

    const taskDueInput = document.createElement('input');
    taskDueInput.setAttribute('type', 'date');
    taskDueInput.id = 'task-due';
    let taskDueDate = taskDueInput.value;
    taskDueInput.addEventListener('change', () => {
      taskDueDate = new Date(taskDueInput.value);
    });

    const taskDueLabel = document.createElement('label');
    taskDueLabel.setAttribute('for', taskDueInput.id);
    taskDueLabel.classList.add('date-label');
    taskDueLabel.innerHTML = 'Due Date';
    taskDueLabel.appendChild(taskDueInput);

    const cancelCreateContainer = document.createElement('div');
    cancelCreateContainer.classList.add('cancel-create-container');

    const btnDismiss = document.createElement('button');
    btnDismiss.classList.add('btn-dismiss-submit');
    btnDismiss.textContent = 'cancel';

    const formSubmit = document.createElement('div');
    formSubmit.classList.add('btn-dismiss-submit');
    formSubmit.textContent = 'create';

    buttonWrapper.appendChild(cardForm);
    cardForm.appendChild(taskName);
    cardForm.appendChild(taskProj);
    cardForm.appendChild(taskDesc);
    cardForm.appendChild(taskDueLabel);
    cardForm.appendChild(cancelCreateContainer);
    cancelCreateContainer.appendChild(btnDismiss);
    cancelCreateContainer.appendChild(formSubmit);

    btnDismiss.addEventListener('click', () => UI.removeAddTypeButtons());
    formSubmit.addEventListener('click', () => {
      if (!taskName) {
        alert('Task Name is a required field');
      }
      if (!taskDueDate) {
        alert('Due Date is a required field');
      }
      if (!taskProj) {
        alert('Project is a required field');
      }

      if (taskName.value && taskDueDate && taskProj.value) {
        UI.addNewTask(
          taskProj.value,
          taskName.value,
          taskDesc.value,
          taskDueDate,
        );
      }
    });
  }

  static initProjectSelection() {
    const projectDropdown = document.createElement('select');
    projectDropdown.id = 'project-dropdown';

    const defaultProject = document.createElement('option');
    defaultProject.textContent = 'Select project';
    defaultProject.setAttribute('value', '');
    defaultProject.setAttribute('hidden', true);
    defaultProject.setAttribute('selected', true);
    defaultProject.setAttribute('disabled', true);

    projectDropdown.appendChild(defaultProject);

    const projectNames = Storage.getTodoList()
      .getProjects()
      .map((project) => project.name);

    projectNames.sort((a, b) => a.toLowerCase() - b.toLowerCase());

    for (let i = 0; i < projectNames.length; i++) {
      let proj = projectNames[i];
      let el = document.createElement('option');
      el.textContent = proj;
      el.value = proj;
      projectDropdown.appendChild(el);
    }

    return projectDropdown;
  }
}
