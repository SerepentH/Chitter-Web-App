var firebaseConfig = {
      apiKey: "AIzaSyBAWHzYkuCvrp-UK2ZOLDmMxFRV1S0RGd0",
      authDomain: "chitter-web-app.firebaseapp.com",
      databaseURL: "https://chitter-web-app-default-rtdb.firebaseio.com",
      projectId: "chitter-web-app",
      storageBucket: "chitter-web-app.appspot.com",
      messagingSenderId: "23073813153",
      appId: "1:23073813153:web:5871fac237ac8d698c76e0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#" + Room_names+" </div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="chitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="chitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

   

