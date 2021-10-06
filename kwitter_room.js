var firebaseConfig = {
    apiKey: "AIzaSyCHk3bTc09LHR3_dtkN3FEkmSWZWHjYqd4",
    authDomain: "chitchatter1-df0ee.firebaseapp.com",
    databaseURL: "https://chitchatter1-df0ee-default-rtdb.firebaseio.com",
    projectId: "chitchatter1-df0ee",
    storageBucket: "chitchatter1-df0ee.appspot.com",
    messagingSenderId: "113309113876",
    appId: "1:113309113876:web:b872e1bbc9ec45db6ed101"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User_name");

document.getElementById("user_name").innerHTML ="Welcome "+user_name+"!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() 
{  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names +"</div><hr>";
      
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}