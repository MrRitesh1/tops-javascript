const data = (result) => {
  console.log(result);
};

const notData = (result) => {
  console.log(result);
};

let a = new Promise((resolve, reject) => {
  console.log("SetTimeout 'A'");
  setTimeout(() => {
    if (false) {
      resolve("Success");
    } else {
      reject("Error");
    }
  }, 5000);
});
let xyz = new Promise((resolve, reject) => {
  console.log("SetTimeout 'XYZ'");
  if (true) {
    resolve("Success");
  } else {
    reject("Error");
  }
});
let xy = new Promise((resolve, reject) => {
  console.log("SetTimeout 'XY'");
  setTimeout(() => {
    if (true) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
});

// a.then(data).catch(notData);
// xyz.then(data).catch(notData);

Promise.all([a, xyz, xy]).then(data).catch(notData);
