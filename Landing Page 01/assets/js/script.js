'strict'

let menuBtn = document.getElementById("menu-btn");
let sideNav = document.getElementById("side-nav");

sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-250px";
    }
}
