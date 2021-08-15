function hide() {
    const x = document.getElementById("but3");
    const y = document.getElementById("but2");
     x.style.display="block";
     y.style.display="none";
     document.getElementById("audio2").play();
    
}
function hide2() {
    const x = document.getElementById("but3");
    const y = document.getElementById("but4");
     x.style.display="none";
     y.style.display="block";
     document.getElementById("audio2").play();
}
function hide3() {
    const x = document.getElementById("but4");
    const y = document.getElementById("but2");
     x.style.display="none";
     y.style.display="none";
     document.getElementById("audio2").play();
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
      document.getElementById("alert").innerHTML = "😍";
      document.getElementById("alert2").innerHTML = "Cậu mà thoát trang Web này hay Block tớ là cậu đồng ý nha 😛";
      document.getElementById("audio2").play();
      return false;
}
function troll1() {
    const x = document.getElementById("fbut3");
    const y = document.getElementById("fbut4");
     x.style.display="none";
     document.getElementById("audio2").play();
     y.style.display="block";
     return false;
}
function troll2() {
    const x = document.getElementById("fbut2");
    const y = document.getElementById("fbut4");
     x.style.display="none";
     y.style.display="none";
     document.getElementById("audio2").play();
     return false;
}
function inrel() {
    const x = document.getElementById("fbut1alt");
    const y = document.getElementById("fbut1");
    const z = document.getElementById("click");
    const c = document.getElementById("challen");
    const v =  document.getElementById("fbut2");
    const b = document.getElementById("fbut2alt");
     v.style.display="inline";
     b.style.display="none";
     z.style.display="none";
     c.innerHTML = "";
     c.innerHTML = "Cậu rất giống với con dâu tương lai của ba mẹ tớ =))";
     y.style.display="none";
     x.style.display="inline";
     document.getElementById("audio3").play();
     document.getElementById("alert2").innerHTML = "";
     document.getElementById("des").innerHTML = "Nếu cậu không phiền thì làm người yêu tớ nhé 😳";
     return false;

}
function inrel2() {
    document.getElementById("click").style.display="none";
    document.getElementById("yess").style.display="block";
    document.getElementById("form1").style.display="none";
    document.getElementById("audio").play();
    document.getElementById("audio3").pause();
    return false;

}
function trollalt() {
    document.getElementById("alert2").innerHTML="Sao cậu không muốn ? Cậu sẽ rất bất ngờ đấy !";
    alert("Sao cậu không muốn ? Cậu sẽ rất bất ngờ đấy !");
    return false;
}
