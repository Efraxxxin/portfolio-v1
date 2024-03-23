let menuVisible = false;
//Función para ocultar el menú
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
    
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
