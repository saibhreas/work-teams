const Employee = require("./Employee");

class Engineer extends Employee {

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }//just returns property

}

module.exports = Engineer;//object needs to be exported
