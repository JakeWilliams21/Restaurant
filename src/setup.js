export default function pageSetup() {
const contentDiv = document.querySelector('#content')

const header = document.createElement('h1')
header.textContent = 'This Restaurant is Awesome!'
contentDiv.appendChild(header);

const image = document.createElement('img')
image.src = './ramen.png'
contentDiv.appendChild(image);

const paragraph = document.createElement('p');
paragraph.textContent = `This Restaurant is just amazing, I could eat here everyday! But, then I'd be broke... not to say it's expensive! It's just, you know, eating out everyday is not great for the bank LOL. Eat here.`;
contentDiv.appendChild(paragraph);

return contentDiv;
}