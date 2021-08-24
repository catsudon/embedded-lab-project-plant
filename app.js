var firebaseConfig = {
  apiKey: "AIzaSyCoUr0d59hu_SVijm0id5k94LHxmf5l3SE",
  authDomain: "lol-psvupr.firebaseapp.com",
  databaseURL: "https://lol-psvupr.firebaseio.com",
  projectId: "lol-psvupr",
  storageBucket: "lol-psvupr.appspot.com",
  messagingSenderId: "406651171272",
  appId: "1:406651171272:web:e60ae151f8524122ccd0fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var vst = [0,0,0,0,0,0] // null 150 200 250 275 300++
var database = firebase.database();
var aqours = 0;
var firebaseRef = firebase.database().ref("aqours");

window.onload= function()
{
    var t = setInterval (changeTemp,2000);
}

function changeTemp(){
    firebaseRef = firebase.database().ref("aqours");
    firebaseRef.once("value").then(function(dataSnapshot){
      console.log(dataSnapshot.val());
      aqours = dataSnapshot.val();
      document.querySelector("h2").innerHTML = aqours+" °C";
      if(aqours >= 300) notify(1);
      else if(aqours >= 275 && aqours < 300) notify(2);
      else if(aqours >= 250 && aqours < 275) notify(3);
      else if(aqours >= 200 && aqours < 250) notify(4);
      else if(aqours >= 150 && aqours < 200) notify(5);
      for(i=1;i<=5;i++) if(vst[i] > 0 ) vst[i] = vst[i]-1;

    })
    return 0;
}

function notify(n)
{
  for(i=n;i>=1;i--) if(vst[i]) return 0;
  vst[n] = 60;
  var name = "sounds/" + n + ".m4a";
  console.log(name);
  var audio = new Audio(name);
  audio.play();
}