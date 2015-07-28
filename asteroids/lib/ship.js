(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(options) {
    options.radius = Ship.RADIUS;
    options.color = Ship.COLOR;
    options.vel = [0, 0];
    Asteroids.MovingObject.call(this, options);
    // some random pos
  };
  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPos();
    this.vel = [0, 0];
  };

  Ship.prototype.collideWith = function (otherObject) {
    this.relocate();
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var bulletVelX = this.vel[0] * 1.3;
    var bulletVelY = this.vel[1] * 1.3;
    var bulletOpts = {
      vel: [bulletVelX, bulletVelY],
      pos: this.pos,
      game: this.game
    };

    this.game.add(new Asteroids.Bullet(bulletOpts));
  };

  Ship.RADIUS = 10;
  Ship.COLOR = "#994422";

})();
