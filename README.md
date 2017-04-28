# Pokemon Inspired Game
A r/learnprogramming group project

Lastest Pull(or close) is live [on my website](http://boxerbomb.com/reddit/)

This is created using PhaserJS and it ended up being more complex than I originally planned.
It uses Tiled to manage the tilemap and it reads in .json for map data.

It uses slick-ui for the in-game menu.

The project is based on [this tutorial](https://gamedevacademy.org/html5-phaser-tutorial-top-down-games-with-tiled)

I will work on a better tutorial for making maps to better help the community.

----------------------------------------------------------------------
## Map Data
The map can be any size with 64px tiles
The game starts on level0 and then door objects can change the level.
Map data is arranged in 3 layers:
objectsLayer
blockedLayer
backgroundLayer

#### Objects:
create a new tile on object layer
create custom properties for object

###### Wild Pokemon encounter properties: 
"type" --> "encounterZone"
"zoneType" --> ("grass","water","cave")

###### (required)player starting place:
"type"-->"playerStart"

###### door:
"type"-->"door"
"sprite"-->"browndoor"
"roomnum"(int)-->desired room number

###### NPC:
"type"-->"npc"
"sprite"--><imagename>
"name"-->any name

## Preload
All assets are assigned in the preload.js file. You must add files there before calling them.
