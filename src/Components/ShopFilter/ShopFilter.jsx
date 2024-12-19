import './ShopFilter.css'
import PriceRangeSelector from "./ShopFilterComponents/PriceRangeSelector/PriceRangeSelector.jsx";
import CheckboxForum from "./ShopFilterComponents/CheckboxForm/CheckboxForum.jsx";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu.jsx";
function ShopFilter(){
    return(
        <div className='shop-filter-container'>
            <CategoriesMenu/>

            <br/>
            <p className='title-text'>Set price (min/max):</p>
            <PriceRangeSelector/>

            <p className='title-text'>Choose brand:</p>
            <div className='checkbox-container'>
                <CheckboxForum name={"Adidas"} id={"brand1"}/>
                <CheckboxForum name={"Nike"} id={"brand2"}/>
                <CheckboxForum name={"Puma"} id={"brand3"}/>
            </div>

            <br/>
            <p className='title-text'>Choose size:</p>
            <div className='checkbox-container'>
                <CheckboxForum name={"39"} id={"size1"}/>
                <CheckboxForum name={"40"} id={"size2"}/>
                <CheckboxForum name={"41"} id={"size3"}/>
            </div>
            
            <input className='forum-submit-btn' type="submit" value="Submit"/>

        </div>
    )
}

export default ShopFilter