PolymerExpressions.prototype.arrayFilter = function(input, prop, value, test) {
    var result = [];

    if(input) {
        input.forEach(function (i) {
            if (i[prop].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                result.push(i);
            }
        });
    }

    if(value === undefined || value === "") {
        result = input;
    }

    if(test) {
        return JSON.stringify(result);
    } else {
        return result;
    }

};