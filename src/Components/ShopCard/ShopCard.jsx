import CartSvg from './ShopCardAssets/shopping-cart-outline-svgrepo-com.svg'
import './ShopCard.css'

function ShopCard({name,price,description,photo}){

    return(
        <div className='shop-card'>
            <div className='shop-card-photo'>
                <img src={photo} alt='img' height='100%' width='100%'/>
            </div>
            <div className='shop-card-info'>
                <br/>
                <h3 className='shop-card-name'>{name}</h3>
                <br/>
                <p className='price-text'><b>{price}</b></p>
                <br/>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ShopCard