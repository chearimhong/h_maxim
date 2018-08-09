// main_base.js
(function($){
var hdtext_01 = $('.text_box01');
var hdtext_02 = $('.text_box02');
var adtext = $('.adbox_text01');
var articletext = $('.article_text');
var asidebox = $('.aside_text_box')
var asidetext = $('.aside_text');
var sidebanner = $('.side_banner_text');
var sidetext = $('.side_text');

var screenH = $(window).outerHeight();

var hdTop = hdtext_01.offset().top;
var hddTop = hdtext_02.offset().top;
var adTop = adtext.offset().top;
var atTop = articletext.offset().top;
var asbTop = asidebox.offset().top;
var asTop = asidetext.offset().top;
var bannerTop = sidebanner.offset().top;
var sdTop = sidetext.offset().top;


  hdtext_01.addClass('active');
  hdtext_02.addClass('active');
$(window).on('scroll',function(){
  var nowScroll = $(this).scrollTop();
  // console.log(nowScroll);
  if(nowScroll > adTop-(screenH/3*2)){ adtext.addClass('active'); }
  if(nowScroll > atTop-(screenH/2)){ articletext.addClass('active'); }
  if(nowScroll > asbTop-(screenH/2)){ asidebox.addClass('active');}
  if(nowScroll > asTop-(screenH/2)){ asidetext.addClass('active');}
  if(nowScroll > bannerTop-(screenH/2)){ sidebanner.addClass('active');}
  if(nowScroll > sdTop-(screenH/2)){ sidetext.addClass('active');}


});

})(jQuery);