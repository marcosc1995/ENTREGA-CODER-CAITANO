import { useEffect, useState } from "react";
import { productos } from "./productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [items, setItems] = useState([]);

//   const getItem = () => {
//     setTimeout(() => {
//       const data = new Promise((resolve, reject) => {
//         resolve(productos);
//       });
//       data.then((data) => {
//         setItems(data);
//       });
//     }, 2000);
//   };

  

  return (
      <ItemDetail title={props.title} img={props.img}></ItemDetail>
  )
};

export default ItemDetailContainer;
