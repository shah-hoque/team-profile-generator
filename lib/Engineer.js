const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
    // super allows us to call the parent constructor - (inherit) from Employee
      super(name, id, email);
      this.github = github;
    }
  
    getGithub() {
      return this.github;
    }

    // this particular method will override the Employee getRole() method
    getRole() {
      return 'Engineer';
    }
  }

  module.exports = Engineer;

  