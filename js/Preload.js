var TopDownGame = TopDownGame || {};

//loading the game assets
TopDownGame.Preload = function(){};

TopDownGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //Level Loading
    this.load.tilemap('level0', 'assets/tilemaps/level0.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level2', 'assets/tilemaps/level2.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTiles', 'assets/images/tiles.png');
    //Item Loading
    this.load.image('greencup', 'assets/images/greencup.png');
    this.load.image('bluecup', 'assets/images/bluecup.png');
    this.load.image('browndoor', 'assets/images/browndoor.png');
    //Character Loading
    this.load.image('player', 'assets/images/player.png');
    //NPC Loading
    this.load.image('professor', 'assets/images/professor.png');
    //Title Screen
    this.load.image('titlescreen','assets/images/titlescreen.png');
    this.load.image('playBut','assets/images/play.png');
    this.load.image('creditsBut','assets/images/credits.png');
  },
  create: function() {
    this.state.start('Title');
  }
};