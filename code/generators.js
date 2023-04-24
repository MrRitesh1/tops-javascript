// Generators

function* Exampal() {
  yield console.log("first");
  console.log("first");
  yield console.log("first");
}

let a = Exampal();
console.log(a.next());
console.log(a.next());
console.log(a.next());
