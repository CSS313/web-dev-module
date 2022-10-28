// console.log('This is first commit of dom.js file.')
// const header = document.getElementById('main-header')
// console.log(header)
// header.style.borderBottom = 'solid 3px #0000'

const items = document.getElementsByClassName('title')
// console.log(items[0])
items[0].style.fontWeight = 'bold'
items[0].style.color = 'green'

const listItems = document.getElementsByClassName('list-group-item')
listItems[2].style.backgroundColor = 'green'

for(let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontWeight = 'bold'
}