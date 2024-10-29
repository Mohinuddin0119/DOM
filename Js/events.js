/*
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

// event handle recap
document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const handlerStatue = document.getElementById("handler-status");
    handlerStatue.innerText = "Text handed by onclick attribute";
  });
// update
document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;

  const p = document.getElementById("para");
  p.innerText = inputText;
  inputField.value = "";
});
// 
document.getElementById('btn-1').addEventListener('click',function(){
    const inputField = document.getElementById('inputField')
    const inputText = inputField.value

    const p = document.getElementById('paragraph')
    p.innerText = inputText;
    inputField.value = ''
})

// post
// step 1 : add event listener to the post button
document.getElementById('btn-post').addEventListener('click',function(){
    // get the comment inside the text area
    const commentBox = document.getElementById('text-area')
    const newComment = commentBox.value;

    // step 3 : set the comment inside the comment container
    const commentContainer = document.getElementById('div-container')
    const p = document.createElement('p')
    p.innerText = newComment;
    // 
    commentBox.value = ''
    commentContainer.appendChild(p)

})

// add your comment
// step 1 
document.getElementById('btn-Post').addEventListener('click', function(){
    const commentBox = document.getElementById('new-comment')
    const newComment = commentBox.value;

    const commentConatainer = document.getElementById('comment-container')
    // 
    const p = document.createElement('p')
    p.innerText = newComment;
    commentConatainer.appendChild(p)

    commentBox.value = ''
})

// 
document.getElementById('btn-more').addEventListener('mouseenter',function(){
    // console.log('Mouse enter')
})
// 
document.getElementById('btn-more').addEventListener('mousemove',function(){
    console.log('Mouse move')
})
document.getElementById('text-field').addEventListener('keydown',function(event){
    console.log(event.target.value)
});
document.getElementById('text-field').addEventListener('keypress',function(event){
    console.log(event.target.value)
});
// key up is proper value provide
document.getElementById('text-field').addEventListener('keyup',function(event){
    console.log(event.target.value)
});
document.getElementById('text-field').addEventListener('focus',function(){
    console.log('focus')
});
document.getElementById('text-field').addEventListener('blur',function(){
    console.log('blur')
});

// github info delete
document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const text = (event.target.value)
    const deleteButton = document.getElementById('btn-delete')
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled',true)
    }
})

document.getElementById('btn-delete').addEventListener('click',function(){
    const secret = document.getElementById('secret-info')
    secret.style.display = 'none';
})

// bubble
// item 2 (stop imaediatePropagation)
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('Item 2 cliked') 
    event.stopImmediatePropagation();
    
})
// stop list 2 propagation
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('Item 2 second cliked')
    event.stopPropagation();
})
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('Item 2 third cliked')
})
// ul
document.getElementById('item-list').addEventListener('click',function(){
    console.log('UL cliked')
})
// div container
document.getElementById('item-container').addEventListener('click',function(){
    console.log('section of the list cliked')
})

// -----delegate ---
const items = document.getElementsByClassName('item')
console.log(items)
for(const item of items){
    // console.log(item)
    item.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target)

    })
}
// remove child
document.getElementById('list-container').addEventListener('click',function(event){
    // console.log(event.target)
    event.target.parentNode.removeChild(event.target);

})


document.getElementById('btn-add').addEventListener('click',function(event){
    const listContainer = document.getElementById('list-container')
    const li = document.createElement('li');
    li.innerText = 'Brand new item'
    listContainer.appendChild(li)
})
*/
// summary of events
// option 1
function makeViolet(){
    document.body.style.backgroundColor = 'violet'
}
// option 2
document.getElementById('makeTomato').addEventListener('click',function(){
    document.body.style.backgroundColor= 'tomato'
})
// event handler
document.getElementById('userEmail').addEventListener('keyup',function(event){
    console.log(event.target.value);
    const submit = document.getElementById('submit');
    submit.addEventListener('click',function(){
        const userEmail = document.getElementById('userEmail')
        userEmail.value = ''
    })
})