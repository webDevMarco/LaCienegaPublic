const listNavigation = document.querySelector('.list-navigation');
const grocery = [
    {brand: 'La Preferida', item: 'Pinto Beans', size: '16 oz', price: 2.99, img: 'lapreferidapintobeans16.jpg', onSale: true},
    {brand: 'Senor Freeze', item: 'Ice Popsicles', size: '8 CT', price: 0.99, img: 'senorfreezepops.jpg', onSale: true},
    {brand: 'Readi', item: 'Plates', size: '100 CT', price: 3.99, img: 'readiplate100.jpg', onSale: true},
    {brand: 'La Preferida', item: 'Maiz Blanco', size: '108 oz', price: '2/$5.00', img: 'lapreferidamaizblanco.png', onSale: true},
    {brand: 'Old Orchard', item: 'Apple Juice', size: '64 oz', price: 1.89, img: 'oldorchardapplejuice.jpg', onSale: true},
    {brand: 'Gatorade', item: 'Assorted Drinks', size: '32 oz', price: '2/$3.00', img: 'gatorade32.jpg', onSale: true},
    {brand: 'Mars', item: 'M&Ms Candy', size: '3.14 oz', price: 2.99, img: 'M&Ms.jpg', onSale: true},
];

const produce =[
    {item: 'Apple Gala', price: 0.99, size: 'LB', img: 'applegala.png', onSale: true},
    {item: 'Bananas', price: 0.33, size: 'LB', img: 'bananas.jpg', onSale: true},
    {item: 'Strawberries', price: 4.99, size: '16 oz', img: 'strawberries.jpg', onSale: true},
    {item: 'Jalapeno Peppers', price: 0.79, size: 'LB', img: 'jalapenopeppers.png', onSale: true},
    {item: 'Naval Oranges', price: 2.99, size: '16 oz', img: 'navaloranges.jpg', onSale: true},
];

const meat =[
    {item: 'Arrachera', price: 6.99, size: 'LB', img: 'arrachera.jpg', onSale: true},
    {item: 'Beef Tongue', price: 8.99, size: 'LB', img: 'beeftongue.jpg', onSale: true},
    {item: 'Costillas Para Asar', price: 6.29, size: 'LB', img: 'costillasparaasar.jpg', onSale: true},
    {item: 'Carne De Res', price: 3.99, size: 'LB', img: 'carnederes.jpg', onSale: true},

]

const deli = [
    {brand: 'Sara Lee', item: 'Honey Ham', price: 6.99, size: 'LB', img: 'saraleehoneyham.png', onSale: true},
]

const taqueria =[

]

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(button.id == 'produce-btn'){
            loadProduce(produce);
        }
        if(button.id == 'grocery-btn'){
            loadGrocery(grocery);
        }
        if(button.id == 'meat-btn'){
            loadMeat(meat);
        }
        if(button.id == 'deli-btn'){
            loadDeli(deli)
        }
    })
})



window.addEventListener('DOMContentLoaded', ()=>{
    loadGrocery(grocery);
})

function loadGrocery(products){

    let showProducts = products.map(function(items){
        if(items.onSale == true && typeof items.price !== 'string'){
            return `
            <div class="list-navigation-boxes">
            <img src ="${items.img}" class="items-images-size">
            <h5 class="week-sale">07/24/21 - 07/31/21</h5>
            <h4>${items.brand}</h4>
            <h4>${items.item}</h4>
            <div class="list-items-information">
              <h4> ${items.size}</h4>
              <h4>$${items.price}</h4>
            </div></div>
            `;
        }
        else if(items.onSale == true && typeof items.price === 'string'){
            return `
            <div class="list-navigation-boxes">
            <img src ="${items.img}" class="items-images-size">
            <h5 class="week-sale">Sale: 07/24/21-07/31/21</h5>
            <h4>${items.brand}</h4>
            <h4>${items.item}</h4>
            <div class="list-items-information">
              <h4> ${items.size}</h4>
              <h4>${items.price}</h4>
            </div></div>`;
        }
    })

    showProducts = showProducts.join("")
    listNavigation.innerHTML = showProducts;
}

function loadMeat(products){

    let showProducts = products.map(function(items){
        if(items.onSale == true && typeof items.price !== 'string'){
            return `
                <div class="list-navigation-boxes">
                <img src ="${items.img}" class="items-images-size">
                <h5 class="week-sale">07/24/21 - 07/31/21</h5>
                <h4>${items.item}</h4>
                <div class="list-items-information">
                <h4>$${items.price}</h4>
                  <h4> ${items.size}</h4>
                </div></div>
                `;
        }
        else if(items.onSale == true && typeof items.price === 'string'){
            return `
                <div class="list-navigation-boxes">
                <img src ="${items.img}" class="items-images-size">
                <h5 class="week-sale">Sale: 07/24/21-07/31/21</h5>
                <h4>${items.brand}</h4>
                <h4>${items.item}</h4>
                <div class="list-items-information">
                <h4>${items.price}</h4>
                  <h4> ${items.size}</h4>
                </div></div>`;
        }
    })

    showProducts = showProducts.join("")
    listNavigation.innerHTML = showProducts;
}

function loadProduce(products){

    let showProducts = products.map(function(items){
        if(items.onSale == true && typeof items.price !== 'string'){
            return `
                    <div class="list-navigation-boxes">
                    <img src ="${items.img}" class="items-images-size">
                    <h5 class="week-sale">07/24/21 - 07/31/21</h5>
                    <h4>${items.item}</h4>
                    <div class="list-items-information">
                    <h4>$${items.price}</h4>
                      <h4> ${items.size}</h4>
                    </div></div>
                    `;
        }
        else if(items.onSale == true && typeof items.price === 'string'){
            return `
                    <div class="list-navigation-boxes">
                    <img src ="${items.img}" class="items-images-size">
                    <h5 class="week-sale">Sale: 07/24/21-07/31/21</h5>
                    <h4>${items.brand}</h4>
                    <h4>${items.item}</h4>
                    <div class="list-items-information">
                    <h4>${items.price}</h4>
                      <h4> ${items.size}</h4>
                    </div></div>`;
        }
    })

    showProducts = showProducts.join("")
    listNavigation.innerHTML = showProducts;
}

function loadDeli(products){

    let showProducts = products.map(function(items){
        if(items.onSale == true && typeof items.price !== 'string'){
            return `
                        <div class="list-navigation-boxes">
                        <img src ="${items.img}" class="items-images-size">
                        <h5 class="week-sale">07/24/21 - 07/31/21</h5>
                        <h4>${items.brand}</h4>
                        <h4>${items.item}</h4>
                        <div class="list-items-information">
                        <h4>$${items.price}</h4>
                          <h4> ${items.size}</h4>
                        </div></div>
                        `;
        }
        else if(items.onSale == true && typeof items.price === 'string'){
            return `
                        <div class="list-navigation-boxes">
                        <img src ="${items.img}" class="items-images-size">
                        <h5 class="week-sale">Sale: 07/24/21-07/31/21</h5>
                        <h4>${items.brand}</h4>
                        <h4>${items.item}</h4>
                        <div class="list-items-information">
                        <h4>${items.price}</h4>
                          <h4> ${items.size}</h4>
                        </div></div>`;
        }
    })

    showProducts = showProducts.join("")
    listNavigation.innerHTML = showProducts;
}



const nextIcon = '<img src="./right-arrow.svg" alt="right">';
const prevIcon = '<img src="./left-arrow.svg" alt="left" >';







function loadGrocery(products){

    let showProducts = products.map(function(items){
        if(items.onSale == true && typeof items.price !== 'string'){
            return `
            <div class="list-navigation-boxes">
            <img src ="${items.img}" class="items-images-size">
            <h5 class="week-sale">07/24/21 - 07/31/21</h5>
            <h4>${items.brand}</h4>
            <h4>${items.item}</h4>
            <div class="list-items-information">
              <h4> ${items.size}</h4>
              <h4>$${items.price}</h4>
            </div></div>
            `;
        }
        else if(items.onSale == true && typeof items.price === 'string'){
            return `
            <div class="list-navigation-boxes">
            <img src ="${items.img}" class="items-images-size">
            <h5 class="week-sale">Sale: 07/24/21-07/31/21</h5>
            <h4>${items.brand}</h4>
            <h4>${items.item}</h4>
            <div class="list-items-information">
              <h4> ${items.size}</h4>
              <h4>${items.price}</h4>
            </div></div>`;
        }
    })

    showProducts = showProducts.join("")
    listNavigation.innerHTML = showProducts;
}


var items = '';

grocery.map(function(item){
    items += '<div class="list-navigation-boxes"><img src ="${items.img}" class="items-images-size"><h5 class="week-sale">Sale: 07/24/21-07/31/21</h5><h4>${item.brand}</h4><h4>${item.item}</h4><div class="list-items-information"><h4>${item.price}</h4><h4> ${item.size}</h4></div></div>`;'
    console.log(item);
});
$('#slider_items').html(items);



/*
var items = '';
grocery.forEach(function(item){
    items += '<div class="item" style="background: url(\''+ item.img +'\'); background-size: 100% 100%;">   </div>'
    console.log(item);
});
$('#slider_items').html(items);


*/




$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:50,
    nav: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})