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
        <NavBar totalCart='66'></NavBar>
      </header>
      <main className="bg-secondary">
        <ItemListContainer></ItemListContainer>
        
        
      </main>
    </div>
  );
}

export default App;
