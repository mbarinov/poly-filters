PolymerExpressions.prototype.round = function (input) {
    if(!isNaN(Number(input))) {
        return Number(input).toFixed(0);
    } else {
        return input;
    }
};