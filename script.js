$(document).ready(function () {
    $(".click1").click(function () {
      $(".show1").toggle();
      $(".hide1").toggle();
    });
    $(".click2").click(function () {
      $(".show2").toggle();
      $(".hide2").toggle();
    });
    $(".click3").click(function () {
      $(".show3").toggle();
      $(".hide3").toggle();
    });
  
    $("#image4").hover(function () {
      $("#p4").toggle()
    });
    $("#image3").hover(function () {
      $("#p3").toggle()
    });
    $("#image2").hover(function () {
      $("#p2").toggle()
    });
    $("#image1").hover(function () {
      $("#p1").toggle()
    });
    $("#image5").hover(function () {
      $("#p5").toggle()
    });
    $("#image6").hover(function () {
      $("#p6").toggle()
    });
    $("#image7").hover(function () {
      $("#p7").toggle()
    });
    $("#image8").hover(function () {
      $("#p8").toggle()
    });
  
  
  });
  
  
  $("form").submit(function () {
    let inputname = $("input#inputname").val()
    alert("Hello " + inputname + ", we have received their message and thank you for contacting us")
  
  });
  
  /*let inptname = document.getElementById(inputname);
  inputname.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("we have received their message and thank you for contacting us")
  });*/
  
  /*function submitFunction(event){
    let inputname = document.getElementById(inputname);
    alert("Hello " + inputname + ", we have received their message and thank you for contacting us")
    event.preventDefault()
  }*/