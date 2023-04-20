class Companie {
  constructor(name) {
    this.name = name;
    console.log("Employ data");
  }
  display() {
    console.log("name ", this.name);
  }
}
class Menejar extends Companie {
  constructor(name) {
    super(name);
    console.log("Menejar");
  }
}

// let data = new Menejar("Haresh");
// console.log(data.display());

module.exports = { Menejar };
