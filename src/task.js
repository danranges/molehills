export default class Task {
  constructor(name, description, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.status = false;
  }

  getStatus() {
    return this.status;
  }

  setStatus() {
    this.status = !this.status;
  }

  editTask(newName, newDesc, newDueDate) {
    this.name = newName;
    this.description = newDesc;
    this.dueDate = newDueDate;
  }
}
