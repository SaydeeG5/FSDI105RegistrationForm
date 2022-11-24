function saveUser(user) {
  let existing = getAllUsers(); //read
  existing.push(user); // add new user to the list

  // JSON = JavaScript Object Notation
  let value = JSON.stringify(existing); // <-- parse the object into a json string

  // localStorage only stores: string, number so we will encode our object to string
  localStorage.setItem("users", value);
}

function getAllUsers() {
  let allUsers = [];

  let string = localStorage.getItem("users"); //read the jason string
  if (string) {
    //parse the string into an array
    allUsers = JSON.parse(string); //parse is the opposite of JSON.stringify
    return allUsers;
  } else {
    return [];
  }
}
