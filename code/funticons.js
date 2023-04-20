const CalculateTerprature = (key, value) => {
  // formula
  if (key === "celsius") {
    return [value * (9 / 5)] + 32;
  } else {
    return [[value - 32] * 5] / 9;
  }
};

const CalculateTerpratureE6 = (key, value) =>
  key === "celsius" ? [value * (9 / 5)] + 32 : [[value - 32] * 5] / 9;

console.log(CalculateTerpratureE6("celsius", 10.3));
console.log(CalculateTerpratureE6("fahrenheil", 50.9));

console.log(CalculateTerprature("celsius", 10.3));
console.log(CalculateTerprature("fahrenheil", 50.9));
