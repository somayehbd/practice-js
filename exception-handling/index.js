// Assume the divide functions is defined in an external library.
function divide(a, b) {
    if (b == 0)
        throw new Error('b must be non-zero!');

    return a / b;
}

// We would like to use devide function in our application.
console.log(divide(10, 5));
console.log(divide(10, 2));
console.log(divide(10, 1));
console.log(divide(10, 10));
// console.log(divide(10, 0));

// We would like to handle the exception
try {
    console.log(divide(10, 0));
} catch (ex) {
    console.log('Some error has happened.');
}