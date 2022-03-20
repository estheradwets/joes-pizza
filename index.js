
// $("document").ready(function(){
//     alert("This works")
// });

(function($) {
    $('.summary').hide();
    $('.cdata-overlay').hide();
    $('.deliver').hide();
    $('.delivernot').hide();

});

 //Get inputs
 $("#finish").click(function () {
    let flavour =$("#flavour option:selected").val();
    let size = $("#psize option:selected").val();
    let crust = $("#pcrust option:selected").val();
    let topping = $("#ptopping option:selected").val();
    let number = $("#count").val();
    console.log(topping);

    //Function order
    let order = (f,s, c, t, n, total) => {
        return {f,s, c, t, n, total};
    };

 });

/* // THE FORMULA
// checkout price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "Chicken Hawaian":
                switch (size) {
                    case size = "SMALL":
                        price = 500;
                        if (crust === "CRISPY") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "STUFFED") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "GLUTTEN-FREE") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                        case size = "MEDIUM":
                            price = 800;
                            if (crust === "CRISPY") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "STUFFED") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "GLUTTEN-FREE") {
                                totalPrice = (price * number) + 200;
                            } else {
                                totalPrice = (price * number) + 300;
                            }
                            break;
                            case size = "LARGE":
                                price = 1200;
                                if (crust === "CRUSTY") {
                                    totalPrice = (price * number) + 100;
                                } else if (crust === "STUFFED") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "GLUTTEN-FREE") {
                                    totalPrice = (price * number) + 200;
                                } else {
                                    totalPrice = (price * number) + 300;
                                }
                                break;
                        }
                        break;
            case flavour = "Veg Feast":
                switch (size) {
                    case size = "SMALL":
                        price = 500;
                        if (crust === "CRISPY") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "STUFFED") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "GLUTTEN-FREE") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "MEDIUM":
                        price = 800;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "LARGE":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
            case flavour = "Meat Deluxe":
                switch (size) {
                    case size = "SMALL":
                        price = 500;
                        if (crust === "CRISPY") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "STUFFED") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "GLUTTEN-FREE") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "MEDIUM":
                        price = 800;
                        if (crust === "CRISPY") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "STUFFED") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "GLUTTEN-FREE") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                    case size = "LARGE":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                }
                break;
            }
            
        switch (topping) {
            case topping = "Roasted Brocolli":
                totalPrice = totalPrice + 100;
                break;
            case topping = "Roasted Fennel":
                totalPrice = totalPrice + 100;
                break;
            case topping = "Extra Cheese":
                totalPrice = totalPrice + 100;
                break;
            

        }
        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); 

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

    

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour Chosen is:   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust Chosen is:     "
            + newOrder.c + "<br>" + "Toppings Chosen:     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "The Total Price is KSH:  "
            + newOrder.total + "<br><br>").css('font-size', '30px');
    });

       //Deliver
       $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });
 */
    $("#submit").click(function(e){
        e.preventDefault()
        var name=$("#jina").val()
        var email=$("#email").val()
       var message=$("#message").val()

      alert(`${name} Your message has been submitted`)
      });
      
