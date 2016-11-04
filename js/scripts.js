
//Constructor to build pizza

function Pizza(cheese, pepperoni, pineapple, size) {
  this.cheese = ["regular","extra"];
  this.meat = pepperoni; // placeholder to be assigned]
  this.fruit = pineapple;
  this.pizzaSize = size;
}

var pizza = new Pizza();

//Prototype to calculate price depending on size
Pizza.prototype.pizzaCost = function() {
  var price = 0;
  if (this.pizzaSize === "small"){
    price += 8;
  } else if (this.pizzaSize === "medium"){
    price += 10;
  } else if (this.pizzaSize === "large") {
    price += 12;
  }
  console.log("pizzaCost has been set to " + price);
  return price;
};

// !!! idea for cheese if they pick a topping then push a value to an array.
//Calculate the length and multiply to affect price.
// multiple selections with boxes - Transport Survey https://www.learnhowtoprogram.com/intro-to-programming/arrays-looping/gathering-data-with-checkboxes
// Pizza.prototype.cheese = function() {
//   if (this.cheese === "extra") {
//     price += 1;  console.log(" Add 1 for extra " + price);
//   } else {
//     return price;
//   }
// };


// user interface

$(document).ready(function(){
  $("form").submit(function(event){
  event.preventDefault();

  var cheeseAmount = $("input:radio[name=extraCheese]:checked").val();
  var meatType = $("input:radio[name=meat]:checked").val();
  var veggieType = $("input:radio[name=veggie]:checked").val();
  var sizeSelection = $("#size").val();

  var newPizza = new Pizza(cheeseAmount, meatType, veggieType, sizeSelection)

  var finalPrice = newPizza.pizzaCost();

  $("#results").text("Your Pizza will cost $" + finalPrice);
  $("#results").show();


  }); // submit end
});// doc end
