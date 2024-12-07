const addProduct = () =>{
    const productField = document.getElementById('productName')
    const quantityField = document.getElementById('productQuantity')
    const product = productField.value
    const quantity = quantityField.value
    productField.value = ''
    quantityField.value = ''
    console.log(product,quantity)
    displayProduct(product,quantity)
    saveProductToLocalStorage(product,quantity)
}

const displayProduct = (product,quantity) =>{
    const ul = document.getElementById('displayProduct')
    const li = document.createElement('li')
    li.innerHTML = `${product}: ${quantity}`
    ul.appendChild(li)
} 

const getProduct = () =>{
    let cart = {}
    const findProduct = localStorage.getItem('cart')
    if(!!findProduct){
        cart = JSON.parse(findProduct)
    }
    return cart
}

const saveProductToLocalStorage =(product,quantity) =>{
    const cart = getProduct()
    cart[product] = quantity
    const cartStr = JSON.stringify(cart)
    localStorage.setItem('cart',cartStr)
}
const displayProductFromLocalStorage = () =>{
    const savedCart = getProduct()
    console.log(savedCart)
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product,quantity)
        displayProduct(product,quantity)
    }
}
displayProductFromLocalStorage()
