# PokemonClone
A r/learnprogramming group project

This is created using PhaserJS and it ended up being more complex than I originally planned.
It uses Tiled to manage the tilemap and it reads in .json for map data.

It uses slick-ui for the in-game menu.

The project is based on [this tutorial](https://gamedevacademy.org/html5-phaser-tutorial-top-down-games-with-tiled) 

----------------------------------------------------------------------
# Map Data
The map can be any size with 64px tiles
The game starts on level0 and then door objects can change the level.
Map data is arranged in 3 layers:
objectsLayer
blockedLayer
backgroundLayer

Objects:
create a new tile on object layer
create custom properties for object

(required)player starting place:
"type"-->"playerStart"

door:
"type"-->"door"
"sprite"-->"browndoor"
"roomnum"(int)-->desired room number
