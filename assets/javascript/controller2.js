// This JS connects the view with model

// controller object
let controller = {

    // capture form fields
    captureFormFields: () => {
        $('body').on("click", ".button-add", () => {
            // prevents form submission
            event.preventDefault();

            // values for form field variables
            trainName = $('#train-name').val().trim();
            trainDestination = $('#train-destination').val().trim();
            firstTrainTime = $('#first-train-time').val().trim();
            trainFrequency = $('#train-frequency').val().trim();

            // console log all the entries for testing
            // console.log(trainName)
            // console.log(trainDestination)
            // console.log(firstTrainTime)
            // console.log(trainFrequency)
            controller.nextArrival();
            controller.minutesAway();

            // clear all the fields in the form
            $('.form-control').val("");

            model.pushNewTrain();
            // view.updateTrainScheduleTable();

        });
    },

    // database.ref().on('child_added', function (snapshot) {

    //     var newtrainName = snapshot.val().trainName;
    //     var newtrainDestination = snapshot.val().trainDestination;
    //     var newfirstTrainTime = snapshot.val().trainTime;
    //     var newtrainFrequency = snapshot.val().trainFrequency;

    // Time functions

    nextArrival: () => {

        // get currentTime
        let currentTime = moment();

        //Time difference
        let diffTime = moment().diff(moment(trainDepartureCoverted), "minutes");

        // Time apart (remainder)
        let timeRemainder = diffTime % trainFrequency;

        //minutes till train arrival
        let timeInMinutesTillTrain = trainFrequency - timeRemainder;

        //Next Train
        nextTrain = moment().add(timeInMinutesTillTrain, 'minutes');
        nextTrain = moment(nextTrain).format('h:mm A');
    },

    minutesAway: () => {

        // First Time (1 year setback to precede current time)
        var trainDepartureCoverted = moment(trainDeparture, "hh:mm").subtract(1, 'years');

        // get currentTime
        var currentTime = moment();

        //Time difference
        var diffTime = moment().diff(moment(trainDepartureCoverted), "minutes");

        // Time apart (remainder)
        var timeRemainder = diffTime % trainFrequency;

        //minutes till train arrival
        minutesAway = trainFrequency - timeRemainder;
        minutesAway = moment().startOf('day').add(minutesAway, 'minutes').format('HH:mm');

        return moment(minutesAway).format('HH:mm');
    },

    convertFrequency: () => {
        trainFrequency = moment().startOf('day').add(trainFrequency, 'minutes').format('HH:mm');
    }

};