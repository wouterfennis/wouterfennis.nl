"use strict";

var animationStarted = false;

jQuery(document).ready(function () {

    console.log("Hey, toch even naar de source code kijken?");
    console.log("Kijk anders op mijn GitHub dat leest een stuk prettiger!");
    console.log("https://github.com/wouterfennis/wouterfennis.nl");
    console.log("Daar vindt je ook mijn andere projecten");

    $(window).scroll(function () {
        var skillsTop = $('#skills').offset().top;
        var skillsHeight = ($('#skills').outerHeight() / 2);
        var windowHeight = $(window).height();
        var currentPosition = $(this).scrollTop();

        if (currentPosition > (skillsTop + skillsHeight - windowHeight) && !animationStarted) {
            animationStarted = true;
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
    jQuery('.skill-list').each(function () {
        jQuery(this).find('.skill-name').fadeIn(3000);
    });
}
