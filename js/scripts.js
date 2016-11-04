//Back End
//Constructor to build pizza
function Pizza(name, cheese, toppings, size) {
  this.name = name;
  this.cheese = cheese;
  this.toppings = toppings;
  this.pizzaSize = size;
}

var pizza = new Pizza();
//Prototype to calculate price depending on size and addons
Pizza.prototype.pizzaCost = function() {
  var finalPrice = 0;
  if (this.pizzaSize === "small"){
    finalPrice += 8;
  } else if (this.pizzaSize === "medium"){
    finalPrice += 10;
  } else if (this.pizzaSize === "large") {
    finalPrice += 12;
  }
  if (this.cheese === "regular"){
    finalPrice = finalPrice + 0;
  } else if (this.cheese === "extra"){
    finalPrice = finalPrice + 1;
  }
  // console.log("pizzaCost has been set to " + finalPrice);
  return finalPrice;
};

// user interface
$(document).ready(function(){
  $("form").submit(function(event){
  event.preventDefault();
  $("#results").empty();
  var extra = 0;
  var inputtedName = $("input#name").val();
  var cheeseAmount = $("input:radio[name=cheeseOption]:checked").val();
  var toppingChoice = $("input:radio[name=toppingOption]:checked").val();
  var sizeSelection = $("#size").val();
  var newPizza = new Pizza(inputtedName, cheeseAmount, toppingChoice, sizeSelection)
  var finalPrice = newPizza.pizzaCost();

  $("#results").show();
  $("#results").append("<h4>" +"Order Received for " + newPizza.name + "</h4>");

  $("#results").append("<br>" + "<strong>" +"Toppings: ");
  $("input:checkbox[name=topping]:checked").each(function(){
    // pizza.topping.push($(this).val());
  var finalToppingChoice = $(this).val();
  $('#results').append(finalToppingChoice + " ");
  });

  $("#results").append("<br><br>" + "<strong>" + "Cheese: " + "</strong>" + cheeseAmount);
  $("#results").append("<br><br>" + "<strong>" + "Size: " + "</strong>" + sizeSelection);
  $("#results").append("<br><br>" + "<strong>" + "Total $" + "</strong>" + finalPrice);
  }); // submit end
});// doc end
