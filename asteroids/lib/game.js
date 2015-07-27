(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids(Game.NUM_ASTEROIDS);
  };

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      var opts = {};
      opts.pos = this.randomPos();
      this.asteroids.push(new Asteroids.Asteroid(opts));
    }
  };

  Game.prototype.randomPos = function() {
    var posX = Math.floor(Math.random() * Game.DIM_X);
    var posY = Math.floor(Math.random() * Game.DIM_Y);
    return [posX, posY];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 20;
})();
