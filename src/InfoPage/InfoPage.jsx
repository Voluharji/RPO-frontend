import NavBar from '../Components/NavBar/NavBar.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import InfoCards from "../Components/InfoCards/InfoCards.jsx";
import './InfoPage.css'
import jasaICON from '../InfoPage/Info page assets/hlid.jpg';
import sorgoICON from '../InfoPage/Info page assets/2d1aff5a-5f49-479d-aa71-b83d5d70b361.jpg'
import jakobICON from '../InfoPage/Info page assets/9319916.jpg'
import jernejICON from '../InfoPage/Info page assets/st,small,507x507-pad,600x600,f8f8f8.jpg'

function InfoPage() {
    return (
        <>
            <NavBar/>
            <main>
                <div className='info-card-container'>
                    <InfoCards name={"Nejc"} surname={"Šorgo"} mail={"vosuhi@gmail.com"} slika={sorgoICON}
                               telephoneNum={"000 000 000"}
                               about={"Broccoli head"}></InfoCards>


                    <InfoCards name={"Jaša"} surname={"Potočnik"} mail={"vosuhi@gmail.com"} slika={jasaICON}
                               telephoneNum={"000 000 000"}
                               about={"Anime girl"}></InfoCards>


                    <InfoCards name={"Jernej"} surname={"Lobnik"} mail={"vosuhi@gmail.com"} slika={jernejICON}
                               telephoneNum={"000 000 000"}
                               about={"A chill guy"}></InfoCards>


                    <InfoCards name={"Jakob"} surname={"Renčelj"} mail={"vosuhi@gmail.com"} slika={jakobICON}
                               telephoneNum={"000 000 000"}
                               about={"Local Kebab consumer"}></InfoCards>
                </div>

            </main>

            <Footer/>
        </>
    );
}

export default InfoPage;
