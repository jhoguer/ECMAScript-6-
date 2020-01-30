const data = {
  frontend: 'Oscar',
  backend: 'Jhon',
  desing: 'Ana'
}

const entri = Object.entries(data);
console.log(entri);
console.log(entri.length);

const data = {
  frontend: 'Oscar',
  backend: 'Jhon',
  desing: 'Ana'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))

const obj = {
  name: 'oscar',
}

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (err) {
    console.log(err);
  }
}

anotherFunction();