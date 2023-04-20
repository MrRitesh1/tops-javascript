const itam = {
  name: "Ritesh",
  addres: "surat",
  numbar: "1234567890",
  email: "riteshnavadiya111@gmail.com",
};

console.log(itam.name);
console.log("-----------------------------------");
// itam object in values add .....
itam["Friend"] = "Harsh";
console.log(itam);

const data = "Companie";

const multiData = {
  [data + "Employ"]: "Krutik",
  [data + "Menegar"]: "Jay",
};

console.log("Companie Data : ", multiData);
