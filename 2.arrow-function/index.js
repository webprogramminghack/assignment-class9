'use strict';

const team = {
  name: 'Development Team',
  members: ['Alice', 'Bob', 'Charlie'],

  displayMembers() {
    this.members.forEach((member) => {
      console.log(`${this.name}: ${member}`);
    });
  },
};

team.displayMembers();

// Expected Output:
// Development Team: Alice
// Development Team: Bob
// Development Team: Charlie
