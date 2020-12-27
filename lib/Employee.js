class Employee {
  // Create employee
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Getters
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return 'Employee';
  }
}
// Export Class
module.exports = Employee;
