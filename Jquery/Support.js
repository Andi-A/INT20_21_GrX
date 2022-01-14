
'use strict'


const login = function(){
            
    var email = $("#email");
    var name = $("#name");
    var surname = $("#surname");

    if(email.val() == " "){
        alert('Please enter email!');

    }else if(name.val() == '' ){

        alert('Please enter name!');

    }else if(surname.val() == ''){

        alert('Please enter surname');
        
    }
}


// reseting data when reset button is clicked 
const clearFunction = function(){
            
    $("#email").val("");

    $("#name").val("");
    
    $("#surname").val("");
    
}

const numberFunc = function(){

    alert('Phone number must contain pre fix')
}

$("#phone").click(numberFunc);

$("#reset-btn").click(clearFunction);

$("#textarea").click(login);

$("#send-message").click(function() {
    alert("Thank you for your feed back we will respond you soon :) ");
})










$("#send-message").click(function () {
    alert('Thank You for contacting us. We will respond your feedback soon :)');
})



