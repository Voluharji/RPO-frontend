import CartSvg from './ShopCardAssets/shopping-cart-outline-svgrepo-com.svg'
import './ShopCard.css'

function ShopCard({name,price,photo}){

    return(
        <div className='shop-card'>
            <div className='shop-card-photo'>
                <img src={photo} alt='img' height='100%' width='100%'/>
            </div>
            <div className='shop-card-info'>
                <h3 className='shop-card-name'>{name}</h3>
                <p className='price-text'>{price}</p>
                <button className='shop-card-btn'><img src={CartSvg} alt='Cart' height='100%' width='100%'/></button>
            </div>
        </div>
    )
}

export default ShopCard