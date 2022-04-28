import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Product from "./components/product";
import imgChart from "./img/carrito-de-compras.png"


function App() {
  return (
    <div>
      <header>
        <NavBar img={imgChart}></NavBar>
      </header>
      <main>
        <Product
          title="Manzanas"
          description="descripcion de manzanas"
          img="https://geant.vteximg.com.br/arquivos/ids/252521-1000-1000/414119.jpg?v=637284494865500000"
        ></Product>

        <Product
          title="Pera Williams"
          description="descripcion de Pera Williams"
          img="https://geant.vteximg.com.br/arquivos/ids/274975-1000-1000/414136.jpg?v=637589445797670000"
        ></Product>

        <Product
          title="Leche entera CONAPROLE"
          description="descripcion de Leche entera CONAPROLE"
          img="https://geant.vteximg.com.br/arquivos/ids/205823-1000-1000/240513.jpg?v=636403761257200000"
        ></Product>
      </main>
    </div>
  );
}

export default App;
