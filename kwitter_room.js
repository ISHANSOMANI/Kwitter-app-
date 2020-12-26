// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDydVOCJXm5Zc-LZB2OL2HIM1FginXRzcQ",
      authDomain: "kwitter-b5421.firebaseapp.com",
      databaseURL:"https://kwitter-b5421-default-rtdb.firebaseio.com/",
      projectId: "kwitter-b5421",
      storageBucket: "kwitter-b5421.appspot.com",
      messagingSenderId: "450653250544",
      appId: "1:450653250544:web:28c5def89e1314e04ef335"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");

    document.getElementById("username").innerHTML = "Welcome " + username + "!";

    function addRoom(){
      roomname = document.getElementById("roomname").value ;

      firebase.database().ref("/").child(roomname).update({
            purpose : "adding room name"

      });
      localStorage.setItem("roomname",roomname);

      window.location  = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("Room_names -" + Room_names);
      row = "<div class='roomname' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+ roomname + "</div> <hr>"
document.getElementById("output").innerHTML+= row;
      

      });});}


getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location = "kwitter_room.html";
}

function LogOut(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html";
}
