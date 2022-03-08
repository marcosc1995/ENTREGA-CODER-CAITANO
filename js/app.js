/**
 * Seleccion de elementos del DOM
 */
//CARRITO
const btnCarrito = document.getElementById("btnCarrito");
const cajaCarrito = document.getElementById("cajaCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const carritoTotal = document.getElementById("carritoTotal");
const totalNav = document.getElementById("totalNav");
const btnAddProduct = document.getElementById("btnAddProduct");
const formulario = document.getElementById("formAdd");
const allProducts = document.getElementById("allProducts")
const btnAdmin = document.getElementById("btnAdmin")
const adminBox = document.getElementById("adminBox")
//CATALOGO
const cajaCatalogo = document.getElementById("cajaCatalogo");

// Array para guardar los productos de todo el catalogo
let productos = [];
let productosCarrito = [];

let test = [1,2,10,55,156];

function checkLocal(arr, storage) {
  if (localStorage.getItem(storage)) {
    arr = JSON.parse(localStorage.getItem(storage));
  } else {
    localStorage.setItem(storage, JSON.stringify(arr));
  }
}
function traerLocal() {
  productos = JSON.parse(localStorage.getItem("productos"));
}
function saveLocal(arr, storage) {
  localStorage.setItem(storage, JSON.stringify(arr));
}

// traerLocal(productos, 'productos')

checkLocal(productos, "productos");
traerLocal();
imprimirCard(productos, cajaCatalogo);
//imprimirCardAdmin(productos, allProducts )



// Funcion constructora de productos
class Producto {
  constructor(title, price, category) {
    this.title = title;
    this.price = price;
    this.category = category;
    this.stock = 0;
  }
  add() {
    productos.push(this);
    saveLocal(productos, "productos");
    checkLocal(productos, "productos");
  }
  addChart() {
    productosCarrito.push(this);
    localStorage.setItem("productos", JSON.stringify(productosCarrito));
  }
  addStock(number) {
    this.stock += number;
  }
  delStock(number) {
    this.stock -= number;
  }
}

btnCarrito.addEventListener("click", () => {
  cajaCarrito.classList.toggle("oculto");
});
btnAdmin.addEventListener("click", () => {
  adminBox.classList.toggle("oculto");
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("formTitle").value;
  let price = document.getElementById("formPrice").value;
  let tag = document.getElementById("formTag").value;

  const producto = new Producto(title, price, tag);

  producto.add();
  imprimirCard(productos, cajaCatalogo);

  console.log(producto);
});

//traerLocal();

//console.log(console.log(JSON.parse(localStorage.productos)[0].title))

function imprimirCard(src, box) {
  box.innerHTML = "";
  for (let i = 0; i < src.length; i++) {
    const producto = document.createElement("div");
    producto.classList = "tarjetaProducto borde";
    producto.innerHTML = `
        <h3>${src[i].title}</h3>
        <div class="preImage borde"></div>
        <h3>$ ${src[i].price}</h3>
        <h4> ${src[i].category}</h4>
        
        
        `;
    box.append(producto);
  }
}

function imprimirCardAdmin(src, box) {
  box.innerHTML = "";
  for (let i = 0; i < src.length; i++) {
    const producto = document.createElement("div");
    producto.classList = "tarjetaProducto borde";
    producto.innerHTML = `
        <h3>${src[i].title}</h3>
        <div class="preImage borde"></div>
        <h3>$ ${src[i].price}</h3>
        <h4> ${src[i].category}</h4>
        
        
        `;
    box.append(producto);
  }
}
