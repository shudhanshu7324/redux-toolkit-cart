import './Header.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {

    const cartCount = useSelector((state)=>state.cart.cart);

    return(
        <div>
            <div className="header">
                <Link to={'/'}><span>Ecommerce</span></Link>
                <Link to="/cart">Cart {cartCount.length}</Link>
            </div>
        </div>
    );
}

export default Header;