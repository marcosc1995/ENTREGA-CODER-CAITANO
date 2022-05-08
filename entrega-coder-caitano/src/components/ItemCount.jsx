import { useState, useEffect } from "react";

const ItemCount = (props) =>{
    const [state, setState] = useState(0)

    const add = ()=>{
        setState(state + 1)
    }

    const res = ()=>{
        setState(state - 1)
    }

    return(
        <div className="position-relative p-2 text-center">
            {/* <p>{props.productName}</p> */}
            <div className="d-flex justify-content-between border">
                <button onClick={res} className="btn">-</button>
                <span>{state}</span>
                <button onClick={add} className="btn">+</button>
            </div>
            <button className="btn btn-outline-primary w-100">Agrregar al carrito</button>
        </div>
    )
}

export default ItemCount;