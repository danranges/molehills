import './styles.css'
import Logo from '../Assets/mole.svg'
import addTask from './tasks'

(function render() {

    function createHeader() {
        const header = document.createElement('div')
        header.classList.add('header')

        const hdrLogo = new Image()
        hdrLogo.src = Logo
        hdrLogo.classList.add('header-icon')

        const hdrTxt = document.createElement('div')
        hdrTxt.innerHTML = 'Molehills'
        hdrTxt.classList.add('header-text')

        header.appendChild(hdrLogo)
        header.appendChild(hdrTxt)

        return header
    }

    function createWorkspace() {
        const workspace = document.createElement('div')
        workspace.id = 'workspace'
        workspace.classList.add('workspace')
        return workspace
    }

    function createNav() {
        const nav = document.createElement('div')
        nav.classList.add('nav')

        const btnHome = document.createElement('button')
        btnHome.classList.add('btn-home')

        const btnAddTask = document.createElement('button')
        btnAddTask.classList.add('btn-add-task')
        btnAddTask.addEventListener('click', addTask)


        const btnMenu = document.createElement('button')
        btnMenu.classList.add('btn-menu')

        nav.appendChild(btnHome)
        nav.appendChild(btnAddTask)
        nav.appendChild(btnMenu)

        return nav
    }

    document.body.appendChild(createHeader())
    document.body.appendChild(createWorkspace())
    document.body.appendChild(createNav())
})()

