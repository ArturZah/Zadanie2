$(document).ready(function () {
    $('#dots').mouseenter(() => {
        $('#dots').addClass('rotate');
    })

    $('#dots').mouseleave(() => {
        $('#dots').removeClass('rotate');
    })

    mousemovemethod = (e) => {
        $('#dots').css('right', (e.pageX - 30));
    }

    $('.container').mousemove(mousemovemethod);
});
