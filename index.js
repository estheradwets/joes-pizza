
/* $("document").ready(function(){
    alert("This works")
});
 */

//  BUILDING CONSTRUCTOR

  function Pizzeria(flavour,size,crust,topping,quantity,delivery){
      this.flavour = flavour
      this.size = size
      this.crust = crust
      this.topping = topping
      this.quantity = quantity
      this.delivery = delivery
  }
    //   BUILDING PROTOTYPE


    Pizzeria.prototype.totalcost = function(){
        let flavourPrice;
        let sizePrice;
        let crustPrice;
        let toppingPrice; 
        let numberOfPizza; 
        let deliveryPrice;

        

        // FOR FLAVOUR

        if (this.flavour==="chicken"){
            flavourPrice = 1000;
        }
    
        else if (this.flavour==="vegan"){
            flavourPrice = 800
        }
        else{
            flavourPrice = 500
        }

      console.log(flavourPrice)

    // FOR SIZE

        if (this.size==="larger"){
            sizePrice = 100;
        }
        else if (this.size==="regular"){
            sizePrice = 50
        }
        else{
            sizePrice = 10
        }
        console.log(sizePrice)

        // FOR CRUST
          
        if( this.crust==="Crunchy"){
            crustPrice = 150;
        }
        else if(this.crust ==="Thick"){
            crustPrice = 100
        }
        else{
           crustPrice = 10
        }
        console.log(crustPrice)

        // FOR TOPPING
  
        if( this.topping==="Brocolli"){
            toppingPrice = 100;
        }
        else if(this.topping ==="Roasted"){
            toppingPrice = 50
        }
        else{
           toppingPrice = 10
        }

        console.log(toppingPrice)

        // FOR Number
        if( this.quantity<=0){
            numberOfPizza = 0;
        }
        else{
            numberOfPizza = this.quantity   
         }
       console.log(numberOfPizza)

    //  FOR DELIVERY

    if( this.delivery=="yes"){
        deliveryPrice = 200;
    }
    else{
        deliveryPrice = 0  
     }
   console.log(deliveryPrice)


        let totalprice = (flavourPrice + sizePrice + crustPrice + toppingPrice)*numberOfPizza

        console.log(totalprice)

        let total = totalprice + deliveryPrice
        
        console.log(total)
        return total

    
        
    };

    // AT CHECKOUT
    
    $("#checkout").click(function(){
        let flavour =$("#flavour option:selected").val();
        let size = $("#psize option:selected").val();
        let crust = $("#pcrust option:selected").val();
        let topping = $("#ptopping option:selected").val();
        let enjoyment = $("#pquantity").val();
        let delivery = $("input[name = 'choice']:checked").val()
         let newOrder = new Pizzeria(flavour,size,crust,topping,enjoyment,delivery)
    
        console.log(newOrder.totalcost())
        
        // TABLE JS
        $(".table").append(
           "<tr>" +"<td>"+ flavour + "</td>"
            +"<td>"+ size + "</td>"
            +"<td>"+ crust+ "</td>"
            +"<td>"+ topping + "</td>"
            +"<td>"+ enjoyment + "</td>" 
            +"<td>" + newOrder.totalcost() + "</td>"
            +"</tr>"
        )

     });

     $("#youraddress").click(function(e)
     { e.preventDefault
         prompt("What's your location?")
         alert("Your Pizza is Enroute, we will deliver to your location in a few!")
     })

// ON SUBMIT BUTTON

$(document).ready(function(){
    $("#submit").click(function(e){
      e.preventDefault()
      var name = $("#jina").val();
      var email = $("#email").val();
      var message = $("#message").val();
      alert(`Hello ${name}. Your Email address is ${email}.Just to be sure your
      Message is : ${message}`)
    });

    
});