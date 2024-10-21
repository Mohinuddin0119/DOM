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