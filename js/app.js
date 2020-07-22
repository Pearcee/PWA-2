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

$(document).ready(function(){
  $('#load_data').ready(function(){
   $.ajax({
    url:"employee.csv",
    dataType:"text",
    success:function(data)
    {
     var employee_data = data.split(/\r?\n|\r/);
     var table_data = '<table class="table table-bordered table-striped">';
     for(var count = 0; count<employee_data.length; count++)
     {
      var cell_data = employee_data[count].split(",");
      table_data += '<tr>';
      for(var cell_count=0; cell_count<cell_data.length; cell_count++)
      {
       if(count === 0)
       {
        table_data += '<th>'+cell_data[cell_count]+'</th>';
       }
       else
       {
        table_data += '<td>'+cell_data[cell_count]+'</td>';
       }
      }
      table_data += '</tr>';
     }
     table_data += '</table>';
     $('#employee_table').html(table_data);
    }
   });
  });
  
 });
 