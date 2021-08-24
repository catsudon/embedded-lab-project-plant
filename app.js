var firebaseConfig = {
  apiKey: "AIzaSyBhqoH6zrLdXpadgazQXhGw3sHb42tWSe8",
  authDomain: "physics-2bc57.firebaseapp.com",
  databaseURL: "https://physics-2bc57.firebaseio.com",
  projectId: "physics-2bc57",
  storageBucket: "physics-2bc57.appspot.com",
  messagingSenderId: "1011118672315",
  appId: "1:1011118672315:web:81f2e91a32772910a8dc9e",
  measurementId: "G-W0J5HL2HYD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var database = firebase.database();
var aqours = 0;
var firebaseRef = firebase.database().ref("aqours/temp");

window.onload= changeTemp();

function changeTemp(){
  setInterval(function(){

    firebaseRef = firebase.database().ref("aqours/temp");
    firebaseRef.once("value").then(function(dataSnapshot){
      console.log(dataSnapshot.val());
      aqours = (dataSnapshot.val()+1.2).toFixed(2);
      // showData(aqours);
      document.querySelector("h2").innerHTML = aqours+" °C";

  }, 2000)

  })
};
// 
//
// $("button").click(function(){
//   changeTemp();
// });
