// Variables
const carrito = document.querySelector("#carrito");
const listaProductos = document.querySelector("#lista-productos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
  // Dispara cuando se presiona "Agregar Carrito"
  listaProductos.addEventListener("click", agregarProducto);

  // Cuando se elimina un Producto del carrito
  carrito.addEventListener("click", eliminarProducto);

  // Al Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

  // NUEVO: Contenido cargado
  document.addEventListener("DOMContentLoaded", () => {
    articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    // console.log(articulosCarrito);
    carritoHTML();
  });
}

//funciones
function agregarProducto(e) {
  e.preventDefault(); //para que no habra link #

  if (e.target.classList.contains("agregar-carrito")) {
    const productoSeleccionado = e.target.parentElement.parentElement;
    leerDatosProducto(productoSeleccionado);
  }
}
//elimina un producto del carrito
function eliminarProducto(e) {
  if (e.target.classList.contains("borrar-producto")) {
    const productoId = e.target.getAttribute("data-id");

    //elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(
      (producto) => productoId !== productoId
    );
    carritoHTML(); //iterar sobre el carrito y mostrar su html
  }
}
function leerDatosProducto(producto) {
  console.log(producto);
  //crear objeto con el contenido del producto actual
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector("h4").textContent,
    precio: producto.querySelector(".precio span").textContent,
    id: producto.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //revisa si un elemento ya exite en el carrito

  const existe = articulosCarrito.some(
    (producto) => producto.id === infoProducto.id
  );
  if (existe) {
    // actualiza la cantidad
    const productos = articulosCarrito.map((producto) => {
      if (producto.id === infoProducto.id) {
        producto.cantidad++;
        return producto; // retorna el objeto actualizado
      } else {
        return producto; // retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...producto];
  } else {
    //agrega elementos al arreglo carrito
    articulosCarrito = [...articulosCarrito, infoProducto];
  }

  // agrega elementos al arreglo de carrito
  articulosCarrito = [...articulosCarrito, infoProducto];

  console.log(articulosCarrito);
  carritoHTML();
}
// Muesta el carrito de compras en el htm
function carritoHTML() {
  //limpiar html
  limpiarHTML();

  articulosCarrito.forEach((producto) => {
    const { imagen, titulo, precio, cantidad, id } = producto;
    console.log(producto);
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        <img src"${imagen}" width="100">
    </td>
    <td>
        ${titulo}
    </td>
    <td>
        ${precio}
    </td>
    <td>
        ${cantidad}
    </td>
    <td>
        <a href="#" class="borrar-producto" data-id="${id}" > X </a>
    </td>
    `;
    // agrega el html del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });

  // agregar el carrito de compras al storage
  sincronizarStorage();
}
function sincronizarStorage() {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}
//elimina los productos del tbody
function limpiarHTML() {
  //forma lenta
  //contenedorCarrito.innerHTML = "";
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
