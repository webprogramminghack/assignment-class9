'use strict';

const team = {
  name: 'Development Team',
  members: ['Alice', 'Bob', 'Charlie'],

  // alternatif 1
  // displayMembers() {
  //   // start coding here
  //   for (let member in this.members) {
  //     console.log(`${this.name} : ${this.members[member]}`);
  //   }
  // },

  // alternatif 2
  displayMembers() {
    // start coding here
    this.members.forEach((member) => console.log(`${this.name} : ${member}`));
  },
};

team.displayMembers();
// Expected Output:
// Development Team: Alice
// Development Team: Bob
// Development Team: Charlie
