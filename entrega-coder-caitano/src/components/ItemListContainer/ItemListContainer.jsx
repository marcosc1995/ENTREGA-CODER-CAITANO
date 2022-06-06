import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { productos } from "../productos";
//import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

//FIREBSE 

import { collection, query, getDocs, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
  useEffect(()=>{
    setItems(productos)
  },[])
  // useEffect(() => {
  //   const getItems = async() => {
  //     const q = query(collection(db, 'productos'));
  //     const products = [];
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((product)=> {
        
  //       products.push({...product.data(), id: product.id})
  //     })
  //     setItems(products)
  //   };
  //   getItems()
  // }, []);

  return (
    <div className="d-flex">
      <ItemList items={items}></ItemList>
      
    </div>
  );
};

export default ItemListContainer;

/* <Product
title="Manzanas"
description="descripcion de manzanas"
price="99"
img="https://geant.vteximg.com.br/arquivos/ids/252521-1000-1000/414119.jpg?v=637284494865500000"
></Product>

<Product
title="Pera Williams"
description="descripcion de Pera Williams"
price="50"
img="https://geant.vteximg.com.br/arquivos/ids/274975-1000-1000/414136.jpg?v=637589445797670000"
></Product> */
