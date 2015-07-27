var sum = function() {
  var args = [].slice.call(arguments);
  var sumArgs = 0;
  args.forEach(function(i) { sumArgs += i; });
  return sumArgs;
};

Function.prototype.myBind = function (obj) {
  var fn = this;
  var myBindArgs = [].slice.call(arguments);
  return function () {
    var applyArgs = [].slice.call(arguments);
    return fn.apply(obj, myBindArgs.slice(1).concat(applyArgs));
  };
};

var curriedSum = function(numArgs) {
  var numbers = [];
  var _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return sum.apply(null, numbers); // ?????
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

// var someSum = curriedSum(4);
// console.log(someSum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  var fn = this;
  var args = [];

  var _curry = function(arg) {
    args.push(arg);
    if(args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curry;
    }
  };

  return _curry;
};

// var s1 = sum.curry(4);
// console.log(s1(1)(2)(3)(4));
