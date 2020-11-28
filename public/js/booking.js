
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

    //On click for cancel Button 
    $cancelButton.on("click", handleCancelRoom);


    $successButton.on("click", function (event) {
        event.preventDefault();

        var reservationData = {
            UserId: $("#userId").val(),
            RoomId: $("#roomNum").val(),
            arrival_date: $("#arrive").val(),
            depart_date: $("#depart").val(),
            num_night: $("#totalNights").val(),
        };

        console.log('===================================================');
        console.log('reservation data: ', reservationData);
        console.log('===================================================');
        confirmBooking(reservationData);
    });

    function confirmBooking(obj) {
        $.post("/api/booking", {
            UserId: obj.UserId,
            RoomId: obj.RoomId,
            arrival_date: obj.arrival_date,
            depart_date: obj.depart_date,
            num_night: obj.num_night
        })
            .then(data => {
                window.location.replace("/success");
            })
            .catch(err => {
                console.log(err);
            });
    }

});


