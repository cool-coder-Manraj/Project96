localStorage.getItem(user_name)

function addRoom()
{
    document.getElementById("add_room_btn");
    localStorage.setItem("add_room_btn");
    window.location("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

function redirectToRoomName()
{
    localStorage.setItem("room_name");
    window.location("kwitter_page.html");
}
});});}
getData();