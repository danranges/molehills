import UI from './UI';
import Project from './project';

let taskList = [];

export default class Task {
  constructor(name, desc, project, status) {
    this.name = name;
    this.project = project;
    this.desc = desc;
    this.status = status;
  }

  static appendNewTask(e) {
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
    Project.updateProjectsFromTaskList();
    UI.clearWorkspace();
    UI.renderWorkspace();
    // console.table(taskList);
  }
}
