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
     alert("Your order " + getNumber() + "pizzas @ " + totalPrice + "Ksh.")
 }