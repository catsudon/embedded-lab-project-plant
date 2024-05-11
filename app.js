const firebaseConfig = {
  apiKey: "AIzaSyDCDgDxZumV0o2z90bsIq3RNQGF1k7zZ9A",
  authDomain: "embedded-summ.firebaseapp.com",
  databaseURL: "https://embedded-summ-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "embedded-summ",
  storageBucket: "embedded-summ.appspot.com",
  messagingSenderId: "733110752658",
  appId: "1:733110752658:web:7c746315f564c852309d4b",
  measurementId: "G-3TG2WPPJGG"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var humidity = 0;
var light = 0;
var lastUpdate = 0;
var firebaseRef = firebase.database().ref("/humidity");


function update() {

  firebaseRef = firebase.database().ref("/humidity");
  firebaseRef.once("value").then(function (dataSnapshot) {
    console.log(dataSnapshot.val());
    humidity = (dataSnapshot.val()).toFixed(2);
    document.querySelector("#humidity").innerHTML = humidity + " %";
  })

  firebaseRef = firebase.database().ref("/light");
  firebaseRef.once("value").then(function (dataSnapshot) {
    console.log(dataSnapshot.val());
    light = (dataSnapshot.val()).toFixed(2);
    document.querySelector("#light").innerHTML = light + " %";
  })

  firebaseRef = firebase.database().ref("/lastUpdate");
  firebaseRef.once("value").then(function (dataSnapshot) {
    console.log(dataSnapshot.val());
    lastUpdate = (dataSnapshot.val()).toFixed(2);
    document.querySelector("#time").innerHTML = lastUpdate;
  })
};

update();
var interval = setInterval(update, 200);
