const detailEl = document.querySelector(".detail")
const BASE_URL = "https://dummyjson.com"

async function fetchData() {
    let params = new URLSearchParams(window.location.search)
    const response = await fetch(`${BASE_URL}/products/${params.get("id")}`)
    response
        .json()
        .then(res => {
            createDetailPage(res);
        })

}

window.onload = ()=> {
    fetchData()
}

function createDetailPage(data){
    detailEl.innerHTML = `
        <div>
            <img class="detail__img" src=${data.images[0]} alt="">
        </div>
        <div class="detail__title">
            <h1>${data?.title}</h1>
             <p class="rating">⭐ ${data?.rating} (${data?.stock})</p>
            <p>${data?.price}$</p>
            <p class="about__detail">${data?.description}</p>
              <hr>
              <button class="like-btn" name="like-btn">🤍</button>
            <button class="detail__btn">Buy now</button>
        </div>
    `
}



// CARD CREATOR
function createCard(data){
    // while(wrapperEl.firstChild){
    //     wrapperEl.firstChild.remove()
    // }
    let fragment = document.createDocumentFragment()
    data.products.forEach(product=> {
        const divEl = document.createElement("div")
        divEl.className = "card"
        divEl.dataset.id = product.id
        divEl.innerHTML = `
            <img data-id=${product.id} src="${product.thumbnail}" alt="${product.title}">
            <div class="product__icons">
                <button class="like-btn" name="like-btn">🤍</button>
                <button class="view__btn">👁️</button>
            </div>
            <h3>${product.title}</h3>
            <p class="price">$${product.price}</p>
            <p class="rating">⭐ ${product.rating} (${product.stock})</p>
        `
        fragment.appendChild(divEl)    
    })
    wrapperEl.appendChild(fragment)
}
