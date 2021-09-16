let taskList = []


class Task {
    constructor(name, desc, project, status) {
        this.name = name
        this.desc = desc
        this.project = project
        this.status = status
        // this.due = due
    }
}


export default function addTask() {
    addEditTaskCard()
    
}

function renderWorkspace(project = "*") {

}


function addEditTaskCard(name = 'Task',
                        desc = 'Description',
                        project = 'Project',
                        status = false) {
                                
    const card = document.createElement('div')
    const cardForm = document.createElement('form')


    card.appendChild(cardForm)

}

