const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // Getters
  getSchool() {
    return this.school;
  }
  // Override Employee Class
  getRole() {
    return 'Intern';
  }
}

// Export Intern Class
module.exports = Intern;
