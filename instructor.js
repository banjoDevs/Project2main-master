const firebaseConfig = {
  apiKey: "AIzaSyAyuL9sf3ruwuovpuu5eUjldJuE-fZhaek",
  authDomain: "instructor-24802.firebaseapp.com",
  projectId: "instructor-24802",
  storageBucket: "instructor-24802.appspot.com",
  messagingSenderId: "169975951785",
  appId: "1:169975951785:web:226644f1a0cb141962d4b8",
  measurementId: "G-LFTX26G1TR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let instructors = db.collection('instructor').doc('application');
let mentor = instructors.collection('mentor');

let instructor = document.getElementById("submit");

instructor.addEventListener("click", function (event) {
  

let firstname = document.getElementById("FirstName").value;
  let lastname = document.getElementById("LastName").value;
  let email = document.getElementById("Email").value;
  let phoneno = document.getElementById("ContactNumber").value;
  let address = document.getElementById("Address").value;
  let city = document.getElementById("City").value;
  let zip = document.getElementById("Zip").value;
  let location = document.getElementById("State").value;
  event.preventDefault();
      mentor.add({
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        ContactNumber: phoneno,
        Address: address,
        City: city,
        State: location,
        Zip: zip,
      })
      .then(function (docRef) {
        console.log("Instructor added mentor: ",docRef.id);
        redirect();
      })
      .catch(function (error) {
        console.error("Error adding Instructor: ", error);
      });
    });
    function redirect(){
      window.location.href = "instructor.html";
    }