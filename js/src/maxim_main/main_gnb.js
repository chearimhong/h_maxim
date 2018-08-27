(function($){
var winW = $(window).outerWidth();
var naviBtn = $('.navi');
var naviBox = $('#navibox');


  naviBtn.on('click',function(e){
  naviBox.stop().fadeToggle();
  $(this).children('button').toggleClass('active');

});

$(window).on('resize',function(e){
  var nowW = $(window).outerWidth();
  if(winW !== nowW){
    location.reloda();
  }
});


})(jQuery);

