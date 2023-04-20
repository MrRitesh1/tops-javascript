const name1 = {
  a: "Bijesh",
  b: "Sagar",
  c: "Movalik",
};
const name2 = {
  d: "Kishan",
  e: "Vivek",
  f: "Krutik",
};

const marjData = { ...name1, ...name2 };
module.exports = { marjData, name2, name1 };
