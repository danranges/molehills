export default class Task {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = false;
  }

  getStatus() {
    return this.status;
  }

  setStatus() {
    this.status = !this.status;
  }
}
