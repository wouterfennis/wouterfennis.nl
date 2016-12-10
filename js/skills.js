"use strict";
jQuery(document).ready(function () {

    console.log("Hey, toch even naar de source code kijken?");
    console.log("Kijk anders op mijn Github voor meer code van mij");
    console.log("Github link HIER");

    $(window).scroll(function () {
        var skillsTop = $('#skills').offset().top;
        var skillsHeight = ($('#skills').outerHeight() / 2);
        var windowHeight = $(window).height();
        var currentPosition = $(this).scrollTop();
        
        if (currentPosition > (skillsTop + skillsHeight - windowHeight)) {
            animateSkills();
        }
    });

});

function animateSkills() {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
}
