const firebaseConfig = {
    apiKey: "AIzaSyDG1fyUioZUEgUOCsZPGRUDqVrSTsUi070",
    authDomain: "letschat-10ba8.firebaseapp.com",
    projectId: "letschat-10ba8",
    storageBucket: "letschat-10ba8.appspot.com",
    messagingSenderId: "197445398115",
    appId: "1:197445398115:web:ed6b1cb367f73f055f5256"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"  
  });

  localStorage.setItem("room_name", room_name);
    
  window.location = "LetsChat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "LetsChat_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
