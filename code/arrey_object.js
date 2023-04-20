const studant = [
  {
    id: 1,
    name: "Chirag",
    age: 21,
  },
  {
    id: 2,
    name: "Jiganesh",
    age: 22,
  },
  {
    id: 3,
    name: "Jay",
    age: 23,
  },
];

const data = {};

const dynamicObject = (selection, value) => {
  data[selection] = value;
};

dynamicObject("id", 0);
dynamicObject("name", "Ritesh");
dynamicObject("age", 20);

// console.log(data);

// Object
for (const key in data) {
  if (Object.hasOwnProperty.call(data, key)) {
    const element = data[key];
    console.log(element);
  }
}

//Arrey
for (const itme of studant) {
  console.log("Arrey Itme : ", itme);
}
