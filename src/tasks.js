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
    cardForm.classList.add('new-task-form')

    const taskName = document.createElement('input')
    taskName.setAttribute('type', 'text')
    taskName.setAttribute('name', 'TaskName')
    taskName.setAttribute('placeholder', name)
    
    const taskDesc = document.createElement('input')
    taskDesc.setAttribute('type', 'text')
    taskDesc.setAttribute('name', 'TaskDescription')
    taskDesc.setAttribute('placeholder', desc)

    const taskProj = document.createElement('input')
    taskProj.setAttribute('type', 'text')
    taskProj.setAttribute('name', 'TaskProject')
    taskProj.setAttribute('placeholder', project)
    
	const taskStatus = document.createElement('input')
    taskStatus.setAttribute('type', 'checkbox')
    taskStatus.setAttribute('name', 'TaskStatus')
    taskStatus.setAttribute('value', 'Status')
	taskStatus.id = 'task-status-checkbox'

	const taskStatusLabel = document.createElement('label')
	taskStatusLabel.htmlFor = 'task-status-checkbox'
	taskStatusLabel.appendChild(taskStatus)
	
	const formSubmit = document.createElement('input')
	formSubmit.setAttribute('type', 'submit')
	formSubmit.setAttribute('value', 'Submit')

	card.appendChild(cardForm)
	cardForm.appendChild(taskName)
	cardForm.appendChild(taskDesc)
	cardForm.appendChild(taskProj)
	cardForm.appendChild(taskStatusLabel)
	cardForm.appendChild(formSubmit)
	

}

