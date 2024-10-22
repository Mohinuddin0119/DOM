// Option 1 : directly declare
// { <button onclick="console.log(64)">Another button</button> }


// option 2
// important:we will  use this
function makeRed(){
    document.body.style.backgroundColor = "red"
}
// option 3
// part 1
const blueButton = document.getElementById('makeBlue')
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}
// another
const violetButton = document.getElementById('makeViolet')
violetButton.onclick = function makeViolet(){
    document.body.style.backgroundColor = 'violet'
}
//option 3 same 
const h2Button = document.getElementById('h2On')
h2Button.onclick = function makeH2(){
    document.body.style.color = 'white'
}
// option 4
const greedButton = document.getElementById('make-green')
greedButton.addEventListener('click', makeGreen);

function makeGreen(){
    document.body.style.backgroundColor = 'green'
}
// option 4 another
const tomatoButton = document.getElementById('make-tomato')
tomatoButton.addEventListener('click',function (){
    document.body.style.backgroundColor = 'tomato'
})
// Option 4 final
// important: we will use this
document.getElementById('make-goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod'
})
// option 2 final
// important:we will use this sometime

function makeOrange(){
    document.body.style.backgroundColor = 'orange'
}