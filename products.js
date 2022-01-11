





'use strict'


// first product window 
const first_product = document.querySelector('.first-product');


// blur background window 
const overlay = document.querySelector('.overlay');

// close button at first product window
const close_btn = document.querySelector('.close-button');

// learn more button on product 
const btnLearnMore = document.querySelectorAll('.learnmore-1');
console.log(btnLearnMore);



// with this event handler we display the window of first product 
for(let i = 0 ;i < btnLearnMore.length;i++){
    btnLearnMore[i].addEventListener('click',function(){
        first_product.classList.remove('hidden');
        overlay.classList.remove('hidden');
     });
}
// 1.
// with 1 and 2 event handler we close the first product window 
close_btn.addEventListener('click',function(){
    first_product.classList.add('hidden');
    overlay.classList.add('hidden');
});
// 2.
overlay.addEventListener('click', function(){
    first_product.classList.add('hidden');
    overlay.classList.add('hidden');
})




// Adding feature to a product using javascript

const firstProductContainer = document.querySelector('.col-4-1');

const thinkpadX1 = {
    name:'ThinkPad X1 Carbon Gen 8 (14”)',
    feacher:`<li>Designed on Intel vPro® platform</li>
    <li>Thin and lightweight</li>
    <li>Amazing display options</li>
    <li>Up to 19.5 hours of battery life</li>
    <li>Best-in-class connectivity, and rapid charging technology</li>
    <li>Advanced security options and enhanced audio</li>
    <li>Delivers the ultimate in premium performance</li>`,
    image:`images/Laptops/ThinkPadX1.png`
}
const displayFeatures = function (product){
    // first empty feature product 
    firstProductContainer.innerHTML = '';

    const html = `<div class = "img-4">
    <img src="${product.image}" alt="">
        </div>
            <div class = "title-4">
                <h3>${product.name}</h3>
            </div>
        <div class = "list-4">
        <ul list-style-type: square;>
            ${product.feacher};
        </ul>
        </div>
        <div class = "desk-btn">
            <div>
                <input  type="submit" value = "Learn More" id = "LearnMore" class = "learnmore-1">
                <input   type="submit" value = "Compare" id = "Compare" class = "compare-1">
            </div>
    </div>`;

    firstProductContainer.insertAdjacentHTML('afterbegin',html);
}

displayFeatures(thinkpadX1);

// Changing pictures when clicking in buttons 

$('.laptop-header-images').css('display','none');

const changePictures = function () {

    $('.laptop-header-images').slideToggle("slow");
    
}

$('#show-up').click(changePictures);

