import { useEffect, useState } from "react";
import { productos } from "../productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { collection, query, getDocs, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";



const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  let id = useParams()
  let productId = id.id

  useEffect(()=>{
    // let result = productos.find(({id})=> id == productId)
    // setItems(result)
    setItems(productos)
  },[])
  console.log(items)
   setTimeout(function () {
    console.log(items);
  }, 2000);
  // useEffect(() => {
  //   const getItems = async() => {
  //     const q = query(collection(db, 'productos'));
  //     const products = [];
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((product)=> {
        
  //       products.push({...product.data(), id: product.id})
  //     })
  //     let result = products.find(({id})=> id == productId)
  //     setItems(result)
  //   };
  //   getItems()
  // },[]);

  return(
    <div>
      <ItemDetail data={items}></ItemDetail>
    </div>
  ) ;
};

export default ItemDetailContainer;

// let result = data.find(({id})=> id == productId)
        
//         setItems(result);