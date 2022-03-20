
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

// THE FORMULA
// checkout price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "Chicken Hawaian":
                switch (size) {
                    case size = "SMALL":
                        price = 500;
                        if (crust === "CRISPY") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "STUFFED") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "GLUTTEN-FREE") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 220;
                        }
                        break;
                        case size = "MEDIUM":
                            price = 800;
                            if (crust === "CRISPY") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "STUFFED") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "GLUTTEN-FREE") {
                                totalPrice = (price * number) + 200;
                            } else {
                                totalPrice = (price * number) + 220;
                            }
                            break;
                            case size = "LARGE":
                                price = 1200;
                                if (crust === "CRUSTY") {
                                    totalPrice = (price * number) + 120;
                                } else if (crust === "STUFFED") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "GLUTTEN-FREE") {
                                    totalPrice = (price * number) + 200;
                                } else {
                                    totalPrice = (price * number) + 220;
                                }
                                break;
                        }