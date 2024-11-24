import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import loginICON from '../LoginPage/LoginPageAssets/login-3-svgrepo-com.svg'
import './LoginPage.css'

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
                        <div className='stock-btn-container'>
                            <p>or log in with</p>
                            <button className="stock-login-btn">
                                &emsp;<i className="fa fa-facebook-official"></i>&emsp;Facebook
                            </button>
                            <button className="stock-login-btn">
                                <i className="fa fa-google"></i>&emsp;Google
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default LoginPage