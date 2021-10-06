// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHk3bTc09LHR3_dtkN3FEkmSWZWHjYqd4",
    authDomain: "chitchatter1-df0ee.firebaseapp.com",
    databaseURL: "https://chitchatter1-df0ee-default-rtdb.firebaseio.com",
    projectId: "chitchatter1-df0ee",
    storageBucket: "chitchatter1-df0ee.appspot.com",
    messagingSenderId: "113309113876",
    appId: "1:113309113876:web:b872e1bbc9ec45db6ed101"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("User_name", username);
    window.location="kwitter_room.html";
}