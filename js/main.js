function validar(e) {
  e.preventDefault();
  let mail = document.getElementById("mail");

  console.log("Nuevo suscriptor al newslater" + mail.value);
}

function mouse(e) {
  console.log(e.button);
  if (e.button == 0) {
    console.log("CLICK IZQUIERDO");
  } else if (e.button == 1) {
    console.log("ClICK MEDIO");
  } else {
    console.log("CLICK DERECHO");
  }
}
/*

// NO SE QUE VOY A HACER CON ESTO TODAVIA POR ESO LO COMENTE Y NO LO BORRE
class Producto {

  constructor(precio, nombre, stock) {
    this.precio = precio;
    this.nombre = nombre;
    this.stock = stock;
  }
}

let producto1 = new Producto(200, "Zapatos Sidney", 20);
let producto2 = new Producto(280, "Zapato Sofia", 20);
let producto3 = new Producto(350, "Zapato Katty", 20);
let producto4 = new Producto(350, "Cartera Bradley Mid", 5);
let producto5 = new Producto(380, "Cartera Crossbody", 5);
let producto6 = new Producto(400, "Cartera Quilted", 5);
let producto7 = new Producto(65, "Collar Mady", 15);
let producto8 = new Producto(80, "Collar Chunky", 15);
let producto9 = new Producto(40, "Sombrero Stella", 10);

let Galeria = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
];

console.log(Galeria);
//Galeria.push(producto1) y asi los 9

let Carrito = [];
let suma = 0;

function main() {
  let opcion = mostrarProductos();

  while (opcion != 0) {
    switch (opcion) {
      case 1:
        alert("Agregaste una " + Galeria[0].nombre);
        agregarProducto(Galeria[0]);
        suma = suma + Galeria[0].precio;
        break;

      case 2:
        alert("Agregaste una " + Galeria[1].nombre);
        agregarProducto(Galeria[1]);
        suma = suma + Galeria[1].precio;
        break;

      case 3:
        alert("Agregaste una " + Galeria[2].nombre);
        agregarProducto(Galeria[2]);
        suma = suma + Galeria[2].precio;
        break;

      case 4:
        alert("Agregaste una " + Galeria[3].nombre);
        agregarProducto(Galeria[3]);
        suma = suma + Galeria[3].precio;
        break;

      case 5:
        alert("Agregaste una " + Galeria[4].nombre);
        agregarProducto(Galeria[4]);
        suma = suma + Galeria[4].precio;
        break;

      case 6:
        alert("Agregaste una " + Galeria[5].nombre);
        agregarProducto(Galeria[5]);
        suma = suma + Galeria[5].precio;
        break;

      case 7:
        alert("Agregaste una " + Galeria[6].nombre);
        agregarProducto(Galeria[6]);
        suma = suma + Galeria[6].precio;
        break;

      case 8:
        alert("Agregaste una " + Galeria[7].nombre);
        agregarProducto(Galeria[7]);
        suma = suma + Galeria[7].precio;
        break;

      case 9:
        alert("Agregaste una " + Galeria[8].nombre);
        agregarProducto(Galeria[8]);
        suma = suma + Galeria[8].precio;
        break;

      default:
        alert("Ingreso incorrecto");
        break;
    }

    opcion = mostrarProductos();
  }
  console.log(Carrito);
  console.log(suma);
}

function mostrarProductos() {
  let opcion = parseInt(
    prompt(
      "SELECCIONE PRODUCTO, presione 0 para salir:\n\n 1- Zapatos Sidney, \n\n 2- Zapato Sofia, \n\n 3- Zapato Katty, \n\n 4- Cartera Bradley Mid, \n\n 5- Cartera Crossbody, \n\n 6-Cartera Quilted, \n\n 7- Collar Mady, \n\n 8- Collar Chunky, \n\n 9- Sombrero Stella"
    )
  );
  return opcion;
}

function agregarProducto(producto) {
  Carrito.push(producto);
}

main();

*/
