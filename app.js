console.log("JS indexsado");

// Lista de productos

const products = [
  {
    name: "Arroz",
    price: 50,
  },
  {
    name: "Aceite",
    price: 100,
  },
  {
    name: "Harina",
    price: 50,
  },
  {
    name: "Jabon",
    price: 350,
  },
  {
    name: "Pan",
    price: 150,
  },
];

// Precio total

let totalPrice = 0;

// Creo el elemento H2 que mostrara el valor de totalPrice

const total = document.createElement("h2");
total.textContent = "$" + totalPrice;
document.getElementById("total").appendChild(total);

/*Creo el elemento h4 que mostrara 
un mensaje al usuario
 */
const messege = document.createElement("h4");

/* Declaro la funcion changeMessege
que cambiara el mensaje cuando el precio total 
es distinto de 0
*/

function changeMessege() {
  if (totalPrice == 0) {
    messege.textContent = "Porfavor compra algo...";
  } else {
    messege.textContent = "Gracias!";
  }
}

//llamo a la funcion
changeMessege();

//Agrego el elemento messege al DOM
document.getElementById("box").appendChild(messege);

/**
 * Declaro la funcion que se va a encargar
 * de mostrar los distintos productos y crear
 * los botones para la suma de los precios
 */

function printProducts() {
  /**
   * Declaro un ciclo for para asi recorrer el array
   * de objetos que contiene los productos
   * y por cada uno crear un LI y un BUTTON
   */
  for (let i = 0; i < products.length; i++) {
    const product = document.createElement("div");
    product.textContent = products[i].name + " ";
    product.classList = "productos";

    const btnPriceAdd = document.createElement("button");
    btnPriceAdd.textContent = "$" + products[i].price;
    const btnPriceRes = document.createElement("button");
    btnPriceRes.textContent = "$" + products[i].price;
    btnPriceRes.style.backgroundColor= 'red'
    btnPriceRes.style.color = 'white'
    /**
     * Asigno un EventListener al boton creado para
     * que al hacer click ejecute la funcion add
     */
    btnPriceAdd.addEventListener("click", add);
    btnPriceRes.addEventListener("click", res);
    /**
     * Declaro la funcion add que se encarga de
     * sumar los precios cada vez que se
     * hace click en el boton
     */
    function res() {
      console.log(products[i].price);
      totalPrice -= products[i].price;
      total.textContent = "$" + totalPrice;
    }
    function add() {
      console.log(products[i].price);
      totalPrice += products[i].price;
      total.textContent = "$" + totalPrice;

      /**
       * Vuelvo a llamar a la funcion para
       * mostrar el nuevo valor en el DOM
       */
      changeMessege();
    }
    /**
     * Agrego los elementos product y btnPrice al DOM
     */
    document.getElementById("productos").appendChild(product);
    product.appendChild(btnPriceAdd);
    product.appendChild(btnPriceRes);
  }
}
// Llamado a la funcion para mostrar los productos
printProducts();

