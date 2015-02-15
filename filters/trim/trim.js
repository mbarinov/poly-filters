PolymerExpressions.prototype.trim = function (input) {
    if(typeof input === 'string') {
        return input.trim();
    } else {
        return input;
    }
};