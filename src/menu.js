const buildMenu = () => {
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu-div')

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu'
    menuHeader.classList.add('menu-header')
    menuDiv.appendChild(menuHeader)

    const menuDescription = document.createElement('p');
    menuDescription.classList.add('menu-description');
    menuDescription.textContent = `Here you will find our excellent selection of Chinese and Vietnamese Cuisine. Please, browse to your heart's content`
    menuDiv.appendChild(menuDescription);

    const menuContent = document.createElement('div')
    menuContent.classList.add('menu-content');
    menuDiv.appendChild(menuContent);

    const appDiv = document.createElement('div')
    const appHeader = document.createElement('h3');
    appHeader.classList.add('app-header');
    appHeader.textContent = 'Appetizers';
    appDiv.appendChild(appHeader);

    const appList = document.createElement('ul');
    appList.classList.add('app-list');
    
    for (let i = 0; i < 5; i++) {
        let appItem = document.createElement('li')
        appItem.classList.add('app-item');
        appItem.textContent = 'Sample Appetizer'
        appList.appendChild(appItem);
    }
    appDiv.appendChild(appList);

    const mainDiv = document.createElement('div')
    const mainHeader = document.createElement('h3');
    mainHeader.classList.add('main-header');
    mainHeader.textContent = 'Entrees';
    mainDiv.appendChild(mainHeader);

    const mainList = document.createElement('ul');
    mainList.classList.add('main-list');
    
    for (let i = 0; i < 5; i++) {
        let mainItem = document.createElement('li')
        mainItem.classList.add('main-item');
        mainItem.textContent = 'Sample Entree'
        mainList.appendChild(mainItem);
    }
    mainDiv.appendChild(mainList);

    const dessertDiv = document.createElement('div')
    const dessertHeader = document.createElement('h3');
    dessertHeader.classList.add('dessert-header');
    dessertHeader.textContent = 'Desserts';
    dessertDiv.appendChild(dessertHeader);

    const dessertList = document.createElement('ul');
    dessertList.classList.add('dessert-list');
    
    for (let i = 0; i < 5; i++) {
        let dessertItem = document.createElement('li')
        dessertItem.classList.add('dessert-item');
        dessertItem.textContent = 'Sample Desserts'
        dessertList.appendChild(dessertItem);
    }
    dessertDiv.appendChild(dessertList);

    menuContent.appendChild(appDiv)
    menuContent.appendChild(mainDiv)
    menuContent.appendChild(dessertDiv)


    return menuDiv;
    
    

    
}

export default buildMenu;