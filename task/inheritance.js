class Employ {
  EmployData() {
    console.log({ EmployName: "Ritesh", EmployAge: 23 });
  }
}
class Menegar extends Employ {
  MenegarData() {
    console.log({ MenegarName: "Mukesh", EmployFees: 21700 });
  }
}

class Companie extends Menegar {
  CompanieData() {
    // let name = "Mukesh";
    console.log("CompanieInformeshn");
    this.EmployData();
    this.MenegarData();
  }
}

// let info = new Companie();
// console.log(info.CompanieData());
module.exports = { Companie };
