import './homepage.css'
import fotka from './HomepageAssets/IMG_4541.jpg'
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar.jsx';
import Footer from '../Components/Footer/Footer.jsx'
import ShoeSwiper from "../Components/ShoeSwiper/ShoeSwiper.jsx";

function homepage() {

    return (
        <>
        <NavBar/>

        <section className='homepage-section'  style={{ background: 'white' }}>

            <div className='moto-and-shop-btn'>
                <h1 className='moto-text'>
                    <b>Shoe shopping: <br/> the only cardio <br/> you’ll actually <br/> enjoy.</b>
                </h1>

                <div>
                    <Link to="/ShopPage" style={{textDecoration: 'none'}}>
                        <button className="shop-now-btn">
                            SHOP NOW
                        </button>
                    </Link>
                </div>
            </div>

        </section>


            <section className='homepage-section-swiper' style={{background: 'white'}}>
                <ShoeSwiper/>
            </section>

            <section className='homepage-section' style={{background: '#fff9d4'}}>

                <p className='about-us-text'><b>ABOUT US:</b> we are a small startup business located in
                    Slovenija
                Maribor.
                Our main mission is to bring you tested high-quality products, with a focus on premium
                footwear.
                As shoe enthusiasts ourselves, we wanted to share our passion, by offering a selection
                of
                the
                best brands under one roof.
                We pride ourselves on providing an exceptional shopping experience, by offering a wide
                variety
                of footwear.
                Whether you are looking for athletic performance or everyday casuals, we have something
                for
                everyone.
            </p>
        </section>


            <Footer/>
        </>
    )
}

export default homepage
