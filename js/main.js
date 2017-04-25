var TopDownGame = TopDownGame || {};

TopDownGame.game = new Phaser.Game(640, 640, Phaser.AUTO, '');

TopDownGame.game.state.add('Boot', TopDownGame.Boot);
TopDownGame.game.state.add('Preload', TopDownGame.Preload);
TopDownGame.game.state.add('Title', TopDownGame.Title);
TopDownGame.game.state.add('Game', TopDownGame.Game);

TopDownGame.game.state.start('Boot');