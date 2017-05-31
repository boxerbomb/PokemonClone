// species stats are an array of base stats
//[number, name, hp, atk, def, spAtk,spDef,speed]
function Pokemon(species, lvl){
  //Base attributes
  this.number=species[0]
  this.name=species[1]  //can be updated with nickname
  this.baseHP=species[2]
  this.baseAtk=species[3]
  this.baseDef=species[4]
  this.baseSpAtk=species[5]
  this.baseSpDef=species[6]
  this.baseSpeed=species[7]

  //IVs
  this.hpIV=Math.floor(Math.random() * 32)
  this.atkIV=Math.floor(Math.random() * 32)
  this.defIV=Math.floor(Math.random() * 32)
  this.spAtkIV=Math.floor(Math.random() * 32)
  this.spDefIV=Math.floor(Math.random() * 32)
  this.speedIV=Math.floor(Math.random() * 32)

  //EVs
  this.totalEV=0
  this.hpEV=0
  this.atkIV=0
  this.defIV=0
  this.spAtkEV=0
  this.spDefEV=0
  this.speedEV=0

  //assigns stats based on formula
  this.maxhp=((baseHP * 2 + hpIV + hpEV/4) * lvl/100) + 10 + lvl
  this.Atk=((baseAtk * 2 + atkIV + atkEV/4) * lvl/100) + 5
  this.Def=((baseDef * 2 + defIV + defEV/4) * lvl/100) + 5
  this.SpAtk=((baseSpAtk * 2 + spAtkIV + spAtkEV/4) * lvl/100) + 5
  this.SpDef=((baseSpDef * 2 + spDefIV + spDefEV/4) * lvl/100) + 5
  this.Speed=((baseSpeed * 2 + speedIV + speedEV/4) * lvl/100) + 5

}
