const juegos = [ new juego("Persona 5", 40000, ["combate por turnos", " novela visual"], ["ps5", "pc", "xbox s"], "un solo jugador", "ingles", "./media/Persona 5.jpg"),
new juego("Hades", 15000, ["roguelike", " accion"], ["ps5", "pc"], "un solo jugador", ["ingles, español"], "./media/Hades.jpg"),
new juego("Hollow knight", 15000, ["plataformas", " 2D"], ["ps5", "pc", "xbox s"], "un solo jugador", ["ingles", "español"]),
new juego("It takes two", 50000, ["cooperativo", " puzzle"], ["ps5", "pc"], "multijugador", ["ingles, español"]),
new juego("Stardew valley", 10000, ["simulador", " 2D"], "pc", ["multijugador", "un solo jugador"], ["ingles, español"], "./media/stardew.jpg"),
new juego("God of war", 60000, ["accion", " aventura"], ["ps5, pc"], "un solo jugador", ["ingles, español"], "./media/GodofWar.jpg"),
new juego("Forza motorsport", 50000, ["carreras", " simulador"], ["xbox s", "pc"], ["multijugador", "un solo jugador"], ["ingles, español"])
];

let carrito = [];


function guardarItemsCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("carritoContador", JSON.stringify(contadorHTML));
}

function traerItemsCarrito(){
    carrito = JSON.parse(localStorage.getItem("carrito")); 
}
traerItemsCarrito();
function agregarCarrito(juego) {
    console.log("pepe")
    carrito.push(juegos[juego])
    actualizarContador();
    actualizarCarrito();
    guardarItemsCarrito();
}

function quitarCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    actualizarContador();
    guardarItemsCarrito()
}

function actualizarCarrito() {
    tablaHTML.innerHTML = "";
    carrito.forEach((item, index) => {
        let n;
        n = item.nombre.split(" ").join("");
        tablaHTML.innerHTML +=
                                `
                                <th>${index + 1}</th>
                                <td><img class="juegosCarrito" src="${item.imagen}"></img></td>
                                <td>${item.nombre}</td>
                                <td>${item.genero}</td>
                                <td>${item.precio}</td>
                                <td><button id="${n + (index + 1)}" value="${index}" class="btn btn-danger">X</button></td>
                                ` ;
        let btnsCarrito = document.querySelectorAll(".btn-danger");
        btnsCarrito.forEach(item => {
            item.addEventListener("click", () => {
                quitarCarrito(item.value);
            })
        })

    })
}

function actualizarContador() {
    contadorHTML.innerText = `${carrito.length}`;
}

function botonesJuegos(){
    let btnsJuegos = document.querySelectorAll(".btn-primary");
    btnsJuegos.forEach(item => {
        item.addEventListener("click", () => { agregarCarrito(+item.value)})
    })
}

botonesJuegos();

let carritoHTML;
carritoHTML = document.body.querySelector("#carrito");


let contadorHTML;
contadorHTML = document.body.querySelector("#contador");
actualizarContador();

const tablaHTML = document.body.querySelector("#items");

actualizarCarrito();



