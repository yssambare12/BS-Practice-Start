setTimeout (function () {
    console.log("Timerr")
    }, 3000)
    
    function x(y){
        console.log("x");
        y();
    }
    
    x(function y(){
        console.log("y")
    });
    