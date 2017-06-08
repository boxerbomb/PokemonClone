// species stats are an array of base stats
//[number,nickname, hp, atk, def, spAtk,spDef,speed,type1,type2]
function Pokemon(species, lvl){
  //Base attributes
  this._number=species[0];
  this._nickname=species[1];  //can be updated with nickname on capture
  this._baseHP=species[2];
  this._baseAtk=species[3];
  this._baseDef=species[4];
  this._baseSpAtk=species[5];
  this._baseSpDef=species[6];
  this._baseSpeed=species[7];
  this._type1=species[8];
  this._type2=species[9];

  //IVs
  this._hpIV=Math.floor(Math.random() * 32);
  this._atkIV=Math.floor(Math.random() * 32);
  this._defIV=Math.floor(Math.random() * 32);
  this._spAtkIV=Math.floor(Math.random() * 32);
  this._spDefIV=Math.floor(Math.random() * 32);
  this._speedIV=Math.floor(Math.random() * 32);

  //EVs
  this._totalEV=0;
  this._hpEV=0;
  this._atkEV=0;
  this._defEV=0;
  this._spAtkEV=0;
  this._spDefEV=0;
  this._speedEV=0;

  //assigns stats based on formula
  this._maxhp=((_baseHP * 2 + _hpIV + _hpEV/4) * lvl/100) + 10 + lvl;
  this._atk=((_baseAtk * 2 + _atkIV + _atkEV/4) * lvl/100) + 5;
  this._def=((_baseDef * 2 + _defIV + _defEV/4) * lvl/100) + 5;
  this._spAtk=((_baseSpAtk * 2 + _spAtkIV + _spAtkEV/4) * lvl/100) + 5;
  this._spDef=((_baseSpDef * 2 + _spDefIV + _spDefEV/4) * lvl/100) + 5;
  this._speed=((_baseSpeed * 2 + _speedIV + _speedEV/4) * lvl/100) + 5;


  this._currenthp=this._maxhp;
  this._statusEffect=null;
};

// getters
Pokemon.prototype.getNumber = function () {
  return this._number;
};
Pokemon.prototype.getName = function () {
  return this._nickname;
};
Pokemon.prototype.getMaxHP = function () {
  return this._maxhp;
};
Pokemon.prototype.getAtk = function () {
  return this._atk;
};
Pokemon.prototype.getDef = function () {
  return this._def;
};
Pokemon.prototype.getSpAtk = function () {
  return this._spAtk;
};
Pokemon.prototype.getSpDef = function () {
  return this._spDef;
};
Pokemon.prototype.getSpeed = function () {
  return this._speed;
};
Pokemon.prototype.getCurrenthp = function () {
  return this._currenthp;
};
