console.log("embadded")

// find item by tag name
const allLi = document.getElementsByTagName('li');
console.log(allLi)
// find item by class name
const allTitles = document.getElementsByClassName('section-title')
console.log(allTitles)
// specific item
const listCon = document.getElementById('list-container')
console.log(listCon)

// added Element
// where to add
const whereAdd = document.getElementById('list-container')
// what to add
const li = document.createElement('li')
li.innerText = "Item-5"
whereAdd.appendChild(li);
// 
const dom = document.getElementById('section-con')
dom.style.color = 'white'
dom.style.backgroundColor = 'blue'
dom.style.padding = '7px'
// innerHtml
const mainCon = document.getElementById('section-container')
// 
const section = document.createElement('section')
section.innerHTML = `
<h1>My another heading tage</h1>
<ul>
    <li>Item 1</li>
    <li>Item 3</li>
    <li>Item 5</li>
</ul>
`
mainCon.appendChild(section)