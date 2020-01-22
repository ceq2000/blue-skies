// This is where all the javascript will
// live for the project that connects the view and model

// controller object
let controller = {

    // capture all the fields in the form area
    captureFormFields: () => {
        $('body').on("click", ".button-add", () => {
            // prevent form from submitting
            event.preventDefault();

            // variables from the form field values
            trainName = $('#train-name').val().trim();
            trainDestination = $('#train-destination').val().trim();
            firstTrainTime = $('#first-train-time').val().trim();
            trainFrequency = $('#train-frequency').val().trim();

            // console log all the entries for testing
            // console.log(trainNumber)
            // console.log(trainLine)
            // console.log(trainDestination)
            // console.log(trainDeparture)
            // console.log(trainFrequency)
            // console.log(trainPlatform)
            controller.nextArrival();
            controller.minutesAway();

            // clear all the fields in the form
            $('.form-control').val("");

            model.pushNewTrain();
            // view.updateTrainScheduleTable();

        });
    },

    // Time Calculation functions

    nextArrival: () => {
        // First Time (pushed back 1 year to make sure it comes before current time)
        var trainDepartureCoverted = moment(trainDeparture, "hh:mm").subtract(1, 'years');
        // get Current Time
        var currentTime = moment();
        //difference between the times
        var diffTime = moment().diff(moment(trainDepartureCoverted), "minutes");
        // Time apart (remainder)
        var timeRemainder = diffTime % trainFrequency;
        //minutes until Train
        var timeInMinutesTillTrain = trainFrequency - timeRemainder;
        //Next Train
        nextTrain = moment().add(timeInMinutesTillTrain, 'minutes');
        nextTrain = moment(nextTrain).format('h:mm A');
    },

    minutesAway: () => {
        // First Time (pushed back 1 year to make sure it comes before current time)
        var trainDepartureCoverted = moment(trainDeparture, "hh:mm").subtract(1, 'years');
        //Current Time
        var currentTime = moment();
        //difference between the times
        var diffTime = moment().diff(moment(trainDepartureCoverted), "minutes");
        // Time apart (remainder)
        var timeRemainder = diffTime % trainFrequency;
        //minutes until Train
        minutesAway = trainFrequency - timeRemainder;
        minutesAway = moment().startOf('day').add(minutesAway, 'minutes').format('HH:mm');
        return moment(minutesAway).format('HH:mm');
    },
    convertFrequency: () => {
        trainFrequency = moment().startOf('day').add(trainFrequency, 'minutes').format('HH:mm');
    }

};