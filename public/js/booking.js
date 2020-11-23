const $cancelButton = $(".cancel-btn");
const $successButton = $(".success-btn");
// Route to home page on cancel

const handleCancelRoom = function () {
    // Route to Home page
    console.log('Button click success');
};

// Route to home page on cancel
const handleCompleteRoom = function () {
    //Route to complete reg
    console.log('Button click success');
};

//On click for cancel Button 
$cancelButton.on("click", handleCancelRoom);
$successButton.on("click", handleCompleteRoom);