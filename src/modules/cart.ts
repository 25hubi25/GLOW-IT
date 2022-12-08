const addToCart = Array.from(document.querySelectorAll(".add-to-cart"));

let products = [
    {
        name: 'Taśma SMART LED',
        tag: 'tasma',
        price: 199.99,
        inCart: 0
    },
    {
        name: 'Pilot SMART LED',
        tag: 'pilot',
        price: 49.99,
        inCart: 0
    },
    {
        name: 'Panele SMART LED',
        tag: 'paneleSmart',
        price: 499.99,
        inCart: 0
    },
    {
        name: 'Patyki SMART LED',
        tag: 'patyki',
        price: 249.99,
        inCart: 0
    },
    {
        name: 'Żarówka SMART LED',
        tag: 'zarowka',
        price: 99.99,
        inCart: 0
    },
    {
        name: 'Lampa sufitowa LED',
        tag: 'lampa',
        price: 299.99,
        inCart: 0
    },
    {
        name: 'Panele sześcienne LED',
        tag: 'paneleHex',
        price: 699.99,
        inCart: 0
    },
    {
        name: 'SMART LED auta',
        tag: 'auto',
        price: 199.99,
        inCart: 0
    }
];


for (let i in addToCart) {
    addToCart[i].addEventListener("click", () => {
        cartProductsNumber(products[i]);
        addTotalCost(products[i]);
    })
}

function cartProductsNumber(product:object): void {
    let productsNumber = localStorage.getItem('cartProductsNumber');

    // @ts-ignore
    productsNumber = parseInt(productsNumber);
    if (productsNumber) {
        localStorage.setItem('cartProductsNumber', productsNumber + 1);
        document.querySelector('.number').textContent = productsNumber + 1;
    } else {
        // @ts-ignore
        localStorage.setItem('cartProductsNumber', 1);
        document.querySelector('.number').textContent = '1';
    }

    setItems(product);
}

function setItems(product:any):void {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function cartProductsNumberOnLoad(): void {
    let productsNumber = localStorage.getItem('cartProductsNumber');

    if (productsNumber) {
        document.querySelector('.number').textContent = productsNumber;
    }
}

function addTotalCost(product:any):void {
    let cartTotalCost:(string | number) = localStorage.getItem('totalCost');

    if (cartTotalCost != null) {
        cartTotalCost = parseInt(cartTotalCost);
        localStorage.setItem("totalCost", cartTotalCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems:object = JSON.parse(localStorage.getItem("productsInCart"));
    console.log(cartItems);
    let card = document.querySelector(".card");


    if (cartItems && card) {
        Object.values(cartItems).map(item => {
            card.innerHTML += `
            <div class="product">
                <img src="img/${item.tag}.png" alt="">
                <div class="product-info">
                    <p class="product-name">${item.name}</p>
                    <p class="product-price">${item.price} zł</p>
                    <p class="product-amount">Ilość: <span class="amount-mark">${item.inCart}</span></p>
                </div>
            </div>
            <div class="horizontal-border-wrapper">
                <div class="horizontal-border"></div>
            </div>
            `
        });

        card.innerHTML += `
            <div class="summary">
                <p class="final-price">Łącznie: <span class="final-cost">${localStorage.getItem("totalCost")} zł</span></p>
            </div>
        `
    }
}

cartProductsNumberOnLoad();
displayCart();