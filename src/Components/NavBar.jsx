import basketSVG from './NavBarAssets/shopping-basket-svgrepo-com.svg'
import contactlistSVG from './NavBarAssets/contacts-svgrepo-com.svg'
import homeSVG from './NavBarAssets/home-1-svgrepo-com.svg'
import logoSVG from './NavBarAssets/VoSuHi.svg'
import profileSVG from './NavBarAssets/profile-svgrepo-com.svg'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(){

    return(
        <div className='navbar'>
            <button className='nav-button' style={{width: '20%'}}>
                <img src={logoSVG} alt="Logo" width="70" height="70"/>
            </button>

            <Link to='/' className="nav-link" style={{width: '20%'}}>
                <button className='nav-button' style={{width: '100%'}}>
                    <img src={homeSVG} alt="Home Icon" width="40" height="40"/>
                </button>
            </Link>

            <button className='nav-button' style={{width: '20%'}}>
                <img src={contactlistSVG} alt="Contact list Icon" width="40" height="40"/>
            </button>

            <button className='nav-button' style={{width: '20%'}}>
                <img src={basketSVG} alt="Basket Icon" width="40" height="40"/>
            </button>

            <Link to='/LoginPage' className="nav-link" style={{width: '20%'}}>
            <button className='nav-button' style={{width: '100%'}}>
                <img src={profileSVG} alt="Profile Icon" width="40" height="40"/>
            </button>
            </Link>
        </div>
    )
}

export default NavBar