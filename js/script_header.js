function headerScroll() {
  var headerHeight = $('header').height();
  if ($(window).scrollTop() < headerHeight + 200) {
    $('header').fadeIn();
  } else {
    $('header').fadeOut();
  }
}