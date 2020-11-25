
$(document).ready(function () {
    const $cancelButton = $(".cancel-btn");
    const $successButton = $(".success-btn");
    // Route to home page on cancel

    // //Booking Now has been clicked - 

    // // output database infromation to the classnames
    // <ul class="list-group">
    //     <li class="list-group-item guestName">Guest Name </li>
    //     <li class="list-group-item reservationNumber">Reservation Number: </li>
    //     <li class="list-group-item arrivalDate">Arrival Date</li>
    //     <li class="list-group-item departureDate">Departure Date</li>
    //     <li class="list-group-item NumberOfDays">Number of Days</li>
    // </ul>

    //Example code

    // // This function grabs posts from the database and updates the view
    // function getPosts(author) {
    //     authorId = author || "";
    //     if (authorId) {
    //         authorId = "/?author_id=" + authorId;
    //     }
    //     $.get("/api/posts" + authorId, function (data) {
    //         console.log("Posts", data);
    //         posts = data;
    //         if (!posts || !posts.length) {
    //             displayEmpty(author);
    //         }
    //         else {
    //             initializeRows();
    //         }
    //     });
    // }


    function getbooking(booking) {
        $.get("/api/rooms" + room_number, function (data) {

        });
    };


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