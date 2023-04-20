class infos {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log("Hello" + "--" + this.name);
  }
}

module.exports = { infos };
