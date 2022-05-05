import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Product from "./components/product";
import imgChart from "./img/carrito-de-compras.png"
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div>
      <header>
        <NavBar img={imgChart}></NavBar>
      </header>
      <main>
        <ItemListContainer></ItemListContainer>
        
        
      </main>
    </div>
  );
}

export default App;
