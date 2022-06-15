export default function pageSetup() {

const div = document.createElement('div');
div.classList.add('content-div')

const header = document.createElement('h1')
header.textContent = 'This Restaurant is Awesome!'
div.appendChild(header);

const image = document.createElement('img')
image.src = './ramen.png'
div.appendChild(image);

const paragraph = document.createElement('p');
paragraph.textContent = `This Restaurant is just amazing, I could eat here everyday! But, then I'd be broke... not to say it's expensive! It's just, you know, eating out everyday is not great for the bank LOL. Eat here.`;
div.appendChild(paragraph);

return div;
}