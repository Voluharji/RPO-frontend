import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import './LoginPage.css'
import {Link, useNavigate} from "react-router-dom";
import LoginFunction from "../../Components/LoginSignUpFunctions/LoginFunction.jsx";
import {useEffect, useState} from "react";
import {Alert, Checkbox, FormControlLabel} from "@mui/material";

function LoginPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return '';
    };

    useEffect(() => {
        const savedUsername = getCookie('username');
        if (savedUsername) {
            setUsername(savedUsername);
            setRememberMe(true);
        }
    }, []);


    const handleLogin = () => {
        LoginFunction({ username, password })
            .then(() => {
                if (rememberMe) {
                    setCookie('username', username, 7);
                } else {
                    setCookie('username', '', -1);
                }
                navigate("/ProfilePage");
            })
            .catch((error) => {
                console.error("Login failed:", error);
                setError("Login failed! Please check your credentials.");
            });
    };

    return(
        <>
            <NavBar/>

            <section className='login-top-section'>
                <p className='login-top-text'><b>Log in <br/>for even better <br/>shopping experience!</b></p>
            </section>


            <section className='login-mid-section'>
                <div className='login-core'>
                    <input className='input-text-field' type='text' placeholder="Username" value={username}
                           onChange={(e) => setUsername(e.target.value)}/>

                    <input className='input-text-field' type='password' placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>

                    <div className='login-btn-div'>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    sx={{
                                        '&.Mui-checked': {
                                            color: "white",
                                        },
                                    }}
                                />
                            }
                            label={"Remember me"}
                            sx={{color: "black"}}
                        />
                        <Link to="/SignUpPage">
                            <button className="signup-btn"><b>SIGN UP</b></button>
                        </Link>
                        <button className='login-button' onClick={handleLogin}><b>LOG IN</b></button>
                    </div>

                    {error && (
                        <Alert severity="warning" onClose={() => setError(null)}>
                            {error}
                        </Alert>
                    )}
                </div>


            </section>


            <Footer/>
        </>
    )
}

export default LoginPage