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

  $('#main').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  $(window).scroll(function () { 
    if($(this).scrollTop() > 100){
      $('#page-top').fadeIn();
    }else{
      $('#page-top').fadeOut();
    }
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

  $(window).scroll(function () { 
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () { 
      const position = $(this).offset().top;
      if(scrollAmount > position - windowHeight + 100){
        $(this).addClass('fade-in');
      }
    });
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