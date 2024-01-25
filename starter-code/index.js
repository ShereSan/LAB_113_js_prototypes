// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return  this.strength
    }
    receiveDamage(damage){
        this.health -= damage

    }
}

// Viking
class Viking extends Soldier{
    constructor(health,strength,name){
        super(health,strength)
        this.name = name
    }
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
        if(this.health <= 0 ) return this.name + ' has died in act of combat'
        if(this.health > 0 )  return this.name + ' has received ' + damage + ' points of damage'
    
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}
const jose = new Viking(3, 5, 'Jose')
//console.log(jose)
//console.log(jose.receiveDamage(1))
//console.log(jose)
//console.log(jose.battleCry())


// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength)
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health <= 0 ) return 'A Saxon has died in act of combat'
        if(this.health > 0 )  return 'A Saxon has received ' + damage + ' points of damage'   
    }
}

const saxon = new Saxon(2,5)
/* console.log(saxon)
console.log(saxon.receiveDamage(1))
 */

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)

    }
    vikingAttack(){




    }

}


