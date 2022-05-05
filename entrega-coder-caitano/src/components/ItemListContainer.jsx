import Product from "./product";

const ItemListContainer = () => {
  return (
    <div className="d-flex">
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
    </div>
  );
};

export default ItemListContainer;
