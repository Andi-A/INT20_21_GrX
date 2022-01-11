




// first hide news 
const hideLastNews = () => $('.last-news-rows').css('display','none');
hideLastNews();

// storing show news button container

const showNewsContainerButton = document.querySelector('.show-more-button');
console.log(showNewsContainerButton)
showNewsContainerButton.setAttribute('style','display: flex; justify-content: center; margin:0 0 20px 0');

console.log(showNewsContainerButton.innerHTML);


const addAttribute = function (element,atrribute, value) {
    element.setAttribute(atrribute,value);
}

addAttribute(document.querySelector('.first-1'), 'id','show-more-button-text');

console.log(document.querySelector('.first-1'));


const showMoreNews = function() {
    
    if(document.querySelector('#show-more-button-text').textContent == 'Show Less News...'){

        document.querySelector('#show-more-button-text').textContent = "Show More News...";
        $('.last-news-rows').css('display','none');
        console.log('If statement executed ');
        return;
    }
    $('.last-news-rows').fadeIn();
    $('.last-news-rows').fadeIn("slow");
    $('.last-news-rows').fadeIn("3000");
    document.querySelector('#show-more-button-text').textContent = "Show Less News...";

}
$('#show-more-button').click(showMoreNews);

