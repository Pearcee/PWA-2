const sw = "sw.js";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function loadJSON(callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");

        xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    // Required use of an anonymous callback as .open will NOT return 
                    // a value but simply returns undefined in asynchronous mode
                    callback(xobj.responseText);
                } else {
                    callback("[{\"Nothing\"}]");
                }
            };

        xobj.open('GET', 'Persons.json', true);
        // Maybe you require use of an unknown origin.
        /*xobj.setRequestHeader("Access-Control-Allow-Origin","*");*/
        xobj.send(null);  
    };

loadJSON(function(response) {
        // Parse JSON string into object
        //document.getElementById("demo").innerHTML = JSON.parse(response);
        // Parse JSON array string into object
        document.getElementById("demo").innerHTML = JSON.stringify(response);
    });


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register(sw)
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}