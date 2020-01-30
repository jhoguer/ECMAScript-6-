function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 33;
  var country = country || 'COL';
}

// es6

function newFunction2(name = 'oscar', age = 33, country = 'COL') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'COL');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Una frase epica para concatenar \n"
+ "Otra frase epica que necesitamos."

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
  'name': 'jhon',
  'age': 33,
  'country': 'CO'
}

console.log(person.name, person.age);

let { name, age} = person;
console.log(name, age);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';