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
const allProducts = document.getElementById("allProducts");
const btnAdmin = document.getElementById("btnAdmin");
const adminBox = document.getElementById("adminBox");
const productosAdmin = document.getElementById("productosAdmin");
const cajaCatalogo = document.getElementById("cajaCatalogo");
let carritoPrecios = 0;
let carritoProductos = [];
let productos = [];

// Funcion constructora de productos
class Producto {
  constructor(title, price, category, img) {
    this.title = title;
    this.price = price;
    this.category = category;
    this.img = img;
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

function checkLocal(arr, storage) {
  localStorage.getItem(storage)
    ? (arr = JSON.parse(localStorage.getItem(storage)))
    : localStorage.setItem(storage, JSON.stringify(arr));
}
// function checkLocal(arr, storage) {
//   if (localStorage.getItem(storage)) {
//     arr = JSON.parse(localStorage.getItem(storage));
//   } else {
//     localStorage.setItem(storage, JSON.stringify(arr));
//   }
// }
function traerLocal() {
  productos = JSON.parse(localStorage.getItem("productos"));
  carritoProductos = JSON.parse(localStorage.getItem("carrito"));
}
function saveLocal(arr, storage) {
  localStorage.setItem(storage, JSON.stringify(arr));
}
function imprimirCard(src, box, storage) {
  box.innerHTML = "";
  for (let i = 0; i < src.length; i++) {
    const producto = document.createElement("div");
    producto.classList = "tarjetaProducto borde";
    const btn = document.createElement("button");
    btn.textContent = "añadir";
    btn.addEventListener("click", () => {
      console.log(`${src[i].title} añadido al carrito`);
      Swal.fire(`${src[i].title} añadido al carrito`);
      carritoProductos.push({
        title: productos[i].title,
        price: productos[i].price,
      });
      carritoPrecios += parseInt(productos[i].price);
      saveLocal(carritoProductos, "carrito");
      imprimirCarrito();
    });
    const img = document.createElement("div");
    img.classList = "preImage";
    img.style.backgroundImage = `url(${src[i].img})`;
    const infoProducto = document.createElement("div");
    infoProducto.innerHTML = `
        <h3>${src[i].title}</h3>        
        <h3>$ ${src[i].price}</h3>
        <h4>Stock ${src[i].stock}</h4>
    `;
    producto.append(img, infoProducto, btn);
    box.append(producto);
    btnProducto = document.createElement("button");
    btnProducto.textContent = "x";
    btnProducto.classList = "btnDelete";
    btnProducto.addEventListener("click", () => {
      console.log("borrador de productos");
      src.splice(i, 1);
      saveLocal(src, storage);
      imprimirCard(src, box, storage);
    });
    //producto.append(btnProducto);
  }
}
function imprimirCardAdmin(src, box, storage) {
  box.innerHTML = "";
  for (let i = 0; i < src.length; i++) {
    const producto = document.createElement("div");
    const title = document.createElement("div");
    title.innerHTML = `
    <h3>${src[i].title}</h3>
    <h2>$ ${src[i].price}</h2>
    `;
    const form = document.createElement("div");
    form.classList = "formProducto borde";
    form.innerHTML = `
    <div>
            <label>Nombre</label><input value="${src[i].title}" id="title_${src[i].title}" type="text" />
          </div>
          <div>
            <label>Precio</label><input value="${src[i].price}" id="price_${src[i].title}" type="number" />
          </div>
          <div>
            <label>Stock Actual</label><input value="${src[i].stock}" id="stock_${src[i].title}" type="number" />
          </div>
          <div>
            <label>Imagen</label><input value="${src[i].img}" id="img_${src[i].title}" placeholder="URL" type="url" />
          </div>
    `;
    const btnActualizar = document.createElement("button");
    btnActualizar.textContent = "Actualizar";
    btnActualizar.type = "submit";
    btnActualizar.addEventListener("click", () => {
      let inputTitle = document.getElementById(`title_${src[i].title}`).value;
      let inputPrice = document.getElementById(`price_${src[i].title}`).value;
      let inputStock = document.getElementById(`stock_${src[i].title}`).value;
      let inputImg = document.getElementById(`img_${src[i].title}`).value;
      src[i].title = inputTitle;
      src[i].price = inputPrice;
      src[i].stock = inputStock;
      src[i].img = inputImg;

      imprimirCardAdmin(src, box, storage);
      imprimirCard(src, cajaCatalogo, storage);
      saveLocal(src, storage);

      console.log(inputTitle);
    });
    const img = document.createElement("div");
    img.classList = "smImage";
    img.style.backgroundImage = `url(${src[i].img})`;
    producto.classList = "tarjetaProducto borde adminProduct";
    producto.append(img, title, form);
    form.append(btnActualizar);
    box.append(producto);
    btnDelete = document.createElement("button");
    btnDelete.textContent = "x";
    btnDelete.classList = "btnDelete";
    btnDelete.addEventListener("click", () => {
      console.log("borrador de productos");
      src.splice(i, 1);
      saveLocal(src, storage);
      imprimirCardAdmin(src, box, storage);
      imprimirCard(src, cajaCatalogo, storage);
    });
    producto.append(btnDelete);
  }
}
function imprimirCarrito() {
  listaCarrito.innerHTML = "";
  for (let i = 0; i < carritoProductos.length; i++) {
    productoCarrito = document.createElement("li");
    productoCarrito.classList = "productoCarrito";
    productoCarrito.textContent = carritoProductos[i].title;
    listaCarrito.append(productoCarrito);
    btnProducto = document.createElement("button");
    btnProducto.textContent = "x";
    btnProducto.classList = "btnCarrito";
    btnProducto.addEventListener("click", () => {
      console.log("borrador de productos");
      Swal.fire("Producto borrado");
      carritoPrecios -= carritoProductos[i].price;
      carritoProductos.splice(i, 1);

      imprimirCarrito();
      saveLocal(carritoProductos, "carrito");
    });
    productoCarrito.append(btnProducto);
  }
  carritoTotal.textContent = ` Total $ ${carritoPrecios}`;
  totalNav.textContent = ` Total $ ${carritoPrecios}`;
}
//let tott = 0
function totalPrice() {
  for (let i = 0; i < carritoProductos.length; i++) {
    carritoPrecios += parseInt(carritoProductos[i].price);
  }
}
traerLocal();
totalPrice();
checkLocal(productos, "productos");
checkLocal(carritoProductos, "carrito");
imprimirCard(productos, cajaCatalogo, "productos");
imprimirCardAdmin(productos, productosAdmin, "productos");
imprimirCarrito();

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
  let img = document.getElementById("formImg").value;

  const producto = new Producto(title, price, tag, img);

  producto.add();
  imprimirCard(productos, cajaCatalogo, "productos");
  imprimirCardAdmin(productos, productosAdmin, "productos");

  console.log(producto);
  Swal.fire("Producto Creado");
});
