var firebaseConfig = {
      apiKey: "AIzaSyCIss4jflnpkQUzl4SnuRd4N06C1Uj-jz4",
      authDomain: "kwitter-c2629.firebaseapp.com",
      databaseURL: "https://kwitter-c2629-default-rtdb.firebaseio.com",
      projectId: "kwitter-c2629",
      storageBucket: "kwitter-c2629.appspot.com",
      messagingSenderId: "213459072426",
      appId: "1:213459072426:web:f06300cee718ae601927d3"
    };
    
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'> </h4>";
         message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
         like_button = "<button class='btn btn-warning' id=" + firbase_message_id + " value = " + like + " onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span> </button> <hr>";
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
} 

function updateLike(messsage_id)
{
      console.log("clicked on like button - " + messsage_id);
      button_id = messsage_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(messsage_id).update({
      like : updated_likes
      });
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
