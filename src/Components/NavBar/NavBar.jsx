import logoSVG from './NavBarAssets/VoSuHi.svg'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import './NavBar.css'
import { Link } from 'react-router-dom'
import Cart from "../CartFunctions/Cart.jsx";
import {useState} from "react";


function NavBar(){

    const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div className='navbar'>

            <Link to='/' className="nav-link" style={{width: '25%'}}>
                <button className='nav-button' style={{width: '100%'}}>
                    <img src={logoSVG} alt="Logo" width="70" height="70"/>
                </button>
            </Link>

            <Link to='/ShopPage' className="nav-link" style={{width: '25%'}}>
                <button className='nav-button' style={{width: '100%'}}>
                <LocalGroceryStoreOutlinedIcon fontSize="large"/>
            </button>
            </Link>

            {token ? ( <Link to='/ProfilePage' className="nav-link" style={{width: '25%'}}>
            <button className='nav-button' style={{width: '100%'}}>
                <AccountCircleOutlinedIcon fontSize="large"/>
            </button>
        </Link>) : (
            <Link to='/LoginPage' className="nav-link" style={{width: '25%'}}>
                <button className='nav-button' style={{width: '100%'}}>
                    <AccountCircleOutlinedIcon fontSize="large"/>
                </button>
            </Link>
            )}

            <div style={{ width: '25%' }}>
                <button
                    className='nav-button'
                    style={{ width: '100%' }}
                    onClick={handleOpenModal} // Open modal on click
                >
                    <ShoppingBasketOutlinedIcon fontSize="large" />
                </button>
            </div>


            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <Cart/>
                        <div className="redirect-buttons">
                            <button className="close-modal" onClick={handleCloseModal}>
                                <p>Continue Shopping</p>
                            </button>
                            <Link to='/CheckoutPage' className="nav-link" style={{width: '25%'}}>
                            <button className="toCheckoutPage" onClick={handleCloseModal}>
                                <p>Checkout</p>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar