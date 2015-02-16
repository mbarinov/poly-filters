PolymerExpressions.prototype.uppercase = function (input) {
    if(typeof input === 'string') {
        return input.toUpperCase();
    } else {
        return input;
    }
};