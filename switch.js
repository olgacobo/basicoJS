//prueba switch 
//var num=1;

// switch(num){
//     case 1: 
//         console.log("Soy uno"); 
//         break; // si no pones el break, hace todas las validaciones
//     case 2: 
//         console.log("Soy dos"); 
//         break;
//     case 3: 
//         console.log("Soy tres"); 
//         break;
//     default: 
//         console.log("no soy nada");
// }
//creo las variables
var pi="piedra";
var pa="papel";
var ti="tijera";
var resultado="";
//creo una funcion a la que le paso por parametro
function juego(opUser,opPC){
    
    if (opUser != opPC){
        switch(opUser){
            case pi:
                resultado = (opPC===ti) ? "Gana el usuario" : "Gana la maquina";
                break;
            case pa:
                resultado = (opPC===pi) ? "Gana el usuario" : "Gana la maquina";
                break;
            case ti:
                resultado = (opPC===pa) ? "Gana el usuario" : "Gana la maquina";
                break;
            default:
        }
    }
    else{
        console.log("Empate");
    }
return resultado;
}

juego(pi,pa)