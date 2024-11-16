import './homepage.css'
import img1 from './HomepageAssets/shoes-svgrepo-com.svg';
function homepage() {

    return (
        <div className='homepage-container'>
            <div className='homepage-top'>
                <button className='nav-button' style={{ width: '340px' }}>
                    <span className='nav-button-text'>VoSuHi</span>
                </button>
                <button className='nav-button' style={{ width: '170px' }}>
                    <span className='nav-button-text'>Home</span>
                </button>
                <button className='nav-button' style={{ width: '220px' }}>
                    <span className='nav-button-text'>Contact</span>
                </button>
                <button className='nav-button' style={{ width: '170px' }}>
                    <span className='nav-button-text'>🧺</span>
                </button>
            </div>

            <div className='homepage-mid'>
                <div className='moto'>
                    <h1 className='moto-text'>
                        <b>Shoe shopping: <br /> the only cardio <br /> you’ll actually <br /> enjoy.</b>
                    </h1>
                </div>
                <img className="moto-svg" src={img1} alt="SVG Icon" width="320" height="320" />
            </div>


            <button className='shop-now-button'><p className='shop-now-button-text'>SHOP NOW</p></button>

            <div className='homepage-bot'>
                <p className='about-us-text'>ABOUT US: we are a small startup business located in Slovenija Maribor.
                     Our main mission is to bring you tested high-quality products, with a focus on premium footwear.
                     As shoe enthusiasts ourselves, we wanted to share our passion, by offering a selection of the best brands under one roof. 
                     We pride ourselves on providing an exceptional shopping experience, by offering a wide variety of footwear.
                     Whether you're looking for athletic performance or everyday casuals, we have something for everyone.
                     </p>
            </div>

        </div>
    )
}

export default homepage
