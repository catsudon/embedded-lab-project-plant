var database = firebase.database();

window.onload=function(){
  var firebaseRef = firebase.database().ref("temp");
  firebaseRef.once("value").then(function(dataSnapshot){
    console.log(dataSnapshot.val())
    var aqours = dataSnapshot.val().toFixed(2)
    // showData(aqours);
    document.querySelector("h2").innerHTML = aqours+" °C";
  })
}

$("button").click(function(){
  location.reload();
})


function showData(aqours){
  $("h2").innerHTML = aqours;
}
