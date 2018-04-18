'use strict';

$(function () {
    $(".ui.accordion").accordion();
    $(".ui.dropdown").dropdown();

    $(".hamburger").on("click", function () {
        if ("show" == $(this).data("name")) {
            $(".toc").animate({
                width: "100px"
            }, 350);

            $(".logo").animate({
                width: "100px"
            }, 350);

            $(".logo img").transition("scale").attr("src", "img/thumblogo.png");
            $(".ui .dropdown").dropdown({
                transition: "fade up",
                on: "hover"
            });

            $(".logoImg").transition('jiggle')

            $(this).data("name", "hide");
        } else {
            $(".toc").animate({
                width: "250px"
            }, 350);
            $(".logo").animate({
                width: "250px"
            }, 350);

            $(".logo img").attr("src", "img/logo.png");
            $(".ui.accordion").accordion();
            $(".logoImg").transition("tada");

            $(this).data("name", "show");

        }
    });

    $(".launch").click(function() {
        $("#toc").sidebar("attach events", ".launch.button, .view-ui, .launch.item");
    });

});
