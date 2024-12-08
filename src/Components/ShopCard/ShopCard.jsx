import CartSvg from './ShopCardAssets/shopping-cart-outline-svgrepo-com.svg'
import './ShopCard.css'
import {useNavigate} from "react-router-dom";


function ShopCard({name,price,photo,id}){

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/ShopPage/${id}`);
    };

    return(
        <div className='shop-card'  onClick={handleCardClick}>
            <div className='shop-card-photo'>
                <img src={photo} alt='img' height='100%' width='100%'/>
            </div>
            <div className='shop-card-info'>
                <h3 className='shop-card-name'>{name}</h3>
                <p className='price-text'><b>{price}</b></p>
                <button className='shop-card-btn'><img src={CartSvg} alt='Cart' height='100%' width='100%'/></button>
            </div>
        </div>
    )
}

export default ShopCard