import basketSVG from './NavBarAssets/shopping-basket-svgrepo-com (1).svg'
import infoSVG from './NavBarAssets/info-svgrepo-com.svg'
import homeSVG from './NavBarAssets/home-smart-svgrepo-com.svg'
import logoSVG from './NavBarAssets/VoSuHi.svg'
import profileSVG from './NavBarAssets/profile-svgrepo-com.svg'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(){

    return(
        <div className='navbar'>

            <Link to='/' className="nav-link" style={{width: '25%'}}>
                <button className='nav-button' style={{width: '100%'}}>
                    <img src={logoSVG} alt="Logo" width="70" height="70"/>
                </button>
            </Link>

            <Link to='/ShopPage' className="nav-link" style={{width: '25%'}}>
                <button className='nav-button' style={{width: '100%'}}>
                <img src={basketSVG} alt="Basket Icon" width="40" height="40"/>
            </button>
            </Link>

            <Link to='/LoginPage' className="nav-link" style={{width: '25%'}}>
                <button className='nav-button' style={{width: '100%'}}>
                    <img src={profileSVG} alt="Profile Icon" width="40" height="40"/>
                </button>
            </Link>

            <button className='nav-button' style={{width: '25%'}}>
                <img src={infoSVG} alt="Contact list Icon" width="40" height="40"/>
            </button>
        </div>
    )
}

export default NavBar