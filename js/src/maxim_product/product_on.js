// product_on01.js
(function($){
var pro = $('.product_list');
var pro_li = pro.children('li');
var pro_on = $('.product_onbox');
var pro_narr = $('.product_narr');
var pro_wrap = $('.product_wrap');
var pro_narr_li = pro_narr.children('div');
var back_btn = $('.close_btn');
// ===============================================
var product = $('.product_list');
var proLi = product.children('li');
var probutton = proLi.children('button');
var onbox = $('.product_onbox');
var ul = onbox.children('ul');

// ===============================================
//상자 사이즈 설정
// var winH = $(window).outerHeight();
// var narrH = pro_narr.outerHeight();
// var myWrapH = winH - narrH;
// var proWrapH = pro_wrap.css({height:myWrapH});

// ===============================================
pro_li.on('click',function(e){
 e.preventDefault();
 var pro_on_i = $(this).index();

pro_on.show();
pro_narr.show();
pro_li.eq(pro_on_i).siblings('li').hide();
pro_li.css({transform:'translateY(0)'});
pro_narr_li.eq(pro_on_i).show();
pro_narr_li.eq(pro_on_i).siblings('div').hide();


});

back_btn.on('click',function(e){
e.preventDefault();

pro_on.hide();
pro_li.show();
pro_li.removeAttr('style');

});



// ==============================
probutton.on('click', function(e){
  e.preventDefault();
  var parent = $(this).parent().index();
ul.eq(parent).show();
ul.eq(parent).siblings('ul').hide();
});



})(jQuery);