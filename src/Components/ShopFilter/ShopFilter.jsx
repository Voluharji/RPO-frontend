import './ShopFilter.css'
import CheckboxForum from "./ShopFilterComponents/CheckboxForm/CheckboxForum.jsx";
import {useState} from "react";
import {LinearProgress, Slider} from "@mui/material";
import axios from "axios";
function ShopFilter({ onProductsChange }){
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
                const response = await axios.post("http://localhost:8081/api/filter", data,{
                    headers: {
                        // Overwrite Axios's automatically set Content-Type
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log("Server Response:", response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }

        },2000)
    }


    // Price slider
    const minDistance = 50;
    const [value, setValue] = useState([0, 1000]);

    const handlePriceChange = async (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 1000 - minDistance);
                setValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
            }
        } else {
            setValue(newValue);
        }

        const data = {minPrice: value[0], maxPrice: value[1]};

        console.log("Data:", data);

        try {
            const response = await axios.post("http://localhost:8081/api/filter", data, {
                headers: {
                    // Overwrite Axios's automatically set Content-Type
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Server Response:", response.data);
            onProductsChange(response.data);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };



    return(
        <div className='shop-filter-container'>

            <section className='filter-section'>

                <p className='title-text'>Set price (min/max):</p>


                <Slider
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={value}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    disableSwap
                    min={0}
                    max={1000}

                    sx={{width: "50%", paddingTop: "12%", color: "rgb(215, 174, 121)"}}
                />
                <hr/>


                <p className='title-text'>Choose brand:</p>
                <div className='checkbox-container-brands'>
                    <CheckboxForum name={"Adidas"} id={"brand1"} onChange={handleBrandChange}/>
                    <CheckboxForum name={"Nike"} id={"brand2"} onChange={handleBrandChange}/>
                    <CheckboxForum name={"Puma"} id={"brand3"} onChange={handleBrandChange}/>
                    <CheckboxForum name={"Joma"} id={"brand4"} onChange={handleBrandChange}/>
                    <CheckboxForum name={"Crocs"} id={"brand5"} onChange={handleBrandChange}/>
                    <CheckboxForum name={"Vans"} id={"brand6"} onChange={handleBrandChange}/>
                </div>

                <br/>
                <p className='title-text'>Choose size:</p>
                <div className='checkbox-container-sizes'>
                    <CheckboxForum name={"36"} id={"size1"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"37"} id={"size2"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"38"} id={"size3"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"39"} id={"size4"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"40"} id={"size5"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"41"} id={"size6"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"42"} id={"size7"} onChange={handleSizeChange}/>
                    <CheckboxForum name={"43"} id={"size8"} onChange={handleSizeChange}/>
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