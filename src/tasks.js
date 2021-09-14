
class Task {
    constructor(name, desc, project, status, due) {
        this.name = name
        this.desc = desc
        this.project = project
        this.status = status
        this.due = due
    }

}

export default function addTask() {
    const workspace = document.getElementById('workspace')
    workspace.innerHTML = 'test'
}
