const { initialize } = require("passport");
const { format } = require("sequelize/types/lib/utils");

$(document).ready(function () {

    const localDateStorage = JSON.parse(localStorage.getItem("allDates"));

    const $cancelButton = $(".cancel-btn");
    const $successButton = $(".success-btn");
    const arrive = $(".arrive");
    const depart = $(".depart");
    const totalNights = $(".totalNights");

    // Route to home page on cancel
    $(".form").append()




    arrive.value(localDateStorage.arrival);
    depart.value(localDateStorage.depart);
    totalNights.value(localDateStorage.totalNights);


    const handleCancelRoom = function () {
        // Route to Home page
        console.log('Button click success');
        window.location.href = "/"
    };

    // Route to home page on cancel
    const handleCompleteRoom = function () {
        //Route to complete reg
        console.log('Button click success');
        window.location.href = "/success.html"
    };

    //On click for cancel Button 
    $cancelButton.on("click", handleCancelRoom);
    $successButton.on("click", handleCompleteRoom);


});