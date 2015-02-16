PolymerExpressions.prototype.round = function (input) {
    if(typeof input === 'number' || Number(input) !== NaN) {
        return Number(input).toFixed(0);
    } else {
        return input;
    }
};