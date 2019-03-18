// Initialize Firebase
var config = {
    apiKey: "AIzaSyBYtlDgwtYTxMOL-i30SczqLyy9W77YJ5o",
    authDomain: "trainhwtaketwo.firebaseapp.com",
    databaseURL: "https://trainhwtaketwo.firebaseio.com",
    projectId: "trainhwtaketwo",
    storageBucket: "trainhwtaketwo.appspot.com",
    messagingSenderId: "434907013662"
};

firebase.initializeApp(config);

var database = firebase.database();

var train = "";
var destination = "";
var time = "";
var frequency = "";


$("#submit").on("click", function (event) {

    event.preventDefault();

    trainName = $("#Train-Name-input").val().trim();
    destination = $("#Destination-input").val().trim();
    time = moment($("#Time-input").val().trim(), "HH:mm").format("LT");
    frequency = $("#Frequency-input").val().trim();

    database.ref().push({

        train: TrainName,
        destination: Destination,
        time: Time,
        frequency: Frequency,

        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });

    database.ref().on("child_added", function (childSnapshot) {

        var Frequency = $("#Frequency-Input").val();
        var Time = $("Time-input").val();

        var ConvertedTime = moment(NewTime, "HH:mm").subtract(1, "years");
        var CurrenTime = moment();

        var DifferentTime = moment().diff(moment(timeConverted), "minutes");
        var TimeRemainding = DifferentTime % Frequency;
        var minutes = Frequency - TimeRemainding;
        var Arrival = moment().add(minutes, "minutes");

        $("TrainSchedule").append({
            childSnapshot.val().train;
            childSnapshot.val().destination;
            childSnapshot.val().frequency + moment(arrival).format("hh:mm");
        }),

            function (errorObject) {
                console.log("Errors handled: " + errorObject.code);

            };
