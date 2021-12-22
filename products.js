





'use strict'




// first product window 
const first_product = document.querySelector('.first-product');

// blur background window 
const overlay = document.querySelector('.overlay');

// close button at first product window
const close_btn = document.querySelector('.close-button');
// learn more button on product 
const btnLearnMore = document.getElementById('LearnMore');



// with this event handler we display the window of first product 
btnLearnMore.addEventListener('click',function(){
   first_product.classList.remove('hidden');
   overlay.classList.remove('hidden');

});

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

