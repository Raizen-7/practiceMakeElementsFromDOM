const productos = [
    {
        imagenPrincipal: "https://picsum.photos/id/0/200/300",
        imagenFondo:"https://picsum.photos/id/1/200/300",
        nombre: "Computadora portatil",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/1062/200/300",
        imagenFondo:"https://picsum.photos/id/1025/200/300",
        nombre: "Cobija para perro",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/111/200/300",
        imagenFondo:"https://picsum.photos/id/133/200/300",
        nombre: "Automovil",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/250/200/300",
        imagenFondo:"https://picsum.photos/id/319/200/300",
        nombre: "Camara",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/30/200/300",
        imagenFondo:"https://picsum.photos/id/326/200/300",
        nombre: "Taza",
        precio: "1500",
    },
    {
        imagenPrincipal: "https://picsum.photos/id/75/200/300",
        imagenFondo:"https://picsum.photos/id/674/200/300",
        nombre: "Kilo de uva",
        precio: "1500",
    },

];
/*
    <div class="card">
        <div class="img-wrapper">
            <img class="principal-img" src="https://picsum.photos/200/300" alt="imagen">
            <img src="https://picsum.photos/id/175/200/300" alt="">
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, repellendus.</p>
        <button>Comprar</button>
    </div>

*/

const section = document.getElementsByTagName( "section" )[0];

function crearCard ( productoInfo ){

const card = document.createElement( "div" );
card.classList.add( "card" );

const imageWrapper = document.createElement( "div" );
imageWrapper.classList.add( "img-wrapper" );

const fistImage = document.createElement( "img" );
fistImage.src = productoInfo.imagenPrincipal;
fistImage.classList.add( "principal-img" );

const secondImage = document.createElement( "img" );
secondImage.src = productoInfo.imagenFondo;

const paragraph = document.createElement( "p" );
paragraph.textContent = productoInfo.nombre;

const button = document.createElement( "button" );
button.textContent = "Comprar";

section.appendChild ( card )

card.appendChild ( imageWrapper );
card.appendChild ( paragraph );
card.appendChild ( button );

imageWrapper.appendChild ( fistImage );
imageWrapper.appendChild ( secondImage );

return card;

};

let fragmento = new DocumentFragment(); 

for (let i = 0; i < productos.length; i++ ){

    let card = crearCard ( productos[i] );

    fragmento.appendChild( card );
};

section.appendChild( fragmento );


/*
function suma( num1, num2 ){
    console.log( num1 + num2 )
}

const resta = function(num1, num2){
    return num1 - num2
}

function saludarUsuario( nombre ){
    console.log(`Hola ${nombre}! buenas noches.`)
}


function convertirAMayusculas (nombre){
    console.log( nombre.toUpperCase() )
}


//Funcion de orden superior
function obtenerNombre( callback ){ //Se ejecuta primero
    let nombre = prompt( "Ingresa es tu nombre" )

    callback( nombre ) // saludarUsuario(nombre)
}

obtenerNombre( saludarUsuario )

obtenerNombre( convertirAMayusculas )

*/



