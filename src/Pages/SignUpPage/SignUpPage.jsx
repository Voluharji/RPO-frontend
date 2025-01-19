import NavBar from '../../Components/NavBar/NavBar.jsx';
import './SignUpPage.css'
import {Link} from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";
import {useState} from "react";
import SignUpFunction from "../../Components/LoginSignUpFunctions/signUpFunction.jsx";
import LoginFunction from "../../Components/LoginSignUpFunctions/LoginFunction.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Alert} from "@mui/material";


function SignUpPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);


    const handleSignUp = () => {


        if (!username || !password || !email || !firstName || !lastName || !phoneNumber) {
            setError("Please fill in all required fields: username, password, email, first name, last name, and phone number.");
            return;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError("Invalid email address");
            return;
        }

        if (isNaN(phoneNumber)) {
            setError("Please enter a valid phone number");
            return;
        }
        /*if (username) {
            axios.get('/users/get')
                .then(res => {
                    res.data.forEach(row => {
                        if (row.username === username) {
                            alert('Username already exists');
                        }
                    });
                }).catch(err => {
                console.log(err);
            })
        }*/

        SignUpFunction({ email, username, password, phoneNumber, firstName, lastName })
            .then(() => {
                LoginFunction({ username, password })
                    .then(() => {
                        navigate("/ProfilePage");
                    })
                    .catch((error) => {
                        console.error("Login failed:", error);
                        setError("Login failed after sign-up. Please try again.");
                    });
            })
            .catch((error) => {
                console.error("SignUp failed:", error);
                setError("Sign up failed! Something went wrong.");
            });
    };

    return(
        <>
            <NavBar/>

            <section className='signup-top-section'>
                <div className='signup-container'>
                <div className='signup-form'>
                    <input className='signup-input' type='text' placeholder="Username" value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                    <input className='signup-input' type='password' placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <input className='signup-input' type='text' placeholder="Email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input className='signup-input' type='text' placeholder="Phone number" value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <input className='signup-input' type='text' placeholder="Firstname" value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}/>
                    <input className='signup-input' type='text' placeholder="Lastname" value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div className='signup-btn-section'>
                    <Link to="/LoginPage">
                        <button className="return-btn"><b>RETURN</b></button>
                    </Link>
                    <button className='submit-btn' onClick={handleSignUp}><b>SUBMIT</b></button>
                </div>

                </div>

            </section>
            {error && (
                <Alert severity="warning" onClose={() => setError(null)}>
                    {error}
                </Alert>
            )}

            <section className='signup-bot-section'>
                    <p className='signup-bot-text'><b>No account... <br/>Sign up!</b></p>
            </section>


            <Footer/>
        </>
    )
}

export default SignUpPage