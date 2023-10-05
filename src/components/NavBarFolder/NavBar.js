import CartWidget from '../CartWidgetFolder/CartWidget';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-h2"> FitFuel </h2>

            <div className="navlinks">
                <Link className="links" to="/">Inicio</Link>
                <Link className="links" to="/Creatinas">Creatinas</Link>
                <Link className="links" to="/Protes">Proteinas</Link>
                <Link className="links" to="/Vitaminas">Vitaminas</Link>
            </div>

            <CartWidget className="cartwidget" width="20px" height="20px" />
        </nav>
    )
}

export default NavBar