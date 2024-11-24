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
                        <hr></hr>
                    </div>

                    <div className='login-bot'>

                    </div>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default LoginPage