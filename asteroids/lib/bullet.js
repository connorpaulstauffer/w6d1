(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Bullet = Asteroids.Bullet = function(options) {
    options.radius = Bullet.RADIUS;
    options.color = Bullet.COLOR;
    Asteroids.MovingObject.call(this, options);
  };
  Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObj) {
    if (typeof (otherObj) === "Asteroid") {

    }
  };

  Bullet.RADIUS = 3;
  Bullet.COLOR = "#000000";
})();
