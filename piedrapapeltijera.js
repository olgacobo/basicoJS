//creo las 3 variables
var pi="piedra";
var pa="papel";
var ti="tijera";
//creo una funcion a la que le paso por parametro
var resultado=function(opUser,opPC){
    
    if (opUser != opPC){
        //si las opciones de user y pc son distintas:
        //comprobamos todas las opciones en las que el user puede ganar con ||
        if ( (opUser===pi && opPC===ti) || (opUser===pa && opPC===pi) || (opUser===ti && opPC===pa) ){
            console.log("Gana el usuario");
        }
        else{//si no es ninguna de las ociones donde gana el user, gana el pc
            console.log("Gana el PC");
        }
    }
    else{
        console.log("Empate");
    }
}

resultado(pi,pa)