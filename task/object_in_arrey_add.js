const areData = [
  {
    id: 1,
    name: "Doremon",
    age: 11,
  },
  {
    id: 2,
    name: "Nobita",
    age: 10,
  },
  {
    id: 3,
    name: "Tom",
    age: 8,
  },
];

const objData = {};

const dynamicObject = (selection, value) => {
  objData[selection] = value;
};

dynamicObject("areData", areData);

module.exports = { objData };
