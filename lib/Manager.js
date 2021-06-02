const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOffice() {
    return this.officeNumber;
  }//just returns property

}

module.exports = Manager;//object needs to be exported
