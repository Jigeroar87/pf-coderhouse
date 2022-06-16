
//MOUSEOVER Y MOUSEOUT
let items = document.getElementsByClassName('nav-link text-dark');
for(let i = 0; i < items.length; i++){
    //MOUSEOVER
    items[i].addEventListener('mouseover', () => {
        items[i].style.backgroundColor = "#D7BDE2";
        items[i].classList.add("text-white"); 
    })    
    //MOUSEOUT
    items[i].addEventListener('mouseout', () => {
        items[i].style.backgroundColor = "";
        items[i].classList.remove("text-white"); 
    })
}

//FOCUS y BLUR
let inputFocus = document.getElementById("MensajeLargo");
let msjRecomendation = document.getElementById("msjRecomendation");
//FOCUS
inputFocus.addEventListener('focus', ()=>{
    
        inputFocus.style.border = "2px solid #5a5ada";
        msjRecomendation.textContent = "*Se recomienda que el texto tenga como máximo 250 caracteres";
    
})
//BLUR
inputFocus.addEventListener('blur', ()=>{
    inputFocus.style.border = "1px solid black";
    msjRecomendation.textContent = "";
})

let boton1 = document.getElementById("1");

boton1.addEventListener("click",(event)=>{

                alert("boton1");

})

