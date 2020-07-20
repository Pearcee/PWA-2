const sw = "sw.js";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register(sw)
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}