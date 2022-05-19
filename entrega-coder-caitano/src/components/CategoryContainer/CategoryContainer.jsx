import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { productos } from "../productos"
import { useParams } from "react-router"


const CategoryContainer = ()=> {
    const [items, setItems] = useState([]);
    let category = useParams()
    
    let productCategory = category.categoryId
    //console.log(productCategory)
  
    useEffect(() => {
      setTimeout(() => {
        const data = new Promise((resolve, reject) => {
          resolve(productos);
          
        });
        data.then((data) => {
          //console.log(data)
          // PROBLEMA 1 NO PUEDO HACER QUE FUNCIONE EL FILTRADO DE PRODUCTOS 
          let result = data.filter(x => x.category == productCategory)
        //   console.log(result)
          setItems(result);
        });
      }, 2000);
    });
    return (
        <div>
            <h1>{productCategory}</h1>
        </div>
    )

}

export default CategoryContainer