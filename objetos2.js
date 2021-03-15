//creo array de objetos
var articulos=[
    {nombre:"bici", precio:10},
    {nombre:"tele", precio:250},
    {nombre:"libro", precio:300},
    {nombre:"movil", precio:15},
    {nombre:"portatil", precio:2000},
    {nombre:"portatil", precio:1000},
    {nombre:"teclado", precio:500},
    {nombre:"cascos", precio:562},
];

//filter añade al array solo los articulos que cumplen la funcion, sacara los 2 portatiles
var artFiltrados=articulos.filter(function(articulo){return articulo.nombre === "portatil"})

//map devuelve array con la función aplicada a todos los elementos
var nombreArt=articulos.map(function(articulo){return articulos.nombre});

//find devuelve el primer valor que coincide del array, sacara solo el primer portatil
var encuentraArticulo=articulos.find(function(articulo){return articulo.nombre === "portatil"});

//forEach me devuelve las propiedades del array que le ponga
articulos.forEach(function(articulo){console.log(articulo.nombre)});

//some devuelve true o false si hay algun elemento en el array que cumpla la funcion
var baratos=articulos.some(function(articulo){return articulo.precio <=700});