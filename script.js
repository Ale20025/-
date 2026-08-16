let Boton=document.getElementById("Continuar");
let Musica=document.getElementById("Musica");
let Sonido1=document.getElementById("Sonido1");
let Pistas=[
    document.getElementById("Pista1"),
    document.getElementById("Pista2"),
    document.getElementById("Pista3"),
    document.getElementById("Pista4"),
    document.getElementById("Pista5"),
    document.getElementById("Pista6"),
    document.getElementById("Pista7"),
    document.getElementById("Pista8")
]
let Alerta=document.getElementById("Alerta");
let Contraseña=document.getElementById("Contraseña");

Boton.addEventListener("click", function(){
    Sonido1.play();
    setTimeout(function(){
        Musica.play();
        Alerta.style.display="block"
        Boton.style.display="none";
        Pistas[0].style.display="block";
        Pistas[0].style.opacity="1";
        Pistas[1].style.display="none";
        Pistas[1].style.opacity="0";
        Pistas[2].style.display="none";
        Pistas[2].style.opacity="0";
        Pistas[3].style.display="none";
        Pistas[3].style.opacity="0";
        Pistas[4].style.display="none";
        Pistas[4].style.opacity="0";
        Pistas[5].style.display="none";
        Pistas[5].style.opacity="0";
        Pistas[6].style.display="none";
        Pistas[6].style.opacity="0";
        Pistas[7].style.display="none";
        Pistas[7].style.opacity="0";

        Contraseña.textContent="";
    },4200);
});
