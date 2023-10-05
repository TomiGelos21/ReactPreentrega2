import ButtonVerMas from '../Buttons/ButtonVerMas';
import ItemCount from './ItemCount';

function ItemCard (props) {

    return (
        <div>
            <div>
                <img src={props.img} alt="imagen"/>
            </div>
            <h3>{props.title}</h3>
            <h5>{props.price}</h5>
            <p>{props.txt}</p>
            <ButtonVerMas label= "ver mas"/>

            <div>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemCard