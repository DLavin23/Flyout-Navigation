$(document).ready(function() {
  $('body').addClass('js');

  var $menu = $('#menu'),
    $menulink = $('.menu-link'),
    $wrapper = $('#wrapper');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $wrapper.toggleClass('active');
    return false;
	});
});