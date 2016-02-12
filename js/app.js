(function ($) {

$(function () {

  if ($('#hamburger a').length) {

 	$('body').click(function (e) {
 	  if (e.target === $('#share > a')[0]) {
 	    $('body').toggleClass('share-active');
 	  }
 	  else if ($('body').hasClass('share-active')) {
 	    $('body').removeClass('share-active');
 	  }
 	  

 	  if (e.target === $('#hamburger a')[0]) {
 	    $('body').toggleClass('menu-active');
 	  }
 	  else if ($('body').hasClass('menu-active')) {
 	    $('body').removeClass('menu-active');
 	  }
 	});
 
  }


});


})(jQuery);
