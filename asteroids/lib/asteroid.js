(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function(options) {
    var randomVel = (Math.random() * 5 * 2) - 5;
    options.color = options.color || Asteroid.COLOR;
    options.radius = options.radius || Asteroid.RADIUS;
    options.vel = Asteroids.Util.randomVec(randomVel);
    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.prototype.collideWith = function(otherObject) {

  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#666666";
  Asteroid.RADIUS = 40;

})();
