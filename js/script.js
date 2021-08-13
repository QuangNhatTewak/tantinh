function hide() {
    const x = document.getElementById("but3");
    const y = document.getElementById("but2");
     x.style.display="block";
     y.style.display="none";
    
}
function hide2() {
    const x = document.getElementById("but3");
    const y = document.getElementById("but4");
     x.style.display="none";
     y.style.display="block";
}
function hide3() {
    const x = document.getElementById("but4");
    const y = document.getElementById("but2");
     x.style.display="none";
     y.style.display="none";
}
function show() {
    const x = document.getElementById("click");
    const y = document.getElementById("form1");
     x.style.display="none";
     y.style.display="block";

    
}
function troll() {
    const x = document.getElementById("fbut2");
    const y = document.getElementById("fbut3");
      x.style.display="none";
      y.style.display="block";
      document.getElementById("alert").innerHTML = "Cậu đừng có dối lòng nữa 😙 Hãy nói thật đi";
      document.getElementById("alert2").innerHTML = "Cậu mà thoát Web hay Block tớ là cậu đồng ý nha 😛";
    return false;
}
function troll1() {
    const x = document.getElementById("fbut3");
    const y = document.getElementById("fbut4");
     x.style.display="none";
     y.style.display="block";
     return false;
}
function troll2() {
    const x = document.getElementById("fbut2");
    const y = document.getElementById("fbut4");
     x.style.display="none";
     y.style.display="none";
     return false;
}
function inrel() {
    const x = document.getElementById("form1");
    const y = document.getElementById("yess");
    const z = document.getElementById("click");
     x.style.display="none";
     y.style.display="block";
     z.style.display="none";
     document.getElementById("audio").play();
     return false;

}