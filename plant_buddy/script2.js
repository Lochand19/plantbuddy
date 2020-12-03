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


firebase.auth().onAuthStateChanged(function(user) {
//   console.log(user)
  if (user) {
//     console.log(uid)
  } else {
    // No user is signed in.
  }
});

//function to copy document to user document
function addToGardenFunction(plant){
  
  var user = firebase.auth().currentUser;
  const plantID = plant;
//   var gardenRef = db.collection('users');
  const plantData = db.collection('allplants').doc(plant);
  plantData.get().then(function(plant){
    
    
   
 const userID = user.uid; 
    db.collection('users').doc(userID).collection("myGarden").doc(plantID).set({
      name: plant.data().name,
      latin: plant.data().latin,
      zone: plant.data().zone,
      family: plant.data().family,
      shade: plant.data().shade,
      companions: plant.data().companions,
      enemies: plant.data().enemies
    });
    
//     gardenRef.doc(plant).set
  })
  
}

//logout method
const logout = document.querySelector('#logOut');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user signed out");
        window.location.replace("http://web-18.scwebsrv.com/public_html/web104/final_project/plant_buddy/index.html");
    })
})

//sample user test
function sampleUser(){
  var user = firebase.auth().currentUser;
if (user) {
  console.log(user.uid);
  
} else {
  console.log("no one is signed in")
  
}}

//edit profile function

function setDisplayName(){
  
  let name = prompt("Please enter a New Display Name");
  let photo = prompt("enter the URL of your profile photo");
  
  var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
  photoURL: photo
}).then(function() {
  location.reload()
  console.log(profile.displayName);
  console.log(profile.photoURL);
  
}).catch(function(error) {
 
});
  
}