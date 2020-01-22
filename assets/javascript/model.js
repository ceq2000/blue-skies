<<<<<<< HEAD
// All data and global variables live here

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyALCo7RhZybW9cWwgEWEkdr19jOq9R2OGs",
    authDomain: "train-scheduler-f365b-f6245.firebaseapp.com",
    databaseURL: "https://train-scheduler-f365b-f6245.firebaseio.com",
    projectId: "train-scheduler-f365b-f6245",
    storageBucket: "train-scheduler-f365b-f6245.appspot.com",
    messagingSenderId: "440660180208",
    appId: "1:440660180208:web:60b5f9ea206732d9c3d635"
};

firebase.initializeApp(config);

const database = firebase.database();

// Form Variables to be passed between objects

let trainName;
let trainDestination;
let firstTrainTime;
let trainFrequency;
let currentTime = moment();
=======
// This is where all the data and global variables will 
// live for the project

// Initialize Firebase
var config = {
    apiKey: "AIzaSyApIvO1MNIvE_WNeyS7jFrDHuI4BQ56rFE",
    authDomain: "train-scheduler-f365b.firebaseapp.com",
    databaseURL: "https://train-scheduler-f365b.firebaseio.com",
    projectId: "train-scheduler-f365b",
    storageBucket: "",
    messagingSenderId: "471705960814"
};
firebase.initializeApp(config);

var database = firebase.database();

// Form Variables to be passed between objects
var trainNumber;
var trainLine;
var trainDestination;
var trainDeparture;
var nextTrain;
var minutesAway;
var trainFrequency;
var trainTiming;
var trainPlatform;
var currentTime = moment();
>>>>>>> 0f6552cdc1c9a413722c0397f8fc70aff8464abb
console.log('CURRENT TIME: ' + moment(currentTime).format('hh:mm:ss A'));

// model object with functions for pulling/pushing new data to the database

<<<<<<< HEAD
const modelObject = {

    pushNewTrain: () => {

        database.ref().push({

            trainName: trainName,
            trainDestination: trainDestination,
            firstTrainTime: firstTrainTime,
            trainFrequency: trainFrequency,
            fbDateAdded: firebase.database.ServerValue.TIMESTAMP

        });

        modelObject.pullChild();

    },

    pullChild: () => {

        var filter = database.ref().orderByChild("fbDateAdded").limitToLast(1)

        filter.once("child_added", function (childSnapshot) {

            trainName = childSnapshot.val().trainName
            trainDestination = childSnapshot.val().trainDestination
            firstTrainTime = childSnapshot.val().firstTrainTime
            trainFrequency = childSnapshot.val().trainFrequency

            //console.log(trainName, trainDestination, firstTrainTime, trainFrequency)
=======
var model = {

    pushNewTrain: () => {


        database.ref().push({

            trainDeparture: trainDeparture,
            trainDestination: trainDestination,
            trainFrequency: trainFrequency,
            trainLine: trainLine,
            trainNumber: trainNumber,
            trainPlatform: trainPlatform,
            dateAdded: firebase.database.ServerValue.TIMESTAMP

        });

        model.pullChildFromDatabase();

    },

    pullChildFromDatabase: () => {

        var filter = database.ref().orderByChild("dateAdded").limitToLast(1)

        filter.once("child_added", function (childSnapshot) {

            trainNumber = childSnapshot.val().trainNumber
            trainLine = childSnapshot.val().trainLine
            trainDestination = childSnapshot.val().trainDestination
            trainDeparture = childSnapshot.val().trainDeparture
            trainFrequency = childSnapshot.val().trainFrequency
            trainPlatform = childSnapshot.val().trainPlatform

            //console.log(trainNumber, trainLine, trainDestination, trainDeparture, trainFrequency, trainPlatform)
>>>>>>> 0f6552cdc1c9a413722c0397f8fc70aff8464abb

            view.updateTrainScheduleTable();
        });

    },

    initialDatabasePull: () => {

        database.ref().on("value", function (snapshot) {
<<<<<<< HEAD
            var allTrains = snapshot.val();

            //console.log(trainParameters)
            console.log(trainName)
            console.log(trainDestination)
            console.log(firstTrainTime)
            console.log(trainFrequency)

            $('#train-schedule-body').empty();

            for (var index in allTrains) {
                trainName = allTrains[index].trainName
                trainDestination = allTrains[index].trainDestination
                firstTrainTime = allTrains[index].firstTrainTime
                trainFrequency = allTrains[index].trainFrequency

                //console.log(trainName, trainDestination, firstTrainTime, trainFrequency)
=======
            var trains = snapshot.val();

            //console.log(trains);

            $('#train-schedule-body').empty();

            for (var index in trains) {
                trainNumber = trains[index].trainNumber
                trainLine = trains[index].trainLine
                trainDestination = trains[index].trainDestination
                trainDeparture = trains[index].trainDeparture
                trainFrequency = trains[index].trainFrequency
                trainPlatform = trains[index].trainPlatform

                //console.log(trainNumber, trainLine, trainDestination, trainDeparture, trainFrequency, trainPlatform)
>>>>>>> 0f6552cdc1c9a413722c0397f8fc70aff8464abb
                controller.nextArrival();
                controller.minutesAway();
                view.updateTrainScheduleTable();
            };

        }, function (errorObject) {
            console.log("Errors handled: " + errorObject.code);

        });
    }

}
