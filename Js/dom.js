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
*/
// dom style properties
const sections = document.querySelectorAll('section');
// console.log(sections)
for(const section of sections){
    // console.log(section)
    section.style.border = '3px solid steelblue'
    section.style.marginBottom = '5px'
    section.style.paddingLeft = '5px'
    section.style.backgroundColor = 'lightgrey'
}
// 
const placesContainer = document.getElementById('places-container') 
placesContainer.style.backgroundColor = 'pink'
// add
const domContainer = document.getElementById('dom-head')
domContainer.classList.add('yellow-bg')
domContainer.classList.add('text')
// remove
domContainer.classList.remove('text')