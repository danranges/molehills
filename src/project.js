// import { taskList } from './index';

export default class Project {
  static saveLocalProjects() {}

  static restoreLocalProjects() {}

  static updateProjectsFromTaskList() {
    // taskList.forEach((task) => console.log(task.project));
    let taskList = import('./task');
    console.table(taskList);
  }
}
