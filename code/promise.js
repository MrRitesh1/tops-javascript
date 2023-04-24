// Promise

// Pending
// Fulfil Resolve() then ==>> read positive
// rejected reject() catch ==> read negative

const data = (result) => {
  console.log(result);
};

const notData = (result) => {
  console.log(result);
};

let a = new Promise((resolve, reject) => {
  if (false) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

a.then(data).catch(notData);

// a.then(data);
// a.catch(notData);
