import NavBar from '../Components/NavBar/NavBar.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import loginICON from '../LoginPage/LoginPageAssets/login-3-svgrepo-com (1).svg'
import './LoginPage.css'
import {Link} from "react-router-dom";

function LoginPage(){
    return(
        <>
            <NavBar/>

            <main>
                <div className='login-container'>
                    <div className='login-top'>
                        <img src={loginICON} alt='login_icon' width='60px' height='60px'/>
                    </div>

                    <div className='login-mid'>
                        <input className='input-text-field' type='text' placeholder="Username"/>
                        <input className='input-text-field' type='text' placeholder="Password"/>
                        <button className='login-button'><b>LOG IN</b></button>

                        <div className="remember-checkbox">
                            <input type="checkbox" id="remember-me" value="remebmer-me"/>
                            <label htmlFor="remember-me"> <i>Remember me </i> </label>
                        </div>

                        <hr></hr>
                    </div>

                    <br/>

                    <div className='login-bot'>
                        <div className='register-container'>
                            <p>no account yet?</p>

                            <Link to="/SignUpPage">
                                <button className="signup-btn"><b>SIGN UP</b></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default LoginPage