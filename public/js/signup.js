$(document).ready(function () {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var firstNameInput = $("input#first-name-input");
    var lastNameInput = $("input#last-name-input");
    var passwordInput1 = $("input#password-input1");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            password: passwordInput1.val().trim(),
            isAdmin: $("input#is-admin").is(":checked")
        };

        if (!userData.email || !userData.password || !userData.firstName || !userData.lastName) {
            return;
        }

        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.firstName, userData.lastName, userData.password, userData.isAdmin);
        emailInput.val("");
        passwordInput1.val("");
        firstNameInput.val("");
        lastNameInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, firstName, lastName, password, isAdmin) {
        $.post("/api/signup", {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            isAdmin: isAdmin
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
