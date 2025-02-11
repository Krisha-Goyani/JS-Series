 function outer() {
    var outerVar = 'outer'; //*local variable

    function inner(){
        var innerVar = 'inner';
        console.log(`inner ${innerVar}`);        
    }
    return inner;
}

var result = outer();
console.log(result);
result();

//!js don't allow class inside class
