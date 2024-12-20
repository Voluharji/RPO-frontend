import NavBar from '../../Components/NavBar/NavBar.jsx';
import './SignUpPage.css'
import {Link} from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";
import {useState} from "react";
import SignUpFunction from "../../Components/LoginSignUpFunctions/signUpFunction.jsx";
import LoginFunction from "../../Components/LoginSignUpFunctions/LoginFunction.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function SignUpPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();


    const handleSignUp = () => {

        if (!username || !password || !email) {
            alert("Please fill in all required fields: username, password, and email.");
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

        SignUpFunction({email, username, password,phoneNumber,firstName, lastName})
            .then(() => {
                LoginFunction({username, password})
                    .then(()=>{
                    navigate("/ProfilePage");
                })

            })
        .catch((error) => {
            console.error("SignUp failed:", error);
            alert("Sign up failed! Something went wrong.");
        });
    };

    return(
        <>
            <NavBar/>
                <main>
                    <div className='signup-container'>
                        <p>To sign up fill the fields below:</p>

                        <div className='signup-form'>
                            <input className='signup-input' type='text' placeholder="Username" value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>
                            <input className='signup-input' type='text' placeholder="Password" value={password}
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

                        <div>
                            <button className='submit-btn' onClick={handleSignUp}><b>SUBMIT</b></button>
                        </div>
                        <Link to="/LoginPage" style={{color: 'black', padding: '5%'}}>
                            Back
                        </Link>
                    </div>

                </main>
            <Footer/>
        </>
    )
}

export default SignUpPage