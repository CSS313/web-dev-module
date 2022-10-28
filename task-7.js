let itemList = document.querySelector('#items')
itemList.parentElement.style.backgroundColor = '#f4f4f4'
itemList.firstElementChild.textContent = 'Hello 1'
itemList.lastElementChild.textContent = 'Hello 4'
itemList.previousElementSibling.style.color = 'yellow'

//Crete Element

//Create Div
const newDiv = document.createElement('div')

//Add class
newDiv.className = 'hello'

//Add id
newDiv.id = 'hello1'

//Add attribute
newDiv.setAttribute('title', 'Hello div')

//Create text node
const newDivText = document.createTextNode('Hello World!')

//Add text node to div
newDiv.appendChild(newDivText)

const container = document.querySelector('header .container')
const h1 = document.querySelector('header h1')
newDiv.style.fontSize = '30px'
container.insertBefore(newDiv, h1)