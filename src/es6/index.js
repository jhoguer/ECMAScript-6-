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