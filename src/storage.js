export default class storage {
    static saveLocalTasks(todoList) {
    localStorage.setItem('taskList', JSON.stringify(todoList));
  }

// restoreLocalTasks() {
//     if (localStorage.getItem('taskList')) {
//       taskList = JSON.parse(localStorage.getItem('taskList'));
//     }
//   }
