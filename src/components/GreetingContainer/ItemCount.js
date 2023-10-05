import { useState } from "react";

function ItemCount(){
    let [count, setCount] = useState (1);

    function clickAdd (){
        setCount(count+1);
    }

    function clickSubstract (){
        if (count > 1) setCount(count-1);
    }

    return <div>
        <button onClick={clickSubstract}>-</button>
        <p>{count}</p>
        <button onClick={clickAdd}>+</button>
        <button>Agregar al Carrito</button>
    </div>
}

export default ItemCount