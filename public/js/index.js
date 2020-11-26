$(function () {
    let arrivalDate;
    let leaveDate;
    // initialise the datepickers
    $('#arrival').datepicker();
    $('#leaving').datepicker();

    // When the date is changed...
    $('#arrival').change(function () {
        arrivalDate = $('#arrival').datepicker().val();
    });

    $('#leaving').change(function () {
        leaveDate = $('#leaving').datepicker().val();
    });

    // Function to convert the dates in the array to strings. Dates are stored as strings in the reservations table of the database to allow for checking if room is booked on those dates. 
    function datesArrayToStrings(dates) {
        const stringedDatesArray = [];
        for (i = 0; i < dates.length; i++) {
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dates[i])
            const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(dates[i])
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dates[i])
            const stringFromDate = ye + "-" + mo + "-" + da;
            stringedDatesArray.push(stringFromDate);
            console.log(stringFromDate);
        }
        return stringedDatesArray;
    }

    // Given two JavaScript `Date` objects, get a list of the days (expressed as Date objects) between those 2 dates...
    const getDatesBetweenDates = (startDate, endDate) => {
        let dates = []
        //to avoid modifying the original date
        const theDate = new Date(startDate)
        while (theDate < endDate) {
            dates = [...dates, new Date(theDate)]
            theDate.setDate(theDate.getDate() + 1)
        }
        return dates;
    }

    $('.bookNow').on('click', function () {
        // To set two dates to two variables 
        let date1 = new Date(arrivalDate);
        let date2 = new Date(leaveDate);
        // To calculate the time difference of two dates 
        let Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates 
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //To display the final no. of days (result) to let us calculate the total price based on cost per night for the room.
        console.log("Number of nights is: " + Difference_In_Days);
        //displays start date and all dates in betweeen but not the end date.
        console.log(getDatesBetweenDates(date1, date2));
        // displays the dates seperately
        let daysArray = getDatesBetweenDates(date1, date2);
        // Function to convert the dates in the array to strings. 
        let datesFinal = datesArrayToStrings(daysArray);

        var allDates = {
            arrival: datesFinal[0],
            depart: datesFinal[1],
            totalNights: Difference_In_Days
        };

        console.log("all dates: " + allDates);

        localStorage.setItem("allDates", JSON.stringify(allDates));

        console.log("localstorage: ", JSON.parse(localStorage.getItem("allDates")));

    });


});

