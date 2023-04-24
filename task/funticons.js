const data = (val1, val2) => {
  let sum = val1 + val2;
  console.log("Normal Value Print : ", sum);
};
data(3, 2);

const xyz = (val1, val2, ...val) => {
  let sum = val1 + val2;
  for (const itme of val) {
    sum += itme;
  }
  console.log("Using fotof loop add value : ", sum);
};

xyz(18, 35, 42, 84, 16);

const demo = (val1, val2, val3 = 0) => {
  let sum = val1 + val2 + val3;
  console.log("Normal Value Print : ", sum);
};
demo(3, 2);
