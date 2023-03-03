class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // super allows us to call the parent constructor - (inherit) from Employee
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  
    // this particular method will override the Employee getRole() method
    getRole() {
      return 'Manager';
    }
}

export default Manager;