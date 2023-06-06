function pageTopScroll() {
  if($(this).scrollTop() > 100){
    $('#page-top').fadeIn();
  }else{
    $('#page-top').fadeOut();
  }
}
