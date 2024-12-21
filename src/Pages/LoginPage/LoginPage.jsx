import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import './LoginPage.css'
import {Link, useNavigate} from "react-router-dom";
import LoginFunction from "../../Components/LoginSignUpFunctions/LoginFunction.jsx";
import {useState} from "react";
import {Alert, Checkbox, FormControlLabel} from "@mui/material";

function LoginPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleLogin = () => {
        LoginFunction({ username, password })
            .then(() => {
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


            {error && (
                <Alert severity="warning" onClose={() => setError(null)}>
                    {error}
                </Alert>
            )}


            <section className='login-top-section'>
                <p className='login-top-text'><b>Log in <br/>for even better <br/>shopping experience!</b></p>
            </section>


            <section className='login-mid-section'>
                <div className='login-core'>
                    <input className='input-text-field' type='text' placeholder="Username" value={username}
                           onChange={(e) => setUsername(e.target.value)}/>

                    <input className='input-text-field' type='text' placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>

                    <div className='login-btn-div'>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value={"remember me"}
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
                </div>
            </section>


            <Footer/>
        </>
    )
}

export default LoginPage