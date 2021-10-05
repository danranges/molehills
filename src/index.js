import './styles.css';
import UI from './UI';
import Task from './tasks';
import Project from './project';

Task.restoreLocalTasks();
Project.restoreLocalProjects();
UI.render();
