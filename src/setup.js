export default function pageSetup() {

const div = document.createElement('div');
div.classList.add('content-div')

const header = document.createElement('h1')
header.textContent = 'Restaurant Header!'
div.appendChild(header);

const image = document.createElement('img')
image.src = './ramen.png'
div.appendChild(image);

const paragraph = document.createElement('p');
paragraph.textContent = `This Restaurant is just amazing, I could eat here everyday! But, then I'd be broke... not to say it's expensive! It's just, you know, eating out everyday is not great for the bank LOL. Eat here.`;
div.appendChild(paragraph);

const tabDiv = document.createElement('div')
tabDiv.classList.add('tab-div');

const homeNavTab = document.createElement('div')
homeNavTab.classList.add('tab');
homeNavTab.textContent = 'Home'
homeNavTab.addEventListener('click', () => console.log('clicked'))
tabDiv.appendChild(homeNavTab)

const menuNavTab = document.createElement('div')
menuNavTab.classList.add('tab');
menuNavTab.textContent = 'Menu'
menuNavTab.addEventListener('click', () => console.log('clicked'))
tabDiv.appendChild(menuNavTab)

const contactNavTab = document.createElement('div')
contactNavTab.classList.add('tab');
contactNavTab.textContent = 'Contact'
contactNavTab.addEventListener('click', () => console.log('clicked'))
tabDiv.appendChild(contactNavTab)

div.appendChild(tabDiv)

return div;
}