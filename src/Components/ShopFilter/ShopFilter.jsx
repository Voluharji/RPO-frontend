import './ShopFilter.css'
import PriceRangeSelector from "./ShopFilterComponents/PriceRangeSelector/PriceRangeSelector.jsx";

function ShopFilter(){
    return(
        <div className='shop-filter-container'>
            <PriceRangeSelector/>
        </div>
    )
}

export default ShopFilter