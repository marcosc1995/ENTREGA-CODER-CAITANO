import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const ItemCount = ({stock, initial}) => {
  
  const [totalStock, setTotalStock] = useState(stock);
  const [count, setCount] = useState(initial);
  
  const[items, setItems] = useContext(CartContext)

  const add = () => {
    if (count < totalStock) {
      setCount(count + 1);
    } else {
      console.log("No puedo");
    }
  };

  const res = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("Tampoco puedo");
    }
  };

  const updateStock = () => {
    setTotalStock(totalStock - count);
    setCount(1)
    console.log(items)
  };

  const addToCart = ()=>{
    const selectedProduct = items.push(stock)
    setItems(selectedProduct)
    console.log(items)

  }

  //   useEffect(() => {
  //     setStock(() => stock - count);
  //   }, [count]);

  return (
    <div className="position-relative p-2 text-center">
      {/* <p>{props.productName}</p> */}
      <div className="d-flex justify-content-between border">
        <button onClick={res} className="btn">
          -
        </button>
        <span>{count}</span>
        <button onClick={add} className="btn">
          +
        </button>
      </div>
      <p>Stock {totalStock}</p>
      <button onClick={updateStock} className="btn btn-outline-primary w-100">
        Agrregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
