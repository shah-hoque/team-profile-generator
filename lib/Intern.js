const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, school) {
    // super allows us to call the parent constructor - (inherit) from Employee
      super(name, id, email);
      this.school = school;
    }
  
    getSchool() {
      return this.school;
    }
  
    // this particular method will override the Employee getRole() method
    getRole() {
      return 'Intern';
    }
  }
  
  module.exports = Intern;
