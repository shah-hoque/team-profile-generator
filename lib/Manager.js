class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // super allows us to call the parent constructor (inherit)
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  
    // this method will override the Employee method
    getRole() {
      return 'Manager';
    }
}

export default Manager;