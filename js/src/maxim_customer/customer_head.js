// customer_head.js
(function($){

var h2title = $('#headbox>h2');


// screenH
var screenH = $(window).outerHeight();

var h2tTop = h2title.offset().top;

h2title.addClass('active');

$(window).on('scroll', function(){
  var nowScroll = $(this).scrollTop();




});




})(jQuery);