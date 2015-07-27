var sum = function() {
  var args = [].slice.call(arguments);
  var sumArgs = 0;
  args.forEach(function(i) { sumArgs += i; });
  return sumArgs;
};

console.log(sum(3, 4, 5));
