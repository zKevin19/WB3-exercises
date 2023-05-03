"use strict";

function parseAndDisplayName(name) {
 
  let pos = name.indexOf(" "); // here creates space within names // solo agarra primer nombre gracias a indexOf
  let firstName = name.substring(0, pos); // here takes the first name
  let lastName = name.substring(pos + 1); // here the last name with the +1 / pos is the first name
  console.log(
  "name: " + name + " ,First name: " + firstName + " ,Last name: " + lastName
    );
}



parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
