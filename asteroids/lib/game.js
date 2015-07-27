(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.ship = new Asteroids.Ship({
      pos: Asteroids.Game.prototype.randomPos(),
      game: this
    });
    this.asteroids = [];
    this.addAsteroids(Game.NUM_ASTEROIDS);
  };

  Game.prototype.allObjects = function () {
    return [this.ship].concat(this.asteroids);
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      var opts = {};
      opts.pos = this.randomPos();
      opts.game = this;
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
    this.allObjects().forEach(function (obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function (obj) { obj.move(); });
  };

  Game.prototype.wrap = function(pos) {
    var posX = pos[0], posY = pos[1];
    if (posX < 0) { posX = (Game.DIM_X + posX); }
    if (posX > Game.DIM_X) { posX = (posX % Game.DIM_X); }

    if (posY < 0) { posY = (Game.DIM_Y + posY); }
    if (posY > Game.DIM_Y) { posY = (posY % Game.DIM_Y); }

    return [posX, posY];
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i] === null || this.asteroids[j] === null) {
          continue;
        }

        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }

    this.asteroids = this.asteroids.filter(function (val) {
      return val !== null;
    });
  };

  Game.prototype.remove = function(asteroid) {
    this.asteroids[this.asteroids.indexOf(asteroid)] = null;
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 200;
})();
