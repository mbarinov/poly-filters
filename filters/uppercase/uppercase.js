PolymerExpressions.prototype.uppercase = function (input) {
    console.log(input, typeof input);
    if(typeof input === 'string') {
        return input.toUpperCase();
    } else {
        return input;
    }
};