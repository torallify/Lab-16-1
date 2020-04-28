// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


    function validateForm() {
        let result = validateFirstName() & validateLastName() & validatePassword() & validateEmail;
        if (!result) {
        document.querySelector("#Feedback").innerHTML = "Your form has errors. See above.";
    return false;
        } else {
            return true;
}
}
    function validateFirstName() {
        let name = document.querySelector("#FirstName").value;
    let warning = '';
        if (!name || name.length < 2) {
        warning += 'First Name is empty or too short. ';
        } else if (name.length > 30) {
        warning += 'First Name is too long. ';
}
        if (warning == '') {
        document.querySelector("#FirstNameLabel").classList.remove('red');
    document.querySelector("#FirstName").classList.remove('red-bg');
    document.querySelector("#FirstNameFeedback").innerHTML = '';
    return true;
        } else {
        //display the warning in the span set up for it
        document.querySelector("#FirstNameFeedback").innerHTML = warning;
    //add a CSS class to an element
    document.querySelector("#FirstName").classList.add('red-bg');
    document.querySelector("#FirstNameLabel").classList.add('red');
    return false;
}
}
    function validateLastName() {
        let name = document.querySelector("#LastName").value;
    let warning = '';
        if (!name || name.length < 2) {
        warning += 'Last Name is empty or too short. ';
        } else if (name.length > 30) {
        warning += 'Last Name is too long. ';
}
        if (warning == '') {
        document.querySelector("#LastNameLabel").classList.remove('red');
    document.querySelector("#LastName").classList.remove('red-bg');
    document.querySelector("#LastNameFeedback").innerHTML = '';
    return true;
        } else {
        //display the warning in the span set up for it
        document.querySelector("#LastNameFeedback").innerHTML = warning;
    //add a CSS class to an element
    document.querySelector("#LastName").classList.add('red-bg');
    document.querySelector("#LastNameLabel").classList.add('red');
    return false;
}
}


    function validatePassword(){
        let password = document.querySelector("#Password").value;
    let confirm_password = document.querySelector("#ConfirmPassword").value;

        if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
        confirm_password.setCustomValidity('');
}


}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

   function validateEmail(){      
       const emailPattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, 4}$/";
    let email = document.querySelector("#Email").value;
    return emailPattern.test(email);
 }

