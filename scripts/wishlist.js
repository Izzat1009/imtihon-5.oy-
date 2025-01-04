const wrapperEl = document.querySelector(".wrapper")


// CARD CREATOR
function createCard(){
    const data = JSON.parse(localStorage.getItem("wishlist"))
    let fragment = document.createDocumentFragment()
    data.forEach(product=> {
        const divEl = document.createElement("div")
        divEl.className = "card"
        divEl.dataset.id = product.id
        divEl.innerHTML = `
            <img data-id=${product.id} src="${product.thumbnail}" alt="${product.title}">
            <div class="product__icons">
                <button class="remove-btn" name="remove-btn">Remove</button>
            </div>
            <h3>${product.title}</h3>
            <p class="price">$${product.price}</p>
            <p class="rating">⭐ ${product.rating} (${product.stock})</p>
        `
        fragment.appendChild(divEl)    
    })
    wrapperEl.appendChild(fragment)
}

window.onload = ()=>{
    createCard()
}