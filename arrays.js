var array=["Olga","Pepe","Pepa"];

function saludar(estudiante){
    console.log(`Hola,${estudiante}`);
}

for(var i=0; i<array.length; i++){
    saludar(array[i]);
}