var sum = function() {
  var args = [].slice.call(arguments);
  var sumArgs = 0;
  args.forEach(function(i) { sumArgs += i; });
  return sumArgs;
};

// console.log(sum(3, 4, 5));

Function.prototype.myBind = function (obj) {
  var fn = this;
  var myBindArgs = [].slice.call(arguments);
  return function () {
    var applyArgs = [].slice.call(arguments);
    return fn.apply(obj, myBindArgs.slice(1).concat(applyArgs));
  };
};
