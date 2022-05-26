$(window).click(function (e) {

    if ($(".navbar-collapse").hasClass("show")) {
        $('.navbar-collapse').removeClass("show");
        e.preventDefault();
    }
});

$('.navbar-collapse').click(function (event) {
    event.stopPropagation();
});
