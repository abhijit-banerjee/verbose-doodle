
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAUyf1AjSNaaToEt7OdOqWlms0iteTSh_A",
      authDomain: "kwitter-new-58eeb.firebaseapp.com",
      databaseURL: "https://kwitter-new-58eeb-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-58eeb",
      storageBucket: "kwitter-new-58eeb.appspot.com",
      messagingSenderId: "263106908469",
      appId: "1:263106908469:web:a90ce69b92f54f57cafc7c",
      measurementId: "G-C97H7SSYKJ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Hi " + user_name + "!";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
        firebase.database() .ref("/").child(room_name).update({
              purpose : "adding room name"
        }); 
        localStorage.setItem("room_name" , room_name);
        window.location = "kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" +    room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";    
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}