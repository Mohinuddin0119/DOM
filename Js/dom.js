/*
//---selector--

// getElementsByTagName
const liCollection = document.getElementsByTagName('li');
        
for(const li of liCollection){
    console.log(li);
    console.log(li.innerText);
}
// getElementsById
const idName = document.getElementById('Places-title');
console.log(idName);
console.log(idName.innerText);

// getElementsByClassName()
const className = document.getElementsByClassName('fav-places')
const className1 = document.getElementsByClassName('other-place')
console.log(className)
console.log(className1)

for(const cls of className){
    console.log(cls);
    console.log(cls.innerText);
}

// value change
idName.innerText = 'My tour list'
console.log(className1)

// querySelector()
const query = document.querySelector('#Places-title')
console.log(query)
// querySelectorAll()
const queryAll = document.querySelectorAll('.fav-places')
console.log(queryAll)
for(const li of queryAll){
    console.log(li);
}

// dynamic style
const dom = document.getElementById('Places-title');
const color = dom.style.color = 'blue'
const bgColor = dom.style.backgroundColor = 'blueviolet'
const alignCen = dom.style.textAlign = 'center'
console.log(color,bgColor,alignCen)
// getAttribute (just return value)
const dom1 = document.getElementById('Places-title')
console.log(dom1.getAttribute('id'));
console.log(dom1.getAttribute('class'));
// classList(return an array)
console.log(dom1.classList)
// remove attribute
const rem = dom1.classList.remove('first-class')
console.log(dom1.classList)
// add attribute
const add = dom1.classList.add('second-class');
console.log(dom1.classList)

// set attribute
// document.getElementById('dom').setAttribute('style', 'background-color:blue;')
// document.getElementById('dom').setAttribute('style', 'color:blue;')
document.getElementById('dom').setAttribute('style', 'text-align:center;')
// innerHtml
const dom2 = document.getElementsByClassName('dom-container')
console.log(dom2)
console.log(dom2[0])
console.log(dom2[0].innerHTML)
// change
// console.log(dom2[0].innerHTML = '<h2> HI I AM MOHIN');
// innerText
console.log(dom2[0].innerText)
// change
// console.log(dom2[0].innerText = 'I am Mahi')

// add
const domContainer = document.getElementById('dom-head')
domContainer.classList.add('yellow-bg')
domContainer.classList.add('text')
// remove
domContainer.classList.remove('text')

// node list , childNode
const dom = document.getElementById('places-container')
console.log(dom.childNodes)
console.log(dom.childNodes)
console.log(dom.childNodes[1])
console.log(dom.childNodes[3])
console.log(dom.firstChild.nextSibling.nextSibling.nextSibling)
console.log(dom.childNodes[2].previousSibling)
const dom2 = document.querySelector('#places-container ul')
console.log(dom2)
// create Element
const placesUL = document.querySelector('#places-container ul')
const li = document.createElement('li')
console.log(li)
const new1 = document.createElement('p')
console.log(new1)
li.innerText = 'This is Dhaka'
new1.innerText = 'This is bangladesh'
placesUL.appendChild(li)
placesUL.appendChild(new1)
console.log(placesUL)
// parentNode
console.log(placesUL.parentNode)
console.log(placesUL.parentNode.parentNode)
console.log(placesUL.parentNode.parentNode.parentNode)
console.log(placesUL.parentNode.parentNode.parentNode.parentNode)
console.log(placesUL.parentNode.parentNode.parentNode.parentNode.parentNode)
*/
// where to add
const mainContainer = document.getElementById('main-container')
// what to be add
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'This is food list'
// add
section.appendChild(h1);

const ul = document.createElement('ul')
const li = document.createElement('li')
li.innerText = "Biryani"
ul.appendChild(li)

const li2 = document.createElement('li')
li2.innerText = "Borhani"
ul.appendChild(li2)

const details = document.createElement('details')
details.innerText = "this is natural"
li2.appendChild(details)

section.appendChild(ul)

mainContainer.appendChild(section)


// set innerHTML directly 
const section1 = document.createElement('section');
section1.innerHTML = `
<h1>This is flower list</h1>
<ul> 
    <li>Rose</li>
    <li>Lily</li>
    <li>Shapla</li>
    <li>Kathgolap</li>
    </ul>
`
section1.style.backgroundColor = 'red'
mainContainer.appendChild(section1)