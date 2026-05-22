function calculate(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

const sumResult = calculate(10, 5, add);
console.log(sumResult); 

const diffResult = calculate(10, 5, subtract);
console.log(diffResult); 
