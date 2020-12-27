const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // Getters
  getGithub() {
    return this.github;
  }
  // Override Employee role
  getRole() {
    return 'Engineer';
  }
}

// Export Engineer Class
module.exports = Engineer;
