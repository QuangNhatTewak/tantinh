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
     y.style.display="inline";
}
function show() {
    const x = document.getElementById("click");
    const y = document.getElementById("form1");
     x.style.display="none";
     y.style.display="block";

    
}
function valid() {
    const x = document.getElementById("formanw");
    const y = document.getElementById("form1");
    const z = document.getElementById("click");
    const c = document.getElementById("yess");
     z.style.display-"none";
     if (x.value == "") {
         document.getElementById("alert").innerHTML = "Cậu phải nhập có hoặc không nha 🙁";
         return false;
     }
    if (x.value == "Có" || x.value == "có" || x.value == "Coá" || x.value == "Co" || x.value == "coá" 
    || x.value == "co" || x.value == "Coa" || x.value == "coa" || x.value == "yes" || x.value == "Yes"
    || x.value == "yup" || x.value == "Yup" || x.value == "Yeah" || x.value == "yeah") {
        y.style.display="none";
        z.style.display="none";
        c.style.display="block";
        return false;
    } else {
        document.getElementById("alert").innerHTML = "Cậu đừng có dối lòng nữa 😙 Hãy nói thật đi, nói có đi 😚 ";
        return false;
    }
}