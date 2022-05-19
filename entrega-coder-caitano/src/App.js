import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";

function App() {
  return (
    <Router>
      <div>
        <NavBar totalCart="66"></NavBar>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/details/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/category/:categoryId" element={<CategoryContainer/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
