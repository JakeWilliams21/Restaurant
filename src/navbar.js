const createNavbar = () => {
    const navbar = document.createElement('div')
    navbar.classList.add('navbar')

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('nav-right');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('nav-left');
    leftDiv.textContent = 'Red Lotus'

    const homeTab = document.createElement('div')
    homeTab.classList.add('tab');
    homeTab.textContent = 'Home'
    homeTab.addEventListener('click', () => console.log('clicked'))
    rightDiv.appendChild(homeTab)

    const menuTab = document.createElement('div')
    menuTab.classList.add('tab');
    menuTab.textContent = 'Menu'
    menuTab.addEventListener('click', () => console.log('clicked'))
    rightDiv.appendChild(menuTab)

    const contactTab = document.createElement('div')
    contactTab.classList.add('tab');
    contactTab.textContent = 'Contact'
    contactTab.addEventListener('click', () => console.log('clicked'))
    rightDiv.appendChild(contactTab)

    navbar.appendChild(leftDiv);
    navbar.appendChild(rightDiv);
    

    return navbar;

}

export default createNavbar;