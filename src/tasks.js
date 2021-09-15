
class Task {
    constructor(name, desc, project, status, due) {
        this.name = name
        this.desc = desc
        this.project = project
        this.status = status
        this.due = due
    }

    editTask() {

    }

    deleteTask() {

    }

    setStatus() {
        this.status = !this.status

    }

}

export default function addTask() {
    const workspace = document.getElementById('workspace')
    workspace.innerHTML = 'test'
}
