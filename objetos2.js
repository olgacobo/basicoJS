//creo array de objetos
var articulos=[
    {nombre:"bici", precio:10},
    {nombre:"tele", precio:250},
    {nombre:"libro", precio:300},
    {nombre:"movil", precio:15},
    {nombre:"portatil", precio:2000},
    {nombre:"teclado", precio:500},
    {nombre:"cascos", precio:562},
];

//filter añade al array solo los articulos que cumplen la funcion
//var artFiltrados=articulos.filter(function(articulo){return articulo.precio<=500})

//map devuelve array con la función aplicada a todos los elementos
var nombreArt=articulos.map(function(articulo){return articulos.nombre});