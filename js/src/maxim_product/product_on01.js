// product_on01.js
(function($){
var pro = $('.product_list');
var pro_li = pro.children('li');
var pro_on = $('.product_onbox');
var pro_narr = $('.product_narr');
var pro_narr_li = pro_narr.children('div');
var back_btn = $('.close_btn');


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



})(jQuery);