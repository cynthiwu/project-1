$(document).ready(function() {

//Call to get local storage. 




function deleteCard() {
    $(this).parent().parent().parent().remove();
}

function createCard() {
    storage.each(function(index) {


    })
}













$(".card-close").on("click", deleteCard);


});