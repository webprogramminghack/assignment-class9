'use strict';

const team = {
  name: 'Development Team',
  members: ['Alice', 'Bob', 'Charlie'],

  //implement an object method that uses arrow functions to demonstrate the difference in how `this` is handled compared to regular functions.
  displayMembers() {
    // start coding here
    this.members.forEach((member) => console.log(this.name + ': ' + member));
  },
};

team.displayMembers();
// Expected Output:
// Development Team: Alice
// Development Team: Bob
// Development Team: Charlie
