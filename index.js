
/* $("document").ready(function(){
    alert("This works")
});
 */

//  BUILDING CONSTRUCTOR

  function Pizzeria(flavour,size,crust,topping,quantity){
      this.flavour = flavour
      this.size = size
      this.crust = crust
      this.topping = topping
      
  }
    //   BUILDING PROTOTYPE


    Pizzeria.prototype.totalcost = function(){
        let flavourprice;
        let sizeprice;
        let crustprice;
        let toppingprice;  
        

        // FOR FLAVOUR

        if (this.flavour==="chicken"){
            flavourprice = 1000;
        }
    
        else if (this.flavour==="vegan"){
            flavourprice = 800
        }
        else{
            flavourprice = 500
        }

      console.log(flavourprice)

    // FOR SIZE

        if (this.size==="larger"){
            sizeprice = 100;
        }
        else if (this.size==="regular"){
            sizeprice = 50
        }
        else{
            sizeprice = 10
        }
        console.log(sizeprice)

        // FOR CRUST
          
        if( this.crust==="thick"){
            crustprice = 150;
        }
        else if(this.crust ==="thin"){
            crustprice = 100
        }
        else{
           crustprice = 10
        }
        console.log(crustprice)

        // FOR TOPPING
  
        if( this.topping==="best"){
            toppingprice = 100;
        }
        else if(this.topping ==="better"){
            toppingprice = 50
        }
        else{
           toppingprice = 10
        }
        console.log(toppingprice)

        let totalprice = (flavourprice + sizeprice + crustprice + toppingprice)*parseInt(quantity)
        console.log(totalprice)
        // let total = parseInt(quantity)*totalprice
        // console.log(total)
        return totalprice
        
    };
    
    // AT CHECKOUT
    
    $("#checkout").click(function(){
        let flavour =$("#flavour option:selected").val();
        let size = $("#psize option:selected").val();
        let crust = $("#pcrust option:selected").val();
        let topping = $("#ptopping option:selected").val();
         let newOrder = new Pizzeria(flavour,size,crust,topping)
    
         console.log(newOrder.totalcost())
    
     });


     /*  $(".table").hide();
      $(".additional-buttons").hide();
      $(".additional-info").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".additional-info h4").hide();

      $('.btn.order').click(function() {
        var sizeOfPizza = $("#psize option:selected").val();
        var toppingsOfPizza = $("#ptopping option:selected").val();
        var crustOfPizza = $("#pcrust option:selected").val();
        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        var order = 1;
        var grandTotal = 0;
    
        $(".table").show();
        $(".additional-buttons").show();
        $(".btn.order").hide();
    
        $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
        $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
        $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
        $("#total").html(total);

    


 */










 /* $("#submit").click(function(e){
    e.preventDefault()
    var name=$("#jina").val()
    var email=$("#email").val()
   var message=$("#message").val()

  alert(`${name} Your message has been submitted`)
  });
   */