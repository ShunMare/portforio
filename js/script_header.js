function headerScroll() {
  var headerHeight = $('header').height();
  if ($(window).scrollTop() < headerHeight) {
    $('header').fadeIn();
  } else {
    $('header').fadeOut();
  }
}