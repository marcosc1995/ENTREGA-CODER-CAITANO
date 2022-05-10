import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);
  const [totalStock, setTotalStock] = useState(stock);

  const add = () => {
    if (count < totalStock) {
      setCount(count + 1);
    } else {
      console.log("No puedorrrr");
    }
  };

  const res = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("Tampoco puedoorrrr");
    }
  };

  const updateStock = () => {
    setTotalStock(totalStock - count);
    setCount(1)
  };

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
