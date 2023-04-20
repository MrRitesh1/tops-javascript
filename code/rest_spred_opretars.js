// rest opretar = diclerysan time usa thay
// spred opretar = call time usa thay

const data = (val1, val2, ...val) => {
  let sum = val1 + val2;
  // rest oprater (...)
  for (const itme of val) {
    sum += itme;
  }
  console.log(sum);
};

data(22, 33);
data(1, 3, 4, 8, 16);

const numbar = [9, 8, 7, 6];
const numbars = [1, 2, 3, 4, 5];

const newnumbar = numbar.concat(numbars);
const newnumbars = [...numbars, ...numbar];

console.log("Concat Methad : ", newnumbar);
console.log("Rest Opretars : ", newnumbars);

const objectData = {
  name: "Ritesh",
  age: 20,
};

const newObjectData = {
  ...objectData,
  name: "Chirag",
  age: 22,
};

console.log(objectData);
console.log(newObjectData);
