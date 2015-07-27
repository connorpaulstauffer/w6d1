(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    window.setInterval((function() {
      this.game.moveObjects();
      this.game.draw(ctx);
    }).bind(this), 20);
  };
})();
