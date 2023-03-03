class Intern extends Employee {
    constructor(name, id, email, school) {
    // super allows us to call the parent constructor - (inherit) from Employee
      super(name, id, email);
      this.school = school;
    }
  
    getSchool() {
      return this.school;
    }
  
    // this method will override the Employee method
    getRole() {
      return 'Intern';
    }
  }
  
  export default Intern;