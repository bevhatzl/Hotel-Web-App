$(document).ready(function () {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var firstNameInput = $("input#first-name-input");
    var lastNameInput = $("input#last-name-input");
    var passwordInput1 = $("input#password-input1");
    var passwordInput2 = $("input#password-input2");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            password: passwordInput1.val().trim(),
            passwordCheck: passwordInput2.val().trim()
        };

        if (!userData.email || !userData.password || !userData.firstName || !userData.lastName || !userData.passwordCheck) {
            return;
        }

        if (userData.password !== userData.passwordCheck) {
            return;
        }

        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.firstName, userdData.lastName, userData.password);
        emailInput.val("");
        passwordInput1.val("");
        passwordInput2.val("");
        firstNameInput.val("");
        lastNameInput.val("");

    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, firstName, lastName, password) {
        $.post("/api/signup", {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        })
            .then(data => {
                window.location.replace("/");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
