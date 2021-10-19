import Project from './project';
import Task from './task';

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Today'));
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProject(project) {
    return this.projects.find(({ name }) => name === project.name);
  }

  addProject(project) {
    this.projects.push(new Project(project));
  }

  deleteProject(project) {
    const toDelete = this.projects.find(({ name }) => name === project.name);
    this.projects.splice(this.projects.indexOf(toDelete), 1);
  }
}
