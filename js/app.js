(function ($) {

$(function () {

  if ($('#menu a').length) {
  
    $('#menu a').click(function () {
      $('body').toggleClass('menu-active');
    });
 
  }


});


})(jQuery);
