import pageSetup from "./setup";
import createNavbar from './navbar.js'
import './style.css';

const contentDiv = document.querySelector('#content')

contentDiv.appendChild(createNavbar())
contentDiv.appendChild(pageSetup())


