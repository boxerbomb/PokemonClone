var TopDownGame = TopDownGame || {};

//title screen
TopDownGame.Game = function(){};

TopDownGame.Game.prototype = {
	preload:function(){
	// You can use your own methods of making the plugin publicly available. Setting it as a global variable is the easiest solution.
    slickUI = this.game.plugins.add(Phaser.Plugin.SlickUI);
    slickUI.load('assets/ui/kenney/kenney.json'); // Use the path to your kenney.json. This is the file that defines your theme.
    this.game.load.image('menu-button', 'assets/ui/menu.png');
	},
  create: function(game,level) {
  	console.log(level);
  	if(level==undefined){
  		level=0;
  	}
  	this.map = this.game.add.tilemap('level'+level.toString());
    //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    this.map.addTilesetImage('tiles', 'gameTiles');

    //create layer
    this.backgroundlayer = this.map.createLayer('backgroundLayer');
    this.blockedLayer = this.map.createLayer('blockedLayer');

    //collision on blockedLayer
    this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');

    //resizes the game world to match the layer dimensions
    this.backgroundlayer.resizeWorld();

    this.createItems();
    this.createDoors();    

    //create player
    var result = this.findObjectsByType('playerStart', this.map, 'objectsLayer')
    this.player = this.game.add.sprite(result[0].x, result[0].y, 'player');
    this.player.speed=200;
    this.game.physics.arcade.enable(this.player);

    if(this.map.key=="level0"){
    	this.createPlayer();
    }

    //the camera will follow the player in the world
    this.game.camera.follow(this.player);

    //move player with cursor keys
    this.cursors = this.game.input.keyboard.createCursorKeys();
    enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enter.onDown.add(this.menuControl, this);

    //UI
    //var panel;
	slickUI.add(panel = new SlickUI.Element.Panel(this.game.width*.7, this.game.height/2-this.game.height*.35, this.game.width, this.game.height*.7));

	var dexbut;
	panel.add(dexbut = new SlickUI.Element.Button(0,0, this.game.width, 80));
	dexbut.events.onInputUp.add(function () {console.log('Clicked button');});
	dexbut.add(new SlickUI.Element.Text(0,0, "Pokedex")).center();

	var pokebut;
	panel.add(pokebut = new SlickUI.Element.Button(0,80, this.game.width, 80));
	pokebut.events.onInputUp.add(function () {console.log('Clicked button');});
	pokebut.add(new SlickUI.Element.Text(0,0, "Pokemon")).center();

	var bagbut;
	panel.add(bagbut = new SlickUI.Element.Button(0,160, this.game.width, 80));
	bagbut.events.onInputUp.add(function () {console.log('Clicked button');});
	bagbut.add(new SlickUI.Element.Text(0,0, "Bag")).center();

	panel.visible=false;
	basePosition = panel.x;


  },
  createItems: function() {
    //create items
    this.items = this.game.add.group();
    this.items.enableBody = true;
    var item;    
    result = this.findObjectsByType('item', this.map, 'objectsLayer');
    result.forEach(function(element){
      this.createFromTiledObject(element, this.items);
    }, this);
  },
  createPlayer: function(){
  	//Create all variables that are needed to create the character
  	//Only runs when the user starts a new game.
  	this.player.speed=200;
  	this.player.room=0;

  },
  createDoors: function() {
    //create doors
    this.doors = this.game.add.group();
    this.doors.enableBody = true;
    result = this.findObjectsByType('door', this.map, 'objectsLayer');

    result.forEach(function(element){
      this.createFromTiledObject(element, this.doors);
    }, this);
  },

  //find objects in a Tiled layer that containt a property called "type" equal to a certain value
  findObjectsByType: function(type, map, layer) {
    var result = new Array();
    map.objects[layer].forEach(function(element){
      if(element.properties.type === type) {
        //Phaser uses top left, Tiled bottom left so we have to adjust
        //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
        //so they might not be placed in the exact position as in Tiled
        element.y -= map.tileHeight;
        result.push(element);
      }      
    });
    return result;
  },
  //create a sprite from an object
  createFromTiledObject: function(element, group) {
    var sprite = group.create(element.x, element.y, element.properties.sprite);

      //copy all properties to the sprite
      Object.keys(element.properties).forEach(function(key){
        sprite[key] = element.properties[key];
      });
  },
  menuControl: function(){
  	if(panel.visible) {
        this.game.add.tween(panel).to( {x: basePosition + this.game.height*.7}, 500, Phaser.Easing.Exponential.Out, true).onComplete.add(function () {
        panel.visible = false;
        panel.x -= 156;
    	});
    }else{
	    panel.visible = true;
	    panel.x = basePosition + this.game.height*.7;
	    this.game.add.tween(panel).to( {x: basePosition}, 500, Phaser.Easing.Exponential.Out, true).onComplete.add(function () {
	     	//After It Opens
	    });
	    slickUI.container.displayGroup.bringToTop(panel.container.displayGroup);
	}
  },
  update: function() {
    //collision
    this.game.physics.arcade.collide(this.player, this.blockedLayer);
    this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);
    this.game.physics.arcade.overlap(this.player, this.doors, this.enterDoor, null, this);

    //player movement
    
    this.player.body.velocity.x = 0;

    if(this.cursors.up.isDown) {
      if(this.player.body.velocity.y == 0)
      this.player.body.velocity.y -= this.player.speed;
    }
    else if(this.cursors.down.isDown) {
      if(this.player.body.velocity.y == 0)
      this.player.body.velocity.y += this.player.speed;
    }
    else {
      this.player.body.velocity.y = 0;
    }
    if(this.cursors.left.isDown) {
      this.player.body.velocity.x -= this.player.speed;
    }
    else if(this.cursors.right.isDown) {
      this.player.body.velocity.x += this.player.speed;
    }
  },
  collect: function(player, collectable) {
    console.log('yummy!');

    //remove sprite
    collectable.destroy();
  },
  enterDoor: function(player, door) {
  	console.log("Goto Room Number:" + door.roomnum.toString());
  	this.player.room=door.roomnum;
  	this.create(this.game,this.player.room)
  },
};