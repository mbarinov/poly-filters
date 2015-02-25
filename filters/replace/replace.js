PolymerExpressions.prototype.replace = function (input, oldValue, newValue) {

  if(typeof input === "string") {
    return input.replace(oldValue, newValue);
  } else {
    return input;
  }

};