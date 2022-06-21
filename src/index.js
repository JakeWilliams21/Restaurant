import pageSetup from "./setup";
import createNavbar from './navbar.js'
import buildMenu from "./menu";
import buildContact from "./contact";
import './style.css';

const contentDiv = document.querySelector('#content')

contentDiv.appendChild(createNavbar())
contentDiv.appendChild(pageSetup())
contentDiv.appendChild(buildMenu())

const menuButton = document.querySelector('.menu-tab')
const contactButton = document.querySelector('.contact-tab')

const resetContent = () => {
    contentDiv.removeChild(contentDiv.lastChild);
}

menuButton.addEventListener('click', () => {
    resetContent();
    contentDiv.appendChild(buildMenu())
})
contactButton.addEventListener('click', () => {
    resetContent();
    contentDiv.appendChild(buildContact())
})


