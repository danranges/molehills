export default class Task {
  constructor(name) {
    this.name = name;
    this.status = false;
  }

  getStatus() {
    return this.status;
  }

  setStatus() {
    this.status = !this.status;
    console.log('status changed');
  }
}
