(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    var posX = this.pos[0];
    var posY = this.pos[1];

    ctx.arc(
      posX,
      posY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    var velX = this.vel[0];
    var velY = this.vel[1];

    var newVelX = this.pos[0] + velX;
    var newVelY = this.pos[1] + velY;

    this.pos = this.game.wrap([newVelX, newVelY]);
  };
})();
