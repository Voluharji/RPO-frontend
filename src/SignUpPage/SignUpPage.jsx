import NavBar from '../Components/NavBar';
import './SignUpPage.css'
import {Link} from "react-router-dom";
import Footer from "../Components/Footer.jsx";
function SignUpPage(){
    return(
        <>
            <NavBar/>
                <main>
                    <div className='signup-container'>
                        <p>To sign up fill the fields below:</p>

                        <div className='signup-form'>
                            <input className='signup-input' type='text' placeholder="Username"/>
                            <input className='signup-input' type='text' placeholder="Password"/>
                            <input className='signup-input' type='text' placeholder="Email"/>
                            <input className='signup-input' type='text' placeholder="Phone number"/>
                            <input className='signup-input' type='text' placeholder="Firstname"/>
                            <input className='signup-input' type='text' placeholder="Lastname"/>
                        </div>

                        <div>
                            <button className='submit-btn'><b>SUBMIT</b></button>
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