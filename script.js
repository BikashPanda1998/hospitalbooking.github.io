let mbtn=document.querySelector("#menu-btn");
let navbar=document.querySelector(".navbar");

mbtn.onclick=()=>{
   
    navbar.classList.toggle("active");
    
}
window.onscroll=()=>{;
    mbtn.classList.remove("fa-xmark");
    navbar.classList.remove("active");
}