import { useEffect, useState } from "react";
import { productos } from "../productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";



const ItemDetailContainer = (props) => {
  const [items, setItems] = useState([]);
  let id = useParams()
  let productId = id.id

  useEffect(() => {
    setTimeout(() => {
      const data = new Promise((resolve, reject) => {
        resolve(productos);
        
      });
      data.then((data) => {
        
        let result = data.find(({id})=> id == productId)
        
        setItems(result);
      });
    }, 2000);
  });

  return <ItemDetail data={items}></ItemDetail>;
};

export default ItemDetailContainer;
