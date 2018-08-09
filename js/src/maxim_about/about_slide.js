// about_slide.js
(function($){
// infobox
var info_01 = $('.about_01');
var info_02 = $('.about_02');
var info_03 = $('.about_03');
// sloganbox
var sboxlogo = $('.slogan_logo');
var sboxtitle = $('.slogan_title');

var sbox_01 = $('.slogan_sbox_1');
var sbox_02 = $('.slogan_sbox_2');
var sbox_03 = $('.slogan_sbox_3');

var stext_01 = $('.sbox_text_01');
var stext_02 = $('.sbox_text_02');
var stext_03 = $('.sbox_text_03');

var sicon_01 = $('.sbox_icon_01');
var sicon_02 = $('.sbox_icon_02');
var sicon_03 = $('.sbox_icon_03');

// screenH
var screenH = $(window).outerHeight();

// infobox$
var in01Top = info_01.offset().top;
var in02Top = info_02.offset().top;
var in03Top = info_03.offset().top;
// sloganbox
var slogoTop = sboxlogo.offset().top;
var stitleTop = sboxtitle.offset().top;
var sbox01Top = sbox_01.offset().top;
var sbox02Top = sbox_02.offset().top;
var sbox03Top = sbox_03.offset().top;

var stext01Top = stext_01.offset().top;
var stext02Top = stext_02.offset().top;
var stext03Top = stext_03.offset().top;

var sicon01Top = sicon_01.offset().top;
var sicon02Top = sicon_02.offset().top;
var sicon03Top = sicon_03.offset().top;


$(window).on('scroll', function(){
  var nowScroll = $(this).scrollTop();

// infobox
if(nowScroll > in01Top-(screenH/3*2)){ info_01.addClass('active'); }
if(nowScroll > in02Top-(screenH)){ info_02.addClass('active'); }
if(nowScroll > in03Top-(screenH)){ info_03.addClass('active'); }
// sloganbox
if(nowScroll > slogoTop-(screenH)){ sboxlogo.addClass('active'); }
if(nowScroll > stitleTop-(screenH)){ sboxtitle.addClass('active'); }
if(nowScroll > sbox01Top-(screenH/2)){ sbox_01.addClass('active'); }
if(nowScroll > sbox02Top-(screenH)){ sbox_02.addClass('active'); }
if(nowScroll > sbox03Top-(screenH)){ sbox_03.addClass('active'); }

if(nowScroll > stext01Top-(screenH/2)){ stext_01.addClass('active'); }
if(nowScroll > stext02Top-(screenH)){ stext_02.addClass('active'); }
if(nowScroll > stext03Top-(screenH)){ stext_03.addClass('active'); }

if(nowScroll > sicon01Top-(screenH/2)){ sicon_01.addClass('active'); }
if(nowScroll > sicon02Top-(screenH)){ sicon_02.addClass('active'); }
if(nowScroll > sicon03Top-(screenH)){ sicon_03.addClass('active'); }



});



})(jQuery);