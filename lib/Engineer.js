const Employee = require("./Employee");

class Engineer extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.githubUser;
  }//just returns property

}

module.exports = Engineer;//object needs to be exported
