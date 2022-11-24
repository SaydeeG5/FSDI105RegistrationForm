//create the constructor ; declares with capital letter
function User(fname, lname, age, gender, phone, payment, color) {
  //list of attributes
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.gender = gender;
  this.phone = phone;
  this.payment = payment;
  this.color = color;
}

function register() {
  let inputFirstName = $("#txtFirstName").val();
  let inputLastName = $("#txtLastName").val();
  let inputAge = $("#txtAge").val();
  let inputGender = $("#txtGender").val();
  let inputPhone = $("#txtPhone").val();
  let inputPayment = $("#selPayment").val();
  let inputColor = $("#selColor").val();

  //validations

  if (!inputFirstName || !inputLastName) {
    console.error("Invalid data");
    //alert("Error: First and Last Name required");
    $(".error-msg").show();
    setTimeout(function () {
      $(".error-msg").hide();
    }, 5000);

    return; // get out of the fn, do not continue
  }

  let newUser = new User(
    inputFirstName,
    inputLastName,
    inputAge,
    inputGender,
    inputPhone,
    inputPayment,
    inputColor
  );
  console.log(newUser);

  saveUser(newUser);
  displayUser(newUser);
  $("#pnlSuccess").show();

  //hide the panel after 6 seconds
  setTimeout(function () {
    $("#pnlSuccess").hide();
  }, 6000);

  console.log("User Saved!");

  clearForm();
}

function clearForm() {
  $("#txtFirstName").val("");
  $("#txtLastName").val("");
  $("#txtAge").val("");
  $("#txtGender").val("");
  $("#txtPhone").val("");
  $("#selPayment").val("");
  $("#selColor").val("000000");
}

function displayUser(user) {
  let syntax = `
            <tr class="inputInfo">
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.payment}</td>
                <td>${user.color}</td>
                
            </tr>`;
  $("#table-user > tbody").append(syntax);
}

function loadUser() {
  //get data from local storage
  let all = getAllUsers(); // [x,x,x,x,x,x,]
  //console.log(all);
  for (let i = 0; i < all.length; i++) {
    let user = all[i];
    displayUser(user);
  }
}

function init() {
  //html is ready
  console.log("Page ready!");

  //load data
  loadUser();

  //assigns events
  $("#btnSave").click(register);
}

// wait for html to render before javascript is loaded
window.onload = init;
