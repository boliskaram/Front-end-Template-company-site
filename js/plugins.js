$(function () {
    // edit interval time for slider 
    $('.slideimg').carousel({
        interval: 5000,
        pause: true,
    });

    // to make nice scroll
    $("html").niceScroll({
        cursorcolor : "#777",
        background:"rgba(20,20,20,.7)",
        cursorborder:"0px solid black",
        cursorborderradius:15
    });   

    // edit interval time for product 
    $('.product').carousel({
        interval: 2000,
        pause: true,
    });

    // to show color option box 
    $(".gear-check").click(function () {
        $(".color-option").toggle(1000);
    });

    var colorLi = $(".color-option ul li");
    // to change color to color-box
    colorLi
        .eq(0).css("background", "#b6100d").end()
        .eq(1).css("background", "#94177d").end()
        .eq(2).css("background", "#020064").end()
        .eq(3).css("background", "#ffee00").end()
    
        colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

    // to toggle from front card to back card
    $(".employee2").on("mouseenter", function () {
        $(this).css("transform", "rotateY(180deg)");
    });

    // to toggle from back card to front card
    $(".employee2").on("mouseleave", function () {
        $(this).css("transform", "rotateY(0deg)");
    });

    // to sctoll up
    var scrollButton = $(".scroll");
    $(window).scroll(function () {
        $(this).scrollTop() > 500 ? scrollButton.show() : scrollButton.hide();
    });

    $(scrollButton).on("click", function () {
        $("HTML, body").animate({ "scrollTop": 0 }, 700);
    });
});

// before loading page 
$(window).load(function () {
    $("body").css("overflow", "auto")
    $(".loading ").fadeOut(3000,
        function () {
            $(this).remove();
        });
});
