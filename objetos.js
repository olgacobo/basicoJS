// var coche = {
//     marca: "toyota",
//     modelo:"corolla",
//     annio: 2020,
//     detalleAuto: function(){
//         //el this es una variable que hace referencia al objeto coche
//         console.log(`Auto ${this.modelo} ${this.annio}`);
//     }
// };

// //para acceder a los valores de un objeto objeto.propiedad
// //coche.marca;
// coche.detalleAuto();

//crear cosntructor
function coche(marca1, modelo1, annio1){
    this.marca=marca1;
    this.modelo=modelo1;
    this.annio=annio1;
}
//creamos instancia con el constructor
//var coche1=new coche("toyota","corolla",2020);
//var coche2=new coche("tesla","model 3", 2019);
var num=prompt("Introduce la cantidad de coches que quieres añadir: ");
var coches=[];

for(var i=0; i<num; i++){
    var marca = prompt("Introduce la marca del coche "+(i+1)+":");
    var modelo = prompt("Introduce el modelo del coche "+(i+1)+":");
    var annio = prompt("Introduce el annio del coche "+(i+1)+":");
    coches.push(new coche(marca, modelo, annio));
    console.log(coches[i]);
}
