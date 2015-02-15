PolymerExpressions.prototype.round = function (input) {
    if(typeof input === 'number') {
        return input.toFixed(0);
    } else {
        return input;
    }
};