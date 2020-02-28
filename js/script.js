$(document).ready(function() {
    $("button#one").click(function() {
        $("ul#yoh").prepend("<li>Large(30cm)  price =1150ksh + /- </li>");

    });

    $("button#two").click(function() {
        $("ul#yohh").prepend("<li>Medium (23cm)  price =800ksh + /- </li>");

    });


    $("button#three").click(function() {
        $("ul#yohhh").prepend("<li>Small (19cm)  price =600ksh + /- </li>");
    });


    $("button#cone").click(function() {
        $("ul#yohhh").prepend("<li>Crispy  price =150ksh + /- </li>");
    });
    $("button#ctwo").click(function() {
        $("ul#yohhh").prepend("<li>Stuffed  price =150ksh + /- </li>");
    });
    $("button#cthree").click(function() {
        $("ul#yohhh").prepend("<li>Gluten-free  price =150ksh + /- </li>");
    });



    $("button#tone").click(function() {
        $("ul#yohhh").prepend("<li>Topping large   price =2150ksh + /- </li>");
    });
    $("button#ttwo").click(function() {
        $("ul#yohhh").prepend("<li>Topping Medium   price =150ksh + /- </li>");
    });
    $("button#tthree").click(function() {
        $("ul#yohhh").prepend("<li>Topping small  price =100ksh + /- </li>");
    });


});