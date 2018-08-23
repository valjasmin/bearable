function showfood(){
  document.getElementById("food").style.display = "block";
}

function showtransport(){
  document.getElementById("transport").style.display = "block";
}

function showperson(){
  document.getElementById("person").style.display = "block";
}

function submit(){
  var income = parseInt(document.getElementById("incomei").value);
  var food = parseInt(document.getElementById("foodi").value);
  var transportation = parseInt(document.getElementById("transportation").value);
  var personal = parseInt(document.getElementById("personal").value);

  var spent=(((food+transportation+personal)/income)*100)
  var jarpercent= 100-spent
if (jarpercent== 0){
    document.getElementById("img0").style.display= "block";
    document.getElementById("pic0").style.display= "block";
  }
if (jarpercent<= 10 && jarpercent!=0){
  document.getElementById("img1").style.display= "block";
  document.getElementById("pic10").style.display= "block";
}
if (jarpercent<= 20 && jarpercent> 10){
  document.getElementById("img2").style.display= "block";
  document.getElementById("pic20").style.display= "block";
}
if (jarpercent<= 30 && jarpercent> 20){
  document.getElementById("img3").style.display= "block";
  document.getElementById("pic30").style.display= "block";
}if (jarpercent<= 40 && jarpercent> 30){
  document.getElementById("img4").style.display= "block";
  document.getElementById("pic40").style.display= "block";
}if (jarpercent<= 50 && jarpercent> 40){
  document.getElementById("img5").style.display= "block";
  document.getElementById("pic50").style.display= "block";
}if (jarpercent<= 60 && jarpercent> 50){
  document.getElementById("img6").style.display= "block";
  document.getElementById("pic60").style.display= "block";
}if (jarpercent<= 70 && jarpercent> 60){
  document.getElementById("img7").style.display= "block";
  document.getElementById("pic70").style.display= "block";
}if (jarpercent<= 80 && jarpercent> 70){
  document.getElementById("img8").style.display= "block";
document.getElementById("pic20").style.display= "block";
}if (jarpercent<= 90 && jarpercent> 80){
  document.getElementById("img9").style.display= "block";
document.getElementById("pic10").style.display= "block";
}if (jarpercent= 100 && jarpercent> 90){
  document.getElementById("img10").style.display= "block";
}
}
