// File Import
const { arr } = require("./arrey_addValue_lenth");
const { marjData, name2, name1 } = require("./object_concet");
const { objData } = require("./object_in_arrey_add");
const { c, a, b } = require("./tow_arrey_concet");
const { Companie } = require("./inheritance");
const { usar } = require("./destacharig");
const { infos } = require("./constructor");

// Arrey in velua ADD and Arrey Length ....

console.log("Arr : ", arr);
arr.push("Jery");
console.log("Arrey Push : ", arr);
console.log("Arrey Length : ", arr.length);

// Arry in concet useng for rest opretars
console.log("Arrey Concet Useng for Spread : ", ...b, ...a);

console.log("Arrey Concet Useng for rest : ", c);

// Object concet useng for rest opretars
console.log("Object Concet Useng for Spread : ", { ...name1, ...name2 });

console.log("Object Concet useg for rest : ", marjData);

// Object in Arrey Add useng forin loop

for (const key in objData) {
  if (Object.hasOwnProperty.call(objData, key)) {
    const element = objData[key];
    console.log("Object in Arrey Add useng forin loop : ", element);
  }
}

// Inheritance
let info = new Companie();
console.log(info.CompanieData());

// Destacharig
let [name, age, lname = "Katrodiya"] = usar;
console.log("Destacharig : ", name, age, lname);

// Constructor
console.log("Constructor : ");
let dataInfo = new infos("Ritesh");
console.log(dataInfo.display());
