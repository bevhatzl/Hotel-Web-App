
$(document).ready(function () {

    console.log('running');

    const localDateStorage = JSON.parse(localStorage.getItem("allDates"));
    console.log(localDateStorage.arrival);

    const $cancelButton = $(".cancel-btn");
    const $successButton = $(".success-btn");

    // Route to home page on cancel

    $("#arrive").val(localDateStorage.arrival);
    $("#depart").val(localDateStorage.depart);
    $("#totalNights").val(localDateStorage.totalNights);

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