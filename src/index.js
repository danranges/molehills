import './styles.css'
import Logo from '../Assets/mole.svg'

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
        workspace.classList.add('workspace')
        workspace.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Scelerisque mauris pellentesque pulvinar pellentesque. Arcu odio ut sem nulla pharetra diam sit amet nisl. Leo vel orci porta non pulvinar neque laoreet. Nullam ac tortor vitae purus. Quisque egestas diam in arcu cursus euismod quis. Risus viverra adipiscing at in tellus. Diam maecenas ultricies mi eget. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Integer malesuada nunc vel risus commodo. Nisl vel pretium lectus quam id. Sit amet commodo nulla facilisi. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.Ultrices sagittis orci a scelerisque.Donec et odio pellentesque diam volutpat.Id donec ultrices tincidunt arcu non sodales.Imperdiet dui accumsan sit amet nulla facilisi.Ac ut consequat semper viverra nam libero.Interdum velit laoreet id donec ultrices.Netus et malesuada fames ac turpis.Aliquet enim tortor at auctor urna nunc.Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Sed vulputate mi sit amet mauris commodo quis.Id aliquet lectus proin nibh nisl condimentum.Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.Volutpat consequat mauris nunc congue nisi vitae.Amet venenatis urna cursus eget nunc scelerisque.Amet consectetur adipiscing elit ut aliquam purus sit amet.Elementum eu facilisis sed odio morbi quis.Suspendisse ultrices gravida dictum fusce ut placerat.Adipiscing tristique risus nec feugiat in fermentum posuere urna.Diam quam nulla porttitor massa id neque aliquam.Sollicitudin aliquam ultrices sagittis orci a. Amet consectetur adipiscing elit pellentesque.Orci a scelerisque purus semper eget.Risus pretium quam vulputate dignissim suspendisse in est ante in.Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.Mi eget mauris pharetra et ultrices.Diam quis enim lobortis scelerisque fermentum.Vitae et leo duis ut diam quam nulla porttitor massa.Felis imperdiet proin fermentum leo vel orci.Pulvinar sapien et ligula ullamcorper malesuada proin.Platea dictumst quisque sagittis purus sit amet volutpat consequat.Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.Eget nunc lobortis mattis aliquam faucibus purus in.Eget aliquet nibh praesent tristique magna sit amet purus gravida.Eu consequat ac felis donec et odio pellentesque diam.Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.Elit duis tristique sollicitudin nibh.Mi bibendum neque egestas congue.Neque egestas congue quisque egestas diam in arcu cursus.Adipiscing elit pellentesque habitant morbi tristique senectus et.Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Nisl condimentum id venenatis a.Semper viverra nam libero justo laoreet sit amet cursus.Mattis vulputate enim nulla aliquet porttitor lacus.Nec feugiat nisl pretium fusce id velit ut tortor pretium.Neque viverra justo nec ultrices dui.Purus sit amet luctus venenatis lectus magna fringilla urna porttitor.Nunc congue nisi vitae suscipit tellus mauris a diam.Nunc congue nisi vitae suscipit tellus mauris.Vestibulum lectus mauris ultrices eros in cursus turpis.Interdum velit euismod in pellentesque massa placerat duis ultricies lacus.Ut ornare lectus sit amet est.In vitae turpis massa sed elementum tempus egestas sed.Tincidunt id aliquet risus feugiat in ante.Pellentesque massa placerat duis ultricies lacus sed turpis.Sagittis vitae et leo duis ut diam.Tellus in hac habitasse platea dictumst vestibulum rhoncus.Interdum varius sit amet mattis vulputate enim nulla aliquet.Nibh tortor id aliquet lectus proin nibh.Amet massa vitae tortor condimentum lacinia quis.Sit amet nulla facilisi morbi tempus iaculis urna.'
        return workspace
    }

    function createNav() {
        const nav = document.createElement('div')
        nav.classList.add('nav')

        const btnHome = document.createElement('button')
        btnHome.classList.add('btn-home')

        const btnAddTask = document.createElement('button')
        btnAddTask.classList.add('btn-add-task')

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