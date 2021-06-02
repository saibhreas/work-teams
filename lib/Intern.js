const Employee = require("./Employee");

class Intern extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {``
    return "Intern";
  }

  getSchool() {
    return this.shcool;
  }//just returns property

}

module.exports = Intern;//object needs to be exported
