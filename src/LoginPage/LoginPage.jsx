import NavBar from '../Components/NavBar/NavBar.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import loginICON from '../LoginPage/LoginPageAssets/login-3-svgrepo-com (1).svg'
import './LoginPage.css'
import {Link, useNavigate} from "react-router-dom";
import LoginFunction from "../Components/LoginSignUpFunctions/LoginFunction.jsx";
import {useState} from "react";

function LoginPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        LoginFunction({ username, password })
            .then(() => {
                navigate("/ProfilePage");
            })
            .catch((error) => {
                console.error("Login failed:", error);
                alert("Login failed! Please check your credentials.");
            });
    };

    return(
        <>
            <NavBar/>

            <main>
                <div className='login-container'>
                    <div className='login-top'>
                        <img src={loginICON} alt='login_icon' width='60px' height='60px'/>
                    </div>

                    <div className='login-mid'>
                        <input className='input-text-field' type='text' placeholder="Username" value={username}
                               onChange={(e) => setUsername(e.target.value)}/>

                        <input className='input-text-field' type='text' placeholder="Password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>

                        <button className='login-button' onClick={handleLogin}><b>LOG IN</b></button>

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