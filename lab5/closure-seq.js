function seq(...funcs) {
    return function(x) {
        let result = x; 
        for (let i = 0; i < funcs.length; i++) {
            result = funcs[i](result);
        }
        return result;
    };
}

console.log(seq(x => x - 4, x => x * 11)(13));
console.log(seq(x => x / 2)(47));
console.log("");

