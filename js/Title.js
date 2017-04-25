var TopDownGame = TopDownGame || {};

TopDownGame.Title = function(){};

TopDownGame.Title.prototype = {
	
  create: function() {
    this.game.add.sprite(0, 0, 'titlescreen');
    var playBut=this.game.add.sprite(120, 360, 'playBut');
    playBut.inputEnabled=true;
    playBut.events.onInputDown.add(listener, this);

    var creditsBut=this.game.add.sprite(120, 480, 'creditsBut');
    creditsBut.inputEnabled=true;
    creditsBut.events.onInputDown.add(listener, this);
    console.log("TITLED!");
  }



};

function listener(but){
  	if(but.key=="playBut"){
  		TopDownGame.game.state.start('Game');
  	}
  	if(but.key=="creditsBut"){
  		console.log("ADD A CREDITS PAGE!");
  	}
  }