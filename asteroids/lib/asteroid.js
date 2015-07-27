(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};
  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  var Asteroid = Asteroids.Asteroid = function(options) {
    var randomVel = (Math.random() * 5 * 2) - 5;
    options.color = options.color || Asteroid.COLOR;
    options.radius = options.radius || Asteroid.RADIUS;
    options.vel = Asteroids.Util.randomVec(randomVel);
    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLOR = "#666666";
  Asteroid.RADIUS = 20;

})();
