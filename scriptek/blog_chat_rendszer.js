// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  child,
  onValue,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMS4xdjfExbDlpCXwMWMz-RS-Wq5ESb0I",
  authDomain: "adminmukodo.firebaseapp.com",
  databaseURL:
    "https://adminmukodo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adminmukodo",
  storageBucket: "adminmukodo.appspot.com",
  messagingSenderId: "283809712018",
  appId: "1:283809712018:web:af723513ea9f8b53b9e34b",
};

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let oraperc = date.getHours() + ":" + date.getMinutes();

var megfelelo_datum = `${year}.${month}.${day} -> ${oraperc}`;

const app = initializeApp(firebaseConfig);
const datasbase = getDatabase(app);
var neved = document.getElementById("name").value;

submit.addEventListener("click", (e) => {
  var message = document.getElementById("message").value;
  neved = document.getElementById("name").value;
  neved = neved.toLowerCase();
  var name = neved;

  const id = push(child(ref(datasbase), "messages")).key;
  if (name.trim().length === 0) {
    alert("Kérlek írj valamit a 'Neved' mezőbe!");
  } else if (name == "dadrian" || name == "abeni" || name == "bmartin") {
    alert(`Meg kell adnod ${name} jelszavát, hogy üzenetet küldhess!`);
    var jelszo = prompt("jelszó: ");
    if (name == "dadrian") {
      if (jelszo == "adrian123") {
        set(ref(datasbase, "messages/" + id), {
          name: name,
          message: message,
          datum: megfelelo_datum,
        });
      } else {
        alert("Hibás jelszó!");
      }
    } else if (name == "bmartin") {
      if (jelszo == "martin123") {
        set(ref(datasbase, "messages/" + id), {
          name: name,
          message: message,
          datum: megfelelo_datum,
        });
      } else {
        alert("Hibás jelszó!");
      }
    } else if (name == "abeni") {
      if (jelszo == "benjamin123") {
        set(ref(datasbase, "messages/" + id), {
          name: name,
          message: message,
          datum: megfelelo_datum,
        });
      } else {
        alert("Hibás jelszó!");
      }
    }
  } else if (message.trim().length === 0) {
    alert("Kérlek írj valamit az 'Üzenet' mezőbe!");
  } else if (message.trim().length >= 50) {
    alert("Kérlek ettől rövidebb üzenetet írj!");
  } else {
    date = new Date();
    oraperc = date.getHours() + ":" + date.getMinutes();
    megfelelo_datum = `${year}.${month}.${day} -> ${oraperc}`;
    set(ref(datasbase, "messages/" + id), {
      name: name,
      message: message,
      datum: megfelelo_datum,
    });
  }
  document.getElementById("message").value = "";
});

const newMsg = ref(datasbase, "messages/");
onChildAdded(newMsg, (data) => {
  if (
    data.val().name == "dadrian" ||
    data.val().name == "bmartin" ||
    data.val().name == "abeni"
  ) {
    var adminID = "adminID";
  } else {
    var adminID = "nincs";
  }

  var divData = `<div class="ember">
  <div class="row row-cols-3 text-center mb-2">

    <div class="col nev bold"><span id="${adminID}">${
    data.val().name
  }</span></div>
    <div class="col uzenet">${data.val().message}</div>
    <div class="col datum">${data.val().datum}</div>
  </div>

        </div>
  
  
  `;
  var d1 = document.getElementById("bodyContent");
  //d1.insertAdjacentHTML("beforebegin", divData);
  d1.insertAdjacentHTML("afterEnd", divData);
});

oraperc = date.getHours() + ":" + date.getMinutes();

function torles() {
  console.log("megnyomva!");
  document.getElementById("max_uzenet").innerHTML = ``;
}

document.getElementById("submit").addEventListener("click", torles);
