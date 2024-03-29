let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("basedatos");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("resilencia");
        habilidades[8].classList.add("superacion");
        habilidades[9].classList.add("proyect");
        habilidades[10].classList.add("espanol");
        habilidades[11].classList.add("ruso1");
        habilidades[12].classList.add("ingles");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

const idioma1 = document.getElementById("english");
const idioma2 = document.getElementById("ruso");
const collEnglish = document.getElementsByClassName("english");
const collSpanish = document.getElementsByClassName("ruso");
idioma1.addEventListener("click",()=>{ 
    idioma1.hidden = true;  
    idioma2.hidden = false;     
    for(let item of collEnglish) item.hidden = false;           
    for(let item of collSpanish) item.hidden = true;  
});
idioma2.addEventListener("click",()=>{        
    idioma1.hidden = false;
    idioma2.hidden = true;
    for(let item of collEnglish) item.hidden = true;           
    for(let item of collSpanish) item.hidden = false;  
});

