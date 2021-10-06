import UI from './UI';

let taskList = [];

export default class Task {
  constructor(name, desc, project, status) {
    this.name = name;
    this.desc = desc;
    this.project = project;
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

    UI.clearWorkspace();
    UI.renderWorkspace();
  }
}
