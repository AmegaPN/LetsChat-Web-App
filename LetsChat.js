const firebaseConfig = {
    apiKey: "AIzaSyDG1fyUioZUEgUOCsZPGRUDqVrSTsUi070",
    authDomain: "letschat-10ba8.firebaseapp.com",
    projectId: "letschat-10ba8",
    storageBucket: "letschat-10ba8.appspot.com",
    messagingSenderId: "197445398115",
    appId: "1:197445398115:web:ed6b1cb367f73f055f5256"
  };

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "LetsChat_room.html";
}