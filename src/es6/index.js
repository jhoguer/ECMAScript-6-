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
a = 'a'

let name = 'Jhon';
let age = 33;

// es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: 'Jhon', age: 33 },
  { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function(item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = nun => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!!!');
    } else {
      reject('Ups!!');
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hola'))
  .catch(err => console.log(err));

  class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }

    sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
  }

  const calc = new calculator();
  console.log(calc.sum(8, 3));

import {hello} from './module';
hello();

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)