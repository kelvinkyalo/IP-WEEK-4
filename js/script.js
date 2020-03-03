 $(document).ready(function() {
     $("button#done").click(function() {
         $("ul#yohhh").prepend("Delivery charge =200ksh");
         prompt("Where should the delivery be made?");
         alert("delivery fee is 200ksh \n your order will be delivered to your location")
     });
     $("button#dtwo").click(function() {
         $("ul#yohhh").prepend("No Delivery charge =0ksh");
     });
 });


 function getSizeCost() {
     var selectedSize = document.getElementById("pizzasize").value;
     return parseInt(selectedSize);
 }

 function getCrustCost() {
     var selectedCrust = document.getElementById("crusttype").value;
     return parseInt(selectedCrust);
 }

 function getToppingCost() {
     var selectedTopping = document.getElementById("toppingone").value;
     return parseInt(selectedTopping);
 }

 function getNumber() {
     var selectedNumber = document.getElementById("orderno").value;
     return parseInt(selectedNumber);
 }


 function calctotalPrice(e) {
     event.preventDefault();
     var totalPrice = (getSizeCost() + getCrustCost() + getToppingCost()) * (getNumber());
     console.log(totalPrice);
     alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice + ".")
 }
 $(document).ready(function() {
     $("#delivery").submit(function() {
         var name = $("input#name").val();
         var number = $("input#number").val();
         var location = $("input#location").val();
         alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the pizzeria.");

     });
 });