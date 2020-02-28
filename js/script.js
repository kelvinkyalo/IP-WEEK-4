$(document).ready(function() {
    $("button#one").click(function() {
        $("ul#yoh").prepend("<li>Large(30cm)  __ __1150ksh</li>");

    });

    $("button#two").click(function() {
        $("ul#yohh").prepend("<li>Medium (23cm)  __ __800ksh</li>");

    });


    $("button#three").click(function() {
        $("ul#yohhh").prepend("<li>Small (19cm)  __ __600ksh</li>");
    });

});