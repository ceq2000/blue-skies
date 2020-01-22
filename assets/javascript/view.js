// This is where most of the JS & jQuery will live
// for the project that will manipulate our webpage

// On Page Load
<<<<<<< HEAD
$(document).ready(function () {

    controller.captureFormFields();

    modelObject.initialDatabasePull();
    setInterval(function () { modelObject.initialDatabasePull() }, 60000);

    view.updateCurrentTime();
    setInterval(function () { view.updateCurrentTime() }, 1000);
=======
$(document).ready(function(){

controller.captureFormFields();
model.initialDatabasePull();
setInterval(function() {model.initialDatabasePull()}, 60000);
view.updateCurrentTime();
setInterval(function() {view.updateCurrentTime()}, 1000);
>>>>>>> 0f6552cdc1c9a413722c0397f8fc70aff8464abb

});

// view object
var view = {

<<<<<<< HEAD
    // function to update the Train Schedule Table

    updateTrainScheduleTable: () => {

        controller.convertFrequency();

        $('#train-schedule-body').append(
            '<tr>' +
            '<th scope="row">' + trainNumber + '</th>' +
            '<td>' + trainLine + '</td>' +
            '<td>' + trainDestination + '</td>' +
            '<td>' + nextTrain + '</td>' +
            '<td>' + minutesAway + '</td>' +
            '<td>' + trainFrequency + '</td>' +
            '<td>' + trainPlatform + '</td>' +
            '</tr>'
        );
    },
    updateCurrentTime: () => {
        $('.currentTime').text(moment().format('h:mm:ss A'))
    }
=======
// function to update the Train Schedule Table

updateTrainScheduleTable: () => {

controller.convertFrequency();

$('#train-schedule-body').append(
'<tr>'+
    '<th scope="row">' + trainNumber + '</th>' +
    '<td>' + trainLine + '</td>' +
    '<td>' + trainDestination + '</td>' +
    '<td>' + nextTrain + '</td>' +
    '<td>' + minutesAway + '</td>' +
    '<td>' + trainFrequency + '</td>' +
    '<td>' + trainPlatform + '</td>' +
    '</tr>'
);
},
updateCurrentTime: () => {
$('.currentTime').text(moment().format('h:mm:ss A'))
}
>>>>>>> 0f6552cdc1c9a413722c0397f8fc70aff8464abb
};