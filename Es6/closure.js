var aa = " global "

function outer(){
    var a = "outer function"
    console.log(a);

    function inner(){
        var b = "inner function"
        console.log(b);
    }
    inner();
}
outer();