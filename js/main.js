const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

//formulario
function validar(e) {
  e.preventDefault();

  let email = document.getElementById("email");

  if (email.value != "") {
    let formulario = document.getElementById("formulario");
    formulario.style.display = "none";
    let newsletter = document.getElementById("newsletter");
    newsletter.innerHTML = `<h1>Gracias por suscribirte</h1>`;
  } else {
    let formulario = document.getElementById("formulario");
    formulario.style.display = "none";
    let newsletter = document.getElementById("newsletter");
    newsletter.innerHTML = `<h1>Ingresar un correo electronico valido</h1>`;
  }
}

// Boton Newsletter
//let botonNewsletter = document.getElementById("#botonNewsletter");

//botonNewsletter.addEventListener("click", validar);

//$("#openbtn").on("click", function () {
//$("#mySidebar").show("slow");
//});

//$("#closebtn").on("click", function () {
// $("#mySidebar").toggle(500);
//});

// creando productos

class Producto {
  constructor(nombre, precio, id, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.img = img;
  }
}

const shampooCicaextreme = new Producto(
  "Shampoo Cicaextreme 250 ml Kerastase Blond Absolu",
  3250,
  1,
  "https://static.wixstatic.com/media/2276d9_210f453f86bc43f48b6a2ebd9bcd9335~mv2.jpg/v1/fill/w_483,h_483,al_c,q_85,usm_0.66_1.00_0.01/2276d9_210f453f86bc43f48b6a2ebd9bcd9335~mv2.jpg"
);
const shampooColorRadiante = new Producto(
  "Shampoo Color Radiante 300 ml Vibrancy Schwarzkopf",
  3280,
  2,
  "https://static.wixstatic.com/media/2276d9_2b46147f6cb34afbaa7a46435bc5b6ad~mv2.jpg/v1/fill/w_320,h_360,al_c,q_85/2276d9_2b46147f6cb34afbaa7a46435bc5b6ad~mv2.jpg"
);
const shampooSilver = new Producto(
  "Shampoo Silver 300ml L'Oreal Mother Cells",
  4120,
  3,
  "https://static.wixstatic.com/media/2276d9_9623779127eb40d0bf5a4ffd1712b625~mv2.png/v1/fill/w_500,h_467,al_c/2276d9_9623779127eb40d0bf5a4ffd1712b625~mv2.png"
);
const acondicionadorGlow = new Producto(
  "Acondicionador Glow 250ml ABC Complete",
  2280,
  4,
  "https://static.wixstatic.com/media/a4f25c_2b34398dab014926ad98bfb7421ae57f~mv2.jpg/v1/fill/w_483,h_483,al_c,q_85,usm_0.66_1.00_0.01/a4f25c_2b34398dab014926ad98bfb7421ae57f~mv2.jpg"
);

const shampooMoroccanoil = new Producto(
  "Shampoo Color Complete 250ml Moroccanoil",
  3110,
  5,
  "https://static.wixstatic.com/media/a4f25c_241edf510ac742e2892800b1765f8453~mv2.jpg/v1/fill/w_404,h_483,al_c,q_85,usm_0.66_1.00_0.01/a4f25c_241edf510ac742e2892800b1765f8453~mv2.jpg"
);

const shampooLumiere = new Producto(
  "Shampoo Lumière 250 ml Kérastase Blond Absolu",
  2150,
  6,
  "https://static.wixstatic.com/media/a4f25c_98bd3fefaddb4df883edcfa3e458ab71~mv2.png/v1/fill/w_483,h_483,al_c,usm_0.66_1.00_0.01/a4f25c_98bd3fefaddb4df883edcfa3e458ab71~mv2.png"
);

productos = [];

///PUSH

productos.push(
  shampooCicaextreme,
  shampooColorRadiante,
  shampooSilver,
  acondicionadorGlow,
  shampooMoroccanoil,
  shampooLumiere
);

// creando productos con append

for (const producto of productos) {
  $("#cards").append(` <div class="card">
  <img src= ${producto.img}">
  <p>  ${producto.nombre}</p>
  <b> $ ${producto.precio}</b> 
  <button id="${producto.id}" class="btn btn-dark">Compar</button></div>
  `);
}

//agregando productos al carrito de compras
$(".btn").on("click", agregarAlCarrito);

function clickeado(e) {
  $(e.target).css("opacity", "0.7");
  $(e.target).css("background-color", "black");
}

let carrito = [];

function agregarAlCarrito(e) {
  clickeado(e);

  let productoClickeado = productos.find((item) => item.id == e.target.id);
  carrito.push(productoClickeado);

  localStorage.setItem("MiCarrtio", JSON.stringify(carrito));
  mostrarItemsEnCarrito(carrito);
}
// mostrando items en el carrito
function mostrarItemsEnCarrito(array) {
  $("#carrito").empty();
  for (const producto of array) {
    $("#carrito").append(`<div> <div class="card"><h3> ID: ${producto.id}</h3>
    <img src= "${producto.img}" width=150 >
    <p>"${producto.nombre}"</p>
    <b> $ ${producto.precio}</b> 
    <button id="${producto.id}" class="btn-remover" >X</button>
    </div>
    </div>`);
  }
  $(".btn-remover").on("click", (e) => removerItem(e));
}

// elimina del carrito

function removerItem(e) {
  console.log(carrito);
  console.log(e.target);
  let indexDelProducto = carrito.findIndex((item) => item.id == e.target.id);
  carrito.splice(indexDelProducto, 1);
  console.log(carrito);

  mostrarItemsEnCarrito(carrito);
}

/// Elminar los productos del carrito
$("#clear").on("click", limpiarCarrito);

function limpiarCarrito() {
  carrito = [];
  $("#carrito").empty();
  console.log(carrito);
}

// flecha al pie de pagina que lleva al top
$(document).ready(function () {
  $("#arriba").click(function () {
    //Id del elemento cliqueable
    $("html, body").animate({ scrollTop: 0 }, 1250);
    return false;
  });
});

// COLECCION

$("#hide").click(function () {
  $(".coleccion").hide();
});

$("#show").click(function () {
  $(".coleccion").show();
});

//turnos
//$(function () {
//$("#datepicker").datepicker();
//});

//clase 14
let URLHARRY = "http://hp-api.herokuapp.com/api/characters";

$("#botonQuienes").click(function () {
  $.get(URLHARRY, function (datos) {
    for (let personaje of datos) {
      console.log(personaje.name);
      $(".sobre").prepend(`<div class="sobreImg">
                                    
                                    <img src="${personaje.image}"></img>
                                    
                        </div>`);
    }
  });
});
