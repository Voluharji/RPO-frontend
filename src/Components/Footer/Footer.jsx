import "./Footer.css"
import logo from "../NavBar/NavBarAssets/VoSuHi.svg"

function Footer() {

    return (
        <div className="Footer">
                <img src={logo} className="logo" alt="logo" width="110px"/>
            <div className="social-links">
                <i className="fa fa-pinterest-p"></i>
                <i className="fa fa-snapchat"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-facebook-official"></i>
            </div>
        </div>
    )
}

export default Footer;
