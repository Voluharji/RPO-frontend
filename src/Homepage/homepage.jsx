import './homepage.css'
import fotka from './HomepageAssets/nogevluft.jpg'
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar.jsx';
import Footer from '../Components/Footer/Footer.jsx'

function homepage() {

    return (
        <>
            <NavBar/>

                <main>

                    <div className='homepage-mid'>
                        <div className='moto'>
                            <h1 className='moto-text'>
                                <b>Shoe shopping: <br /> the only cardio <br /> you’ll actually <br /> enjoy.</b>
                            </h1>
                        </div>

                            <img className="photo" src={fotka} alt="SVG Icon" width="320" height="320" />

                        <div>
                            <Link to="/ShopPage" style={{ textDecoration: 'none' }}>
                                <button className="shop-now-btn">
                                SHOP NOW
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='homepage-bot'>
                        <p className='about-us-text'><b>ABOUT US:</b> we are a small startup business located in Slovenija
                            Maribor.
                            Our main mission is to bring you tested high-quality products, with a focus on premium footwear.
                            As shoe enthusiasts ourselves, we wanted to share our passion, by offering a selection of the
                            best brands under one roof.
                            We pride ourselves on providing an exceptional shopping experience, by offering a wide variety
                            of footwear.
                            Whether you are looking for athletic performance or everyday casuals, we have something for
                            everyone.
                        </p>
                    </div>
                </main>

            <Footer/>
        </>
    )
}

export default homepage
