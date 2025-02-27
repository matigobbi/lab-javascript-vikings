// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength)
    name = this.name
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`;}
    else { return `${this.name} has died in act of combat`;}
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health= this.health - damage
    if (this.health>0){
      return `A Saxon has received ${damage} points of damage`;}
      else { return "A Saxon has died in combat";} 
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }


  addViking(viking){
    this.vikingArmy.push(viking)
  }
addSaxon(saxon){
  this.saxonArmy.push(saxon)
}
vikingAttack(){
  const selectedAtacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
  const selectedReceiver = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
  const vikingStrength = selectedAtacker.strength;
  const attackMessage = selectedReceiver.receiveDamage(vikingStrength);
  if (selectedReceiver.health <= 0) {
    const index = this.saxonArmy.indexOf(selectedReceiver);
    this.saxonArmy.splice(index, 1);
  }
return attackMessage
}
saxonAttack(){
  const selectedAtacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
  const selectedReceiver = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
  const saxonStrength = selectedAtacker.strength;
  const attackMessage = selectedReceiver.receiveDamage(saxonStrength);
  if (selectedReceiver.health <= 0) {
    const index = this.vikingArmy.indexOf(selectedReceiver);
    this.vikingArmy.splice(index, 1);
  }
return attackMessage

}
showStatus(){
  if(this.vikingArmy.length===0){
     return "Saxons have fought for their lives and survived another day..."}
    else if (this.saxonArmy.length===0){return "Vikings have won the war of the century!" }
   else { return "Vikings and Saxons are still in the thick of battle."}
}}
