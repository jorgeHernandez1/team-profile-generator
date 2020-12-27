const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // Getters
  getOfficeNumber() {
    return this.officeNumber;
  }
  // Override Employee roles
  getRole() {
    return 'Manager';
  }
}

// Export Manager Class
module.exports = Manager;
