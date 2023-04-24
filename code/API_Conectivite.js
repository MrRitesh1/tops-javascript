// Node.js

const url = "https://jsonplaceholder.typicode.com/posts";
// const url = "https://data.com";

fetch(url, {
  method: "POST",
  //   body: {
  //     fname: "Doremon",
  //     lname: "Nobita",
  //   },
  headers: {
    "content = type": "application/json",
  },
})
  .then((res) => {
    console.log(res.text()); // String
    console.log(res.json()); //JSON
  })
  .catch((err) => {
    console.log(err);
  });
