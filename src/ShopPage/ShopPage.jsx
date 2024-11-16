import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function ShopPage() {
    return (
        <div>
            <NavBar/>
            <p>Drek na palci</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default ShopPage;
