import Cart from './Assets/Cart.svg'

function CartWidget (props) {

    const styleCart ={
        width: props.width,
        height: props.height,
    }
    return (
        <div style={styleCart}>
            <img src={Cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget