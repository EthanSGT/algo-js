// Création d'une liste de stations de radio
var radio = [
  "Anissa-Wejdene",
  "MILS 2.0-Ninho",
  "Sprinter-Dave,CentralCee",
  "JRespect R-Damso",
  "Meuda-Tiakola",
];

// Initialisation des variables pour le feu rouge et le compteur de taxis
let feurouge = 30;
let taxi = 0;

// Définition d'une classe "Personnage" avec des attributs "name" et "santementale"
class Personnage {
  constructor(name, santementale) {
    this.name = name;
    this.santementale = santementale;
  }
}

// Définition d'une classe "Trajet" avec des attributs "taxi" et "feurouge"
class Trajet {
  constructor(taxi, feurouge) {
    this.taxi = taxi;
    this.feurouge = feurouge;
  }
}

// Création d'une instance du personnage "John" avec une santé mentale initiale de 10
let john = new Personnage("John", 10);

// Création d'une instance "trajet" avec 0 taxis et 30 feux rouges initiaux
let trajet = new Trajet(0, 30);

// Boucle while qui simule le trajet
while (trajet.feurouge > 0) {
  // Vérification de la santé mentale de John
  if (john.santementale === 0) {
    console.log("John a explosé.");
    break; // Sort de la boucle si la santé mentale est épuisée
  } else {
    // Sélection aléatoire d'une station de radio
    const randomRadio = radio[Math.floor(Math.random() * radio.length)];
    trajet.feurouge -= 1; // Décrémentation du feu rouge
    console.log(`John écoute "${randomRadio}" en prenant un taxi.`);
    // Vérification si la station de radio est "Anissa-Wejdene"
    if (randomRadio === "Anissa-Wejdene") {
      trajet.taxi += 1; // Incrémentation du compteur de taxis
      john.santementale -= 1; // Réduction de la santé mentale de John
      console.log("Aïe ! John est tombé sur un mauvais taxi !");
    }
  }
}

// Affichage des résultats du trajet
console.log(
  "John est arrivé chez lui avec " +
    john.santementale +
    " pts de santé mentale et a dû changer de taxi " +
    trajet.taxi +
    " fois."
);
