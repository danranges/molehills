import Project from './project';
import Task from './task';

export default class TodoList {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projects) {
    projects.sort((a, b) => {
      let x = a.name.toLowerCase(),
        y = b.name.toLowerCase();
      return x == y ? 0 : x > y ? 1 : -1;
    });
    this.projects = projects;
  }

  getProject(project) {
    if (typeof project === 'object') {
      return this.projects.find(({ name }) => name === project.name);
    }

    if (typeof project === 'string') {
      return this.projects.find(({ name }) => name === project);
    }
  }

  addProject(project, expanded) {
    this.projects.push(new Project(project, true));
  }

  deleteProject(project) {
    const toDelete = this.projects.find(({ name }) => name === project.name);
    this.projects.splice(this.projects.indexOf(toDelete), 1);
  }
}
