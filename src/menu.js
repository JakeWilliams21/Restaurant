const menuContent = () => {
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu-div')

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu'
    menuHeader.classList.add('menu-header')

    const menuDescription = document.createElement('p');
    menuDescription.classList.add('menu-description');
    menuDescription.textContent = `Here you will find our excellent selection of Chinese and Vietnamese Cuisine. Please, browse to your heart's content`


    const appHeader = document.createElement('h3');
    appHeader.classList.add('app-header');
    appHeader.textContent = 'Appetizers';

    
}

export default menuContent;