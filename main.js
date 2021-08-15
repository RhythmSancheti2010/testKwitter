

var firebaseConfig = {
      apiKey: "AIzaSyBvbKLhxi-2I1eGkMx2aejtaeGyMRc_4ls",
      authDomain: "kwitter-18f68.firebaseapp.com",
      projectId: "kwitter-18f68",
      storageBucket: "kwitter-18f68.appspot.com",
      messagingSenderId: "189043697967",
      appId: "1:189043697967:web:61e905542ffe4dc0f899da"
    };
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();

function  logout(){
      user_name=document.getElementById("user_name").value;
      localStorage.setItem("user_name", user_name);
      window.location="index.html";
  }
