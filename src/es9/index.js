const obj = {
  name: 'Jhon',
  age: 33,
  country: 'CO'
};

let {...todo } = obj;
let { country, ...all } = obj;

console.log(all);
console.log(todo);

const obj = {
  name: 'Oscar',
  age: 33
}

const obj1 = {
  ...obj,
  country: 'CO'
}

console.log(obj1)

const helloWorld = () =>  {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test Error'))
  })
}

helloWorld()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('Finalizo'));

  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2018-04-20');
  const completa = match[0]
  const year = match[1]
  const month = match[2]
  const day = match[3]

  console.log(year, month, day)
  console.log(completa);