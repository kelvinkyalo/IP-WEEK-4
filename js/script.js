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


 function pizzaPrice() {
     var pizzaSize = document.getElementById("pizzachoice").value;
     return parseInt(pizzaSize);
 }

 function crustPrice() {
     var pizzaCrust = document.getElementById("crustchoice").value;
     return parseInt(pizzaCrust);
 }

 function toppingPrice() {
     var pizzaTopping = document.getElementById("toppingchoice").value;
     return parseInt(pizzaTopping);
 }

 function number() {
     var noOfPizzas = document.getElementById("orderno").value;
     return parseInt(noOfPizzas);
 }


 function finalAmount() {
     var allPrice = (pizzaPrice() + crustPrice() + toppingPrice()) * (number());
     console.log(allPrice);
     alert("Your order " + number() + "pizzas @ " + allPrice + "Ksh.")
     event.preventDefault();
 }

 function Contact(first, last, third) {
     this.firstName = first;
     this.lastName = last;
     this.thirdName = third;
 }
 $(document).ready(function() {
     $("form#new-contact").submit(function(event) {
         event.preventDefault();
         var inputtedFirstName = $("input#new-first-name").val();
         var inputtedLastName = $("input#new-last-name").val();
         var inputtedThirdName = $("input#new-third-name").val();
         var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedThirdName);
         $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + " " + newContact.thirdName + "</span></li>");
         $("input#new-first-name").val("");
         $("input#new-last-name").val("");
         $("input#new-third-name").val("")
     });
 });

 function Contact(first, last, third) {
     this.firstName = first;
     this.lastName = last;
     this.thirdName = third;
 }
 Contact.prototype.fullName = function() { return this.firstName + " " + this.lastName + " " + this.thirdName; }