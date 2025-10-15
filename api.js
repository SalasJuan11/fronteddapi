document.addEventListener("DOMContentLoaded",function(){
    const productContainer = document.getElementById("Productos-Container")

    //Fetch que es para obetener lo productos api 
    fetch('https://fakestoreapi.com/products')
    .then(response=> response.json())
    .then(products=>{
        console.log(products)
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML=`
            <div class="product-image">
            <img src="${product.image}" alt="">
            </div>
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">$${product.price}</p>
            </div>`;
            productContainer.appendChild(productCard)
        });
    })
    .catch(error=>{
        console.log('Error',error)
        productContainer.innerHTML=`Error: No Estan disponibles los productos`
    })
})