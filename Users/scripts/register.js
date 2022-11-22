//create the constructor 
function User(fname,lname,age,gender,phone,payment,color){
    //list of attributes
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

function register(){
    let inputFirstName = $("#txtFirstName").val();
    let inputLastName = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

    //validations
    if(!inputFirstName || !inputLastName) {
        console.error("Invalid data");
        return; // get out of the fn, do not continue  
    }

    let newUser = new User(inputFirstName, inputLastName, inputAge, inputGender, inputPhone, inputPayment,inputColor)
    console.log(newUser);
    
    saveUser(newUser); 
    console.log("User Saved");

    clearForm();
}

function clearForm() {
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#txtAge").val("");
    $("#txtGender").val("");
    $("#txtPhone").val("");
    $("#selColor").val("000000");
}

function init() {
    //html is ready
    console.log("Page ready!");

    //load data 

    //assigns events 
    $("#btnSave").click(register);
}

// wait for html to render before javascript is loaded
window.onload = init;

