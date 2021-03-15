var array=["Olga","Pepe","Pepa"];

function saludar(estudiante){
    console.log(`Hola,${estudiante}`);
}

//for clasico
// for(var i=0; i<array.length; i++){
//     saludar(array[i]);
// }


//for guay
//for(var estudiante of array){ saludar(estudiante);}

while(array.length>0){
    var estudiante=array.shift(); //me va a sacar en cada vuelta el primer elemento del array
    saludar(estudiante);
}