'use strict';

const team = {
  name: 'Development Team',
  members: ['Alice', 'Bob', 'Charlie'],

  displayMembers() {
    // start coding here
    this.members.map((member,index) => {
      console.log(`${this.name}: ${member}`);
    })
    
  },
};

team.displayMembers();
// Expected Output:
// Development Team: Alice
// Development Team: Bob
// Development Team: Charlie
