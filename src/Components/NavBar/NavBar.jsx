import logoSVG from './NavBarAssets/VoSuHi.svg'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(){

    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

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

            <Link to={'/InfoPage'} className="nav-link" style={{width: '25%'}}>
                <button className='nav-button' style={{width: '100%'}}>
                    <ShoppingBasketOutlinedIcon fontSize="large"/>
                </button>
            </Link>
        </div>
    )
}

export default NavBar