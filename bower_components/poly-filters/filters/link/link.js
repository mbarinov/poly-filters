PolymerExpressions.prototype.link = function (input, format) {
    var a = document.createElement('a');
    a.href = input;

    if (format === 'domain') {
        parts = a.hostname.split('.');
        if (parts[1]) {
            return parts.slice(1, parts.length).join('.');
        }
    } else if (format) {
        return a[format];
    } else {
        return a.host;
    }
};