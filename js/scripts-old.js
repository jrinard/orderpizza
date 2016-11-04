
//Constructor to build pizza

function Pizza(name, cheeseX, pepperoni, pineapple, size) {
  this.name = name;
  this.cheese = cheeseX;
  this.meat = pepperoni; // placeholder to be assigned]
  this.fruit = pineapple;
  this.pizzaSize = size;
}

var pizza = new Pizza();

//Prototype to calculate price depending on size
Pizza.prototype.pizzaCost = function() {
  var finalPrice = 0;
  if (this.pizzaSize === "small"){
    finalPrice += 8;
  } else if (this.pizzaSize === "medium"){
    finalPrice += 10;
  } else if (this.pizzaSize === "large") {
    finalPrice += 12;
  }
  console.log("pizzaCost has been set to " + finalPrice);
  return finalPrice;
};

// !!! idea for cheese if they pick a topping then push a value to an array.
// Calculate the length and multiply to affect price.
// multiple selections with boxes - Transport Survey https://www.learnhowtoprogram.com/intro-to-programming/arrays-looping/gathering-data-with-checkboxes
var extra = function toppings(price) {
  var price = 0;
  if (this.cheese === "extra") {
    price += 1;  console.log(" Add 1 for extra " + price);
  } else {
  }return price;

};

// user interface

$(document).ready(function(){
  $("form").submit(function(event){
  event.preventDefault();

  var extra = 0;

  var inputtedName = $("input#name").val();
  var cheeseAmount = $("input:radio[name=cheeseOption]:checked").val();
  var meatType = $("input:radio[name=meat]:checked").val();
  var veggieType = $("input:radio[name=veggie]:checked").val();
  var sizeSelection = $("#size").val();

  var newPizza = new Pizza(inputtedName,cheeseAmount, meatType, veggieType, sizeSelection)

  var finalPrice = newPizza.pizzaCost();

  // call toppings?
  $("#results").show();
  $("form#results").text(newPizza.name);
  $("#results").text("Your Pizza will cost $" + finalPrice);



  }); // submit end
});// doc end
