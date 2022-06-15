const createNavbar = () => {
    const navbar = document.createElement('div')
    navbar.classList.add('navbar')

    const homeTab = document.createElement('div')
    homeTab.classList.add('tab');
    homeTab.textContent = 'Home'
    homeTab.addEventListener('click', () => console.log('clicked'))
    navbar.appendChild(homeTab)

    const menuTab = document.createElement('div')
    menuTab.classList.add('tab');
    menuTab.textContent = 'Menu'
    menuTab.addEventListener('click', () => console.log('clicked'))
    navbar.appendChild(menuTab)

    const contactTab = document.createElement('div')
    contactTab.classList.add('tab');
    contactTab.textContent = 'Contact'
    contactTab.addEventListener('click', () => console.log('clicked'))
    navbar.appendChild(contactTab)

    return navbar;

}

export default createNavbar;