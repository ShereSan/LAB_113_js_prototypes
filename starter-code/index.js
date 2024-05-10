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
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const damage = randomViking.strength;
        const result = randomSaxon.receiveDamage(damage);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return result;
    }

    saxonAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const damage = randomSaxon.strength;
        const result = randomViking.receiveDamage(damage);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result;
    }

    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

const war = new War();

war.addViking(new Viking(100, 30, "Vikingo1"));
war.addViking(new Viking(80, 25, "Vikingo2"));
war.addViking(new Viking(120, 35, "Vikingo3"));

war.addSaxon(new Saxon(100, 20));
war.addSaxon(new Saxon(80, 15));
war.addSaxon(new Saxon(120, 25));

console.log(war.vikingAttack());
console.log(war.saxonAttack());

console.log(war.showStatus());


