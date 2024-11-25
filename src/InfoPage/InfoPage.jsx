import NavBar from '../Components/NavBar/NavBar.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import InfoCards from "../Components/InfoCards/InfoCards.jsx";
import './InfoPage.css'
import photo1 from '../Components/InfoCards/infocardsAssets/computer-svgrepo-com.svg';
import photo2 from './Info page assets/computer2.svg'

function InfoPage() {
    return (
        <>
            <NavBar/>
            <main>
                <div className='login-top'>
                    <InfoCards name={"Nejc"} surname={"Šorgo"} mail={"vosuhi@gmail.com"} slika={photo1}
                               telephoneNum={"000 000 000"}
                               about={"A programer that doesent like deadlines"}></InfoCards>
                </div>


                <div className='login-mid1'>
                    <InfoCards name={"Jaša"} surname={"Potočnik"} mail={"vosuhi@gmail.com"} slika={photo1}
                               telephoneNum={"000 000 000"}
                               about={"A backend programmer, that is working on our site,he mainly specializes in database managment."}></InfoCards>
                </div>


                <div className='login-mid2'>
                    <InfoCards name={"Jernej"} surname={"Lobnik"} mail={"vosuhi@gmail.com"} slika={photo1}
                               telephoneNum={"000 000 000"}
                               about={"A frontend programmer, that is responible for the look of our site, if you have any complains or suggestions please turn to him, he is welcome to feedback."}></InfoCards>
                </div>

                <div className='login-mid3'>
                    <InfoCards name={"Jakob"} surname={"Renčelj"} mail={"vosuhi@gmail.com"} slika={photo1}
                               telephoneNum={"000 000 000"}
                               about={"A programer that doesent like deadlines"}></InfoCards>
                </div>


            </main>
            <Footer/>
        </>
    );
}

export default InfoPage;
