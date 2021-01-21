$(document).ready(function() {
    $('img').click(function(){
        var temp = $(this).attr('src');
        var alt = $(this).attr('alt_src');
        $(this).attr({
            src: alt,
            alt_src: temp
        });
    })
})