$("img.lazyload").lazyload();

$(function(){
  $('.more').on('mouseover', function(){
    $(this).animate({
      // opacity: 0.5,
      marginLeft: 10,
    }, 200);
  });
  $('.more').on('mouseout', function(){
    $(this).animate({
      // opacity: 1.0,
      marginLeft: 0,
    }, 200);
  });

  $('#MainWrapper').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  $(window).scroll(function () { 
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () { 
      const position = $(this).offset().top;
      if(scrollAmount > position - windowHeight + 200){
        $(this).addClass('fade-in');
      }
    });
    headerScroll();
    pageTopScroll();
  });

  $(window).on('load resize', function() {
    var headerHeight = $('header').outerHeight();
    $('main').css('margin-top', headerHeight + 300 + 'px');
  });

  $('a[href^="#"]').click(function () { 
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if(href == '#'){
      $target = $('html');
    }else{
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({'scrollTop':position}, speed, 'swing');
    return false;    
  });

  $('#hobby-section img').click(function () { 
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);    
    $('.modal').fadeIn();
    return false;
  });

  $('.close-btn').click(function () { 
    $('.modal').fadeOut();
    return false;
  });
});