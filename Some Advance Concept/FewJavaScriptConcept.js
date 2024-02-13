function foo(x) {
    if (typeof x === 'function') {
        return function() {
            return -x();
        };
    } else {
        return "can't be converted";
    }
}
console.log(foo(foo(function() { return 10; }))()); 
console.log(foo(foo(function() { return -5; }))());


    
