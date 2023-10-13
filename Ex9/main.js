class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  getisLucky() {
    return this.luck>Math.random();
  }

  getattackPokemon() {
    while (isLucky <= Pokemon.luck) {
      console.log(`le Pokemon attaque avec ${this.attack} pts !`);
      dégats = Pokemon.attack - Pokemon.defense;
    }
  }
}

let dracolosse = new Pokemon("Dracolosse", 10, 5, 20, 75);
let carchacrok = new Pokemon("Carchacrok", 20, 3, 25, 50);


while (dracolosse.hp > 0 && carchacrok.hp >0){
  dracolosse.getattackPokemon(carchacrok);
} 

if(carchacrok.hp<=0){
    console.log(carchacrok.name +'est mort');
}