// Tableau de prénoms pour les survivants
const prenoms = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Holly",
  "Ivy",
  "Jack",
];

// Fonction pour générer un nom de survivant aléatoire
function genererNomSurvivant() {
  const randomIndex = Math.floor(Math.random() * prenoms.length);
  return prenoms.splice(randomIndex, 1)[0];
}

// Classe de personnage avec des caractéristiques
class Personnage {
  constructor(
    nom,
    caractéristique,
    probaMourir,
    probaInfligerDommages,
    probaMourirAvecDommages
  ) {
    this.nom = nom;
    this.caractéristique = caractéristique;
    this.pointsDeVie = 100;
    this.probaMourir = probaMourir;
    this.probaInfligerDommages = probaInfligerDommages;
    this.probaMourirAvecDommages = probaMourirAvecDommages;
  }

  attaquerSurvivant(survivant) {
    // Générer un nombre aléatoire pour déterminer l'issue de l'attaque
    const random = Math.random();
    if (random < this.probaMourir) {
      console.log(`${this.nom} a tué ${survivant.nom}`);
      survivant.pointsDeVie = 0; // Le survivant meurt
    } else if (random < this.probaInfligerDommages) {
      survivant.pointsDeVie -= 10;
      console.log(
        `${survivant.nom} a esquivé et a infligé 10 points de dégâts à ${this.nom}`
      );
    } else if (random < this.probaMourirAvecDommages) {
      survivant.pointsDeVie -= 15;
      console.log(
        `${survivant.nom} a infligé 15 points de dégâts à ${this.nom} mais est mort`
      );
    } else {
      console.log(`${this.nom} a raté son attaque sur ${survivant.nom}`);
    }
  }
}

// Création du tueur Jason
const jason = new Personnage("Jason", "Tueur en série", 0.3, 0.5, 0.2);

// Création de 5 survivants avec des caractéristiques aléatoires
const survivants = [];
for (let i = 0; i < 5; i++) {
  const nomSurvivant = genererNomSurvivant();
  const caractéristiqueSurvivant = ["Nerd", "Sportif", "Blonde"][
    Math.floor(Math.random() * 3)
  ];
  survivants.push(
    new Personnage(nomSurvivant, caractéristiqueSurvivant, 0.1, 0.4, 0.15)
  );
}

// Fonction pour vérifier si au moins un survivant est en vie
function auMoinsUnSurvivantEnVie(survivants) {
  return survivants.some((survivant) => survivant.pointsDeVie > 0);
}

// Boucle tant que Jason est en vie et au moins un survivant est en vie
while (jason.pointsDeVie > 0 && auMoinsUnSurvivantEnVie(survivants)) {
  for (const survivant of survivants) {
    if (survivant.pointsDeVie > 0) {
      jason.attaquerSurvivant(survivant);
    }
  }
}

// Affichage des résultats
console.log("Résultats finaux :");
if (jason.pointsDeVie <= 0) {
  console.log("Jason est mort. Les survivants ont gagné.");
} else {
  console.log("Les survivants ont été vaincus. RIP à :");
  for (const survivant of survivants) {
    if (survivant.pointsDeVie <= 0) {
      console.log(survivant.nom);
    }
  }
}
