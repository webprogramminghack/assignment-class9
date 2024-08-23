'use strict';

const team = {
  name: 'Development Team',
  members: ['Alice', 'Bob', 'Charlie'],

  displayMembers() {
    // start coding here
    this.members.forEach((el) => console.log(`${this.name}: ${el}`));
  },
};

team.displayMembers();
// Expected Output:
// Development Team: Alice
// Development Team: Bob
// Development Team: Charlie
