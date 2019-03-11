var config = {
    apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
    authDomain: "fir-recent-user.firebaseapp.com",
    databaseURL: "https://fir-recent-user.firebaseio.com",
    storageBucket: "fir-recent-user.appspot.com"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

  var TrainName = "";
  var Destination = "";
  var FirstTrainTime = 0;
  var Frequency = "";


  $("#add-user").on("click", function(event) {
      event.preventDefault();
      
      TrainName = $("#TrainName-input").val().trim();
      Destination = $("#Destinatino-input").val().trim();
      FirstTrainTime = $("#FirstTrainTime-input").val().trim();
      Frequency = $("#Frequency-input").val().trim();

      database.ref().set({
          TrainName: TrainName,
          Destination: Destination,
          FirstTrainTime: FirstTrainTime,
          Frequency: Frequency
      });
  });
  database.ref().on("value", function(snapshot) {

    console.log(snapshot.val());
    console.log(snapshot.val().TrainName);
    console.log(snapshot.val().Destination);
    console.log(snapshot.val().FirstTrainTime);
    console.log(snapshot.val().Frequency);

  }, function(errorObject){
      console.log("errors handled: "+ errorObject.code);
  });