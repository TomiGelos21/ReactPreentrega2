import ItemCard from './ItemCard';
import productos from '../../Productos';
import { useState } from 'react';
import { useEffect } from 'react';

function getData(){
    return new Promise (resolve => {
        setTimeout ( () => {resolve(productos)}, 1000)
    })
}

function ItemListContainer () {

    let [DataBase, setDataBase] = useState([]);

        useEffect(() => {
            getData().then((respuesta) => {setDataBase (respuesta);
            });
        }, []);


    return (
        <main>
            <h1>Bienvenidxs a FitFuel!</h1>
            {
            DataBase.map ((itemArray) => (
                <ItemCard
                    key = {itemArray.id}
                    {...itemArray}/>)
            )}

        </main>
    )

}

export default ItemListContainer