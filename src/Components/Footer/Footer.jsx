import "./Footer.css"
import logo from "../NavBar/NavBarAssets/VoSuHi.svg"

function Footer() {

    return (
        <div className="Footer">
            <div className="footer-container-left">
                <img src={logo} className="logo" alt="logo" width="60px"/>
                <div className="social-links">
                    <i className="fa fa-facebook-official"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-snapchat"></i>
                    <i className="fa fa-pinterest-p"></i>
                    <i className="fa fa-twitter"></i>
                </div>
            </div>
            <div className="footer-container-right">
                <h5>Kontakt:</h5>
                <div className="contact-data">
                    <i className="fa fa-map-marker"></i> Koroška cesta 46, 2000 Maribor <br/>
                    <i className="fa fa-phone"></i> +000 000 00 0 <br/>
                    <i className="fa fa-envelope"></i> vosuhi@gmail.com <br/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
