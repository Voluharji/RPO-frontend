import './ShopCard.css'
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";
function ShopCard({name,price,description,photo, id}){

        const navigate = useNavigate();
        const handleCardClick = () => {
            navigate(`/ShopPage/${id}`);
        };

        return(
        <div className='shop-card' onClick={handleCardClick}>
            <div className='shop-card-photo'>
                <img src={photo} alt='img' height='100%' width='100%'/>
            </div>
            <div className='shop-card-info'>
                <br/>
                <h3 className='shop-card-name'>{name}</h3>

                <br/>
                <p className='price-text'><b>{price}</b></p>
                <br/>
                <Rating defaultValue={5} size="small" />
            </div>
        </div>
    )
}

export default ShopCard