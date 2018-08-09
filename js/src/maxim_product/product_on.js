// product_on.js
(function($){
var product = $('.product_list');
var proLi = product.children('li');
var probutton = proLi.children('button');
var onbox = $('.product_onbox');
var ul = onbox.children('ul');

probutton.on('click', function(e){
  e.preventDefault();
  var parent = $(this).parent().index();
ul.eq(parent).show();
ul.eq(parent).siblings().hide();
});

}) (jQuery);