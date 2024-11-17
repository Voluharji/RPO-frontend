import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function ShopPage() {
    return (
        <div>
            <div className="Shoppage-navBar">
                <NavBar/>
            </div>
            <div className="flex-wrapper">
            <div className="Shoppage">

            </div>
                <div className="shoppage-footer">
            <Footer/>
                </div>

            </div>
        </div>
    );
}

export default ShopPage;
