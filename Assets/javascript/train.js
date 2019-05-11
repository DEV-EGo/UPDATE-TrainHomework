////having issues connecting into firebase, 
//i keep getting this error idk how to trouble shoot the connectino
//Uncaught TypeError: firebaseConfig.database is not a function

var firebaseConfig = {
    apiKey: "AIzaSyDGLsHl61wZtn0ONV2qWuvzeaZpSJtv2Zo",
    authDomain: "traintake3.firebaseapp.com",
    databaseURL: "https://traintake3.firebaseio.com",
    projectId: "traintake3",
    storageBucket: "traintake3.appspot.com",
    messagingSenderId: "960778923195",
    appId: "1:960778923195:web:9fa81d6a8d374ed8"
};

firebase.initializeApp(firebaseConfig);


var database = firebase.database();


$("#addtrain-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim();

    var trainDest = $("#destination").val().trim();

    var trainStart = moment($("#start").val().trim(), "HH:mm A").format("");

    var trainFrequency = $("#frequency").val().trim();

    //made the variable that is going to hold the new train
    var newtrain = {
        name: trainName,
        destination: trainDest,
        start: trainStart,
        frequency: trainFrequency
    };

    database.ref().push(newTrain);


    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newtrain.frequency);

    alert("your new train was added");

    $("#train-name").val("");
    $("#destination").val("");
    $("#start").val("");
    $("#frequency").val("");
});


database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().destination;
    var trainStart = childSnapshot.val().start;
    var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDest);
    console.log(trainFrequency);
    console.log(trainStart);

    // prettify the train ( found this on google its a tool for prettify json and pretty print HTML data in color.)
    var trainStartPretty = moment.unix(trainStart).format("hh:mm A");


    var tRemainder = moment().diff(moment.unix(trainStart), "minutes") % trainFrequency;
    var tMinutes = trainFrequency - tRemainder;
    var tArrival = moment().add(tMinutes, "m").format("hh:mm A");

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainFrequency),
        $("<td>").text(tArrival),
        $("<td>").text(tMinutes),
    );

    //append the new row to the table
    $("#train-table > tbody").append(newRow);
});
