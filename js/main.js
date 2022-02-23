const btnCarrito = document.getElementById("btnCarrito");

const cajaCarrito = document.getElementById("cajaCarrito");
const cajaCatalogo = document.getElementById("cajaCatalogo");
const listaCarrito = document.getElementById("listaCarrito");
const carritoTotal = document.getElementById("carritoTotal");
let carritoProductos = 0;
const carritoPrecios = [];

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
  {
    productName: "producto 4",
    productPrice: 400,
    productDescription: "Descripcion de producto 4",
  },
];

btnCarrito.addEventListener("click", () => {
  cajaCarrito.classList.toggle("oculto");
});

function imprimirCarrito() {
  listaCarrito.innerHTML = "";
  for (let i = 0; i < carritoPrecios.length; i++) {
    productoCarrito = document.createElement("li");
    productoCarrito.classList= 'productoCarrito'
    productoCarrito.textContent = carritoPrecios[i].nombre;
    listaCarrito.append(productoCarrito);
    btnProducto = document.createElement("button");
    btnProducto.textContent = "x";
    btnProducto.classList = 'btnCarrito'
    btnProducto.addEventListener("click", () => {
      console.log("borrador de productos");
      carritoProductos -= carritoPrecios[i].precio;
      carritoPrecios.splice(i, 1);

      imprimirCarrito();
    });
    productoCarrito.append(btnProducto);
    
  }
  carritoTotal.textContent = ` Total $ ${carritoProductos}`
}

function imprimirCatalogo() {
  for (let i = 0; i < productos.length; i++) {
    const producto = document.createElement("div");
    const btn = document.createElement("button");
    btn.textContent = "añadir";
    btn.addEventListener("click", () => {
      console.log("carrito!!!");
      //carritoPrecios.push(productos[i].productPrice + productos[i].productName)
      carritoPrecios.push({
        nombre: productos[i].productName,
        precio: productos[i].productPrice,
      });
      console.log(carritoPrecios);
      //carritoProductos += carritoPrecios[i].precio;
      carritoProductos += productos[i].productPrice
      imprimirCarrito();
    });

    producto.classList = "tarjetaProducto borde";
    producto.innerHTML = `
        <h3>${productos[i].productName}</h3>
        <div class="preImage borde"></div>
        <h3>$ ${productos[i].productPrice}</h3>
        <h4> ${productos[i].productDescription}</h4>
        
        
        `;
    cajaCatalogo.append(producto);
    producto.append(btn);
  }
}

imprimirCatalogo();
