PolymerExpressions.prototype.arrayFilter = function(input, prop, value, test) {
    var result = [];

    if(value === undefined || value === "") {
        return input;
    }

    if(input) {
        input.forEach(function (i) {
            if (i[prop].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                result.push(i);
            }
        });
    }


    if(test) {
        return JSON.stringify(result);
    } else {
        return result;
    }

};