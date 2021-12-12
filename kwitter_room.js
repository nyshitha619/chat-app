var firebaseConfig = {
    apiKey: "AIzaSyAZIkRb1FvahbNdWw2zFnedGEClTS9BRaE",
    authDomain: "chat-f611c.firebaseapp.com",
    databaseURL: "https://chat-f611c-default-rtdb.firebaseio.com",
    projectId: "chat-f611c",
    storageBucket: "chat-f611c.appspot.com",
    messagingSenderId: "751525676075",
    appId: "1:751525676075:web:18b10f2cf20854a96d166e"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name -" + Room_names);
            row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout() {
    console.log(name);
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}