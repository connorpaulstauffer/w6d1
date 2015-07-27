(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(options) {
    Asteroids.MovingObject.call(this, options);
    this.radius = options.radius || Ship.RADIUS;
    this.color = options.color || Ship.COLOR;
    this.vel = [0, 0];
    // some random pos
  };

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Ship.RADIUS = 10;
  Ship.COLOR = "#994422";

})();
