(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
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

    this.pos[0] += velX;
    this.pos[1] += velY;
  };
})();
