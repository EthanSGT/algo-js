let student = {
  name: "Ethan",
  favoritefood: "Frites",
  city: "Paris",
};

let result = 0;
let values = Object.values(student);

values.forEach((value) => {
  result += value.length;
});

console.log(result);

if (result % 2) {
  console.log("impair");
} else {
  console.log("pair");
}

console.log("le résultat est " + result);
