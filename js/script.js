$(document).on("scroll", function(){
    if($(document).scrollTop() > 86)
    {
      $("#navbar").addClass("sticky");
      $("#nav-logo").addClass("color-white");
      $(".nav-custom-link").addClass("color-white");
      $(".navbar-btn").addClass("nav-btn-icon");
    }
    else
    {
        $("#navbar").removeClass("sticky");
        $("#nav-logo").removeClass("color-white");
        $(".nav-custom-link").removeClass("color-white");
        $(".navbar-btn").removeClass("nav-btn-icon");
    }

    // scroll-up button show/hide script
    $(window).scroll(function () {
      if (this.scrollY > 500) {
        $('.scroll-btn').addClass("show");
        } 
        else {
            $('.scroll-btn').removeClass("show");
        }
    });

    $('.scroll-btn').click(function () {
        $(window).scrollTop(0);
    });

});

