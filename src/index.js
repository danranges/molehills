import './styles.css';
import Storage from './storage';
import UI from './UI';

UI.render();
UI.renderProjects();
console.table(Storage.getTodoList().getProjects());
