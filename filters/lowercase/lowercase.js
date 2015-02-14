PolymerExpressions.prototype.lowercase = function (input) {
    if (typeof input === "string") {
        return input.toLowerCase();
    } else {
        return input;
    }
};