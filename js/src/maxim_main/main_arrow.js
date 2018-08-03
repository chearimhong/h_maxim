// main_arrow.js
(function($){
  
var adbox = $('#adbox').offset().top;
var arrow_btn = $('.arrow');
var winW =$(window).outerWidth();

arrow_btn.on('click',function(e){
  e.preventDefault();
$('html, body').animate({scrollTop:adbox});
});




})(jQuery);