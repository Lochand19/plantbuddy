// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAx-cBX7HQLuzuvSFuqI4BGHFaMcDTlwjo",
    authDomain: "web-104-application-fb340.firebaseapp.com",
    databaseURL: "https://web-104-application-fb340.firebaseio.com",
    projectId: "web-104-application-fb340",
    storageBucket: "web-104-application-fb340.appspot.com",
    messagingSenderId: "536701504105",
    appId: "1:536701504105:web:b5ace3ad4396b64007f0f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
var user = firebase.auth().currentUser;


//sample user test

function sampleUser(){
  var user = firebase.auth().currentUser;
if (user) {
  console.log(user);
  // User is signed in.
} else {
  console.log("no one is signed in")
  // No user is signed in.
}


}

//create user database work-around :(
function createUserData(){
  firebase.auth().onAuthStateChanged(function(user) {
// console.log(user.uid)
  if (user) {
     
//     console.log(user.uid)
   
    db.collection('users').doc(user.uid).set({foo:"bar"})
    console.log("success")
  } else {
    // No user is signed in.
  }
});
}

function appRedirect(){
  window.location.href = "http://web-18.scwebsrv.com/public_html/web104/final_project/plant_buddy/plants.html"
}

