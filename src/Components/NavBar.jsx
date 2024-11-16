import basketSVG from './NavBarAssets/shopping-basket-svgrepo-com.svg'
import contactlistSVG from './NavBarAssets/contacts-svgrepo-com.svg'
import homeSVG from './NavBarAssets/home-1-svgrepo-com.svg'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(){

    return(
    <div className='navbar'>
        <button className='nav-button' style={{ width: '340px' }}>
            <span className='nav-button-text'>VoSuHi</span>
        </button>

        <Link to='/'>
        <button className='nav-button' style={{ width: '170px' }}>
        <img src={homeSVG} alt="Home Icon" width="40" height="40"/>
        </button>
        </Link>
        
        <button className='nav-button' style={{ width: '220px' }}>
        <img src={contactlistSVG} alt="Contact list Icon" width="40" height="40"/>
        </button>
        <button className='nav-button' style={{ width: '170px' }}>
        <img src={basketSVG} alt="Basket Icon" width="40" height="40"/>
        </button>
    </div>
    )
}

export default NavBar