
//TODO - MENU

let enlacesheader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;  

let btnclose = document.getElementById("btndiv");
let btnclose2 = document.getElementById("btnburger");
btnclose.addEventListener("click", addClase);


function addClase(){
    alert("Hola");
    /* btnclose2.classList.remove("hamburger"); */
    document.getElementById("btnburger").classList.remove("hamburger");
}

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){ 

if(semaforo){
    document.querySelectorAll(".hamburger")[0].style.color = "#1FDE82"
    console.log("Me cambiaste a false", semaforo);

        document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){

        console.log("me tocaste");
        enlacesheader.classList.remove("menudos");
        document.querySelectorAll(".hamburger")[0].style.color = "#000"
        semaforo= true;
        })
    
    semaforo = false
}else {
    console.log("En el else ======" ,semaforo);
    document.querySelectorAll(".hamburger")[0].style.color = "#000"
    semaforo= true;
}

enlacesheader.classList.toggle("menudos");
console.log("--------->",semaforo);

})
