$(document).ready(function(){
 $('#testbtn').click(function () {
    //alert('Hello guys');
    $('.box').fadeToggle(1000);
 });
 $('.box').mouseenter(function() {
    $(this).css({"background-color": "green"});
 });
 $('.box').mouseleave(function() {
    $(this).css({"background-color": "red"});
 });


$('#name').blur(function() {
    var userInput = $(this).val();
    if(userInput. length < 3){
       $('.error').show() 
    }
})  
 });
