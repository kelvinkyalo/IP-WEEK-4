$(document).ready(function() {
    $("button#one").click(function() {
        $("ul#yoh").prepend("Large(30cm) <span>price =1150ksh + /-</span>");

    });

    $("button#two").click(function() {
        $("ul#yohh").prepend("Medium (23cm)  price =800ksh + /- ");

    });


    $("button#three").click(function() {
        $("ul#yohhh").prepend("Small (19cm)  price =600ksh + /- ");
    });


    $("button#cone").click(function() {
        $("ul#yohhh").prepend("Crispy  price =150ksh + /- ");
    });
    $("button#ctwo").click(function() {
        $("ul#yohhh").prepend("Stuffed  price =150ksh + /- ");
    });
    $("button#cthree").click(function() {
        $("ul#yohhh").prepend("Gluten-free  price =150ksh + /- ");
    });



    $("button#tone").click(function() {
        $("ul#yohhh").prepend("Topping large   price =2150ksh + /- ");
    });
    $("button#ttwo").click(function() {
        $("ul#yohhh").prepend("Topping Medium   price =150ksh + /- ");
    });
    $("button#tthree").click(function() {
        $("ul#yohhh").prepend("Topping small  price =100ksh + /- ");
    });

    $("button#done").click(function() {
        $("ul#yohhh").prepend("Delivery charge =200ksh");
        prompt("Where should the delivery be made?");
        alert("your order will be delivered to your location")
    });
    $("button#dtwo").click(function() {
        $("ul#yohhh").prepend("No Delivery charge =0ksh");
    });


});