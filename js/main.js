const btnCarrito = document.getElementById("btnCarrito");
const btnCatalogo = document.getElementById('btnCatalogo');
const cajaCarrito = document.getElementById("cajaCarrito");
const cajaCatalogo = document.getElementById("cajaCatalogo");

const productos = [
  {
    productName: "producto 1",
    productPrice: 100,
    productDescription: "Descripcion de producto 1",
  },
  {
    productName: "producto 2",
    productPrice: 200,
    productDescription: "Descripcion de producto 2",
  },
  {
    productName: "producto 3",
    productPrice: 300,
    productDescription: "Descripcion de producto 3",
  },
];

btnCarrito.addEventListener("click", () => {
  cajaCarrito.classList.toggle("oculto");
});

function imprimirCatalogo(){
    for (let i = 0; i < productos.length; i++) {
        const producto = document.createElement('div')
        producto.innerHTML = `
        <div class="tarjetaProducto borde">
              <h3>${productos[i].productName}</h3>
              <div class="preImage borde"></div>
              <h3>$5</h3>
              <button>Añadir al Carrito</button>
          </div>
        `
        cajaCatalogo.append(producto)
    }
}

btnCatalogo.addEventListener('click', imprimirCatalogo);
