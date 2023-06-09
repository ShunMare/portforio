$(document).ready(function() {
  $(".accordion-wrap").first().children().eq(1).show();
  $(".accordion-wrap").first().find(".accordion-header").addClass("accordion-gold");
  $(".accordion-wrap").first().find(".fa").addClass("rotate-fa");

  $(".accordion-wrap").on("click", function(){
    if($(this).children().eq(1).is(":visible")) {
      return;
    }
    $(this).children().eq(1).slideToggle(300);  
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".fa").toggleClass("rotate-fa");
    $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
  });
});
