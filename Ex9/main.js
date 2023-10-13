class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  getisLucky() {
    return this.luck > Math.random();
  }

  getattackPokemon(pokemon) {
    if (this.getisLucky()) {
      let degat = Pokemon.attack - Pokemon.defense;
      pokemon.hp -= degat;
      //partie ajouté après correction :
      console.log(this.name +'a attaqué' + pokemon.name+' pour '+ degat + 'de degats, il lui reste'+ pokemon.hp +' pv.');
    } else{
      console.log(this.name+' a raté son attaque !');
    } //fin de la partie rajouté après correction
  }
}

let dracolosse = new Pokemon("Dracolosse", 10, 5, 20, 75);
let carchacrok = new Pokemon("Carchacrok", 20, 3, 25, 50);

while (dracolosse.hp > 0 && carchacrok.hp > 0) {
  dracolosse.getattackPokemon(carchacrok);

  if (carchacrok.hp <= 0) {
    console.log(carchacrok.name + "est mort");
    break;
  }
  // partie ajouté après correction
  carchacrok.getattackPokemon(dracolosse);

  if (dracolosse.hp <= 0) {
    console.log(dracolosse.name + "est mort");
    break;
  }
} //Fin de la partie ajouté après correction
