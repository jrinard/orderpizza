
//Constructor to build pizza

function Pizza(name, cheeseX, toppingx, pineapple, size) {
  this.name = name;
  this.cheese = cheeseX;
  this.topping = []; // placeholder to be assigned]
  this.fruit = pineapple;
  this.pizzaSize = size;
}

var pizza = new Pizza();

//Prototype to calculate price depending on size
Pizza.prototype.pizzaCost = function(topping) {
  var finalPrice = 0;
  var finalTop = 0;


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

  // var x = pizza.topping.length; console.log("top " + x);
  //   finalPrice +=  x;


    // var finalPrice = pizza.topping.length + 1; console.log("Toppings " + finalPrice);
    // console.log("extra toppings " + pizza.topping.length);

        for (var i = 1; i <= pizza.topping.length; i += 1) {
              var finalTopping = pizza.topping[i] + 50;console.log("Final topping");
            }

    // for (var i = 0; i < pizza.topping.length; i += 1)
    //   if (this.topping === "Pepperoni"){ console.log("pep1");
    //     finalPrice = finalPrice + .5;
    //   } else if (this.topping[1] === "sas"){console.log("sas1");
    //     finalPrice = finalPrice + .5;
    //   }

    // var count = 0;
    // for (var i = -1; i < pizza.topping.length; i += 1) {
    //     count += 1;
    //     console.log("Toppings " + count);
    //     if (count > 1){
    //       finalPrice = count + finalPrice;
    //     }
    //   }

  console.log("pizzaCost has been set to " + finalPrice);
  return finalPrice;
};


// !!! idea for cheese if they pick a topping then push a value to an array.
// Calculate the length and multiply to affect price.
// multiple selections with boxes - Transport Survey https://www.learnhowtoprogram.com/intro-to-programming/arrays-looping/gathering-data-with-checkboxes
// var extra = function toppings(price) {
//   var price = 0;
//   if (this.cheese === "extra") {
//     price += 1;  console.log(" Add 1 for extra " + price);
//   } else {
//   }return price;
//
// };

// user interface
$(document).ready(function(){
  $("form").submit(function(event){
  event.preventDefault();
  $("#results").empty();
  var extra = 0;

  var inputtedName = $("input#name").val();
  var cheeseAmount = $("input:radio[name=cheeseOption]:checked").val();
  var toppingChoice = $("input:radio[name=toppingOption]:checked").val();
  var veggieType = $("input:radio[name=veggie]:checked").val();
  var sizeSelection = $("#size").val();

  var newPizza = new Pizza(inputtedName,cheeseAmount, toppingChoice, veggieType, sizeSelection)



  // pizza.topping.forEach(function() {
  //   var x = 0;
  //   x +=1;
  //   console.log("result " + x);
  //
  // });

  var finalPrice = newPizza.pizzaCost();

  // call toppings?
  $("#results").show();
  $("#results").append("Order Received");
  $("#results").append("<br>" +  "Toppings Include: ");
  $("input:checkbox[name=topping]:checked").each(function(){
    pizza.topping.push($(this).val());
    // var finalToppingChoice = $(this).val();
    // $('#results').append(finalToppingChoice + " ");
  });
$("#results").append("<br>" + newPizza.name + " " + "your pizza will cost $" + finalPrice);



  }); // submit end
});// doc end
