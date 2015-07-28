(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(options) {
    options.radius = Ship.RADIUS;
    options.color = Ship.COLOR;
    options.vel = [0, 0];
    Asteroids.MovingObject.call(this, options);
  };
  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPos();
    this.vel = [0, 0];
  };

  Ship.prototype.collideWith = function (otherObj) {
    if (otherObj instanceof (Asteroids.Asteroid)) {
      this.relocate();
    }
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var bulletVelX = this.vel[0] * 3;
    var bulletVelY = this.vel[1] * 3;
    var bulletOpts = {
      vel: [bulletVelX, bulletVelY],
      pos: this.pos,
      game: this.game
    };

    this.game.add(new Asteroids.Bullet(bulletOpts));
  };

  Ship.RADIUS = 15;
  Ship.COLOR = "#0000FF";

})();
