(function($){
  
var infobox = $('#communitybox').offset().top;
var arrow_btn = $('.arrow');
var winW =$(window).outerWidth();

arrow_btn.on('click',function(e){
  e.preventDefault();
$('html, body').animate({scrollTop:infobox});
});




})(jQuery);