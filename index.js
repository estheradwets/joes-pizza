
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
    let order = (s, c, t, n, total) => {
        return {s, c, t, n, total};
    };

 });