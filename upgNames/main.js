$(document).ready(function() {
  //var apiUrl = "uinames.com/api/?region=sweden";

  // $(".male").on("click", function(e){
  //   e.preventDefault();
  //   $.get(apiUrl, function(data){
  //     console.log(apiUrl);
  //     addData(data);
  //   });
  // });
  $(".male").on("click", function(e){
    e.preventDefault();
    getData();
  });

  $(".woman").on("click", function(e){
    e.preventDefault();
    getDataFe();
  });

  function getData(){
    $.ajax({
      type: 'GET',
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
      //  console.log(data.results[0].gender);
        if(data.results[0].gender === "male"){
          $("h2").css("color", "rgb(9, 19, 110)");
          $("#name").empty();
          $(".text").empty();
          $(".text").append("Här är ditt slumpmässiga manliga namn:");
          var maleName = data.results[0].name.first + " " + data.results[0].name.last;
          $("#name").append(maleName);
          // console.log("man");
          // console.log(data.results[0].name.first);
          // console.log(data.results[0].name.last);
        }else{
          getData();
        }

      },
      error: function(){
        console.log("error");
      }
    });
  }

  function getDataFe(){
    $.ajax({
      type: 'GET',
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {

        if(data.results[0].gender === "female"){
          $("#name").empty();
          $(".text").empty();
          $(".text").append("Här är ditt slumpmässiga kvinnliga namn:");
          $("h2").css("color", "rgb(129, 0, 46)");
          var womanName = data.results[0].name.first + " " + data.results[0].name.last;
          $("#name").append(womanName);
          // console.log("kvinna");
          // console.log(data.results[0].name.first);
          // console.log(data.results[0].name.last);
        }else{
          getDataFe();
        }

      },
      error: function(){
        console.log("error");
      }
    });
  }






});
