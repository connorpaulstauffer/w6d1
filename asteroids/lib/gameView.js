(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.bindKeyHandlers = function() {
    var theGame = this.game;

    key('w', function () { theGame.ship.power([0, -1]); });
    key('a', function () { theGame.ship.power([-1, 0]); });
    key('s', function () { theGame.ship.power([0, 1]); });
    key('d', function () { theGame.ship.power([1, 0]); });
  };

  GameView.prototype.start = function () {
    this.bindKeyHandlers();

    window.setInterval((function() {
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  };
})();
