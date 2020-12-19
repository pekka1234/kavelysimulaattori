function aloitushommat(){
  var kuva = document.getElementById("kuva");
  kuva.style.display = "none";
  var span = document.getElementById("spani").innerHTML = "0";
  var dss = document.getElementById("hävi");
  dss.style.display = "none";
  if(localStorage.getItem("kavaenn") == null){var ennatys = 0;}else{var ennatys = localStorage.getItem("kavaenn");}
  document.getElementById("enn").innerHTML = ennatys;

}
var lo = true;
var pisteet = 0;
var aika = 0;
var t = false;
var vvo = false;
function oik(){
  if(t == false){aika = 1; t = true; g(); var df = document.getElementById("ohje"); df.style.display = "none"; kuva.style.display = "block";}
if(lo){   if(vvo == false){
  if(aika < 1.11){
    if(aika > 0.89){
      aika = 0;

      pisteet = pisteet + 1;
              var span = document.getElementById("spani").innerHTML = pisteet;
      vvo = true;
        console.log(pisteet);
    }else{loetus();}
  }else{loetus();}

}else{loetus();}
}
}
function g(){
  aika = aika + 0.1;
  setTimeout(function(){g();}, 100);
  console.log(aika);
}

function vas()
{if(lo){
  if(vvo == true){
  if(aika < 1.11){
    if(aika > 0.89){
      aika = 0;
      pisteet = pisteet + 1;
        var span = document.getElementById("spani").innerHTML = pisteet;
      vvo = false;
      console.log(pisteet);
    }else{loetus();}
  }else{loetus();}

}else{loetus();}
}
}
function loetus(){
  lo = false;
  kuva.style.display = "none";
    var dss = document.getElementById("hävi");
    dss.style.display = "block";
    if(localStorage.getItem("kavaenn") == null){var ennatys = 0;}else{var ennatys = localStorage.getItem("kavaenn");}

    if(pisteet > ennatys){

    localStorage.clear("kavaenn");
    localStorage.setItem("kavaenn", pisteet); var hjh = document.getElementById("enn").innerHTML = pisteet;}
}
