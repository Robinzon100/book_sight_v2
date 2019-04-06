//=== === === === === ===        === === === === === ===//
//=== === === === === === JQUERY === === === === === ===//
//=== === === === === ===        === === === === === ===//

 
//=== === === HEADER ANIMATION
// $('#toggleMenuBtn').click(function () {
//     $(this).toggleClass('active');
//     $('#overlay').toggleClass('open');
// });


// Toggle animation

$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("ul").toggleClass("showing");
    });
});


$(document).ready(function () {
    $(".menu-icon").click(function () {
        $(this).toggleClass("is-active");
    });
});

// FADE ANIMATION
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
        $('.navigation').addClass('white');
        $('.navigation__logo').css('width', '70%');
    } else {
        $('.navigation').removeClass('white');
        $('.navigation__logo').css('width', '80%');
    }
})


$(document).ready(function () {

    let scrollLink = $('#scrollLink');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});