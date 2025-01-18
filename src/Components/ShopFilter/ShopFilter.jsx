import './ShopFilter.css'
import PriceRangeSelector from "./ShopFilterComponents/PriceRangeSelector/PriceRangeSelector.jsx";
import CheckboxForum from "./ShopFilterComponents/CheckboxForm/CheckboxForum.jsx";
import {useState} from "react";
import {LinearProgress} from "@mui/material";
import axios from "axios";
function ShopFilter(){
    const [loading, setLoading] = useState(false);
    const [selectedBrands,setSelectedBrands] = useState([]);
    const [selectedSize,setSelectedSize] = useState([]);

    const handleBrandChange = (isChecked, name) => {
        setSelectedBrands((prev) =>
            isChecked ? [...prev, name] : prev.filter((brand) => brand !== name)
        );
    };

    const handleSizeChange = (isChecked, name) => {
        setSelectedSize((prev) =>
            isChecked ? [...prev, name] : prev.filter((size) => size !== name)
        );
    };


    const handleSubmit = () =>{
        setLoading(true);
        setTimeout(async () => {
            setLoading(false)

            const data = { tags: selectedBrands, sizes: selectedSize};

            console.log("Data:", data);

            try {
                const response = await axios.post("https://api/product_search", data);
                console.log("Server Response:", response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }

        },2000)
    }

    return(
        <div className='shop-filter-container'>

            <section className='filter-section'>

                <p className='title-text'>Set price (min/max):</p>
                <PriceRangeSelector/>

                <p className='title-text'>Choose brand:</p>
                <div className='checkbox-container'>
                    <CheckboxForum name={"Adidas"} id={"brand1"} onChange={handleBrandChange}/>
                    <CheckboxForum name={"Nike"} id={"brand2"} onChange={handleBrandChange}/>
                    <CheckboxForum name={"Puma"} id={"brand3"} onChange={handleBrandChange}/>
                </div>

                <br/>
                <p className='title-text'>Choose size:</p>
                <div className='checkbox-container'>
                    <CheckboxForum name={"39"} id={"size1"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"40"} id={"size2"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"41"} id={"size3"} onChange={handleSizeChange}/>
                </div>

            </section>

            {
                loading ? (
                    <LinearProgress color={"inherit"} sx={{color: "rgb(215, 174, 121)",width: "100%"}}/>
                ) : (
                    <input onClick={handleSubmit} className='forum-submit-btn' type="submit" value="Submit"/>
                )
            }

        </div>
    )
}

export default ShopFilter