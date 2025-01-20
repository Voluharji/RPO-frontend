import {useEffect, useState} from 'react';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";
import ShopFilter from "../../Components/ShopFilter/ShopFilter.jsx";
import ShopCard from "../../Components/ShopCard/ShopCard.jsx";
import CategoriesMenu from "../../Components/CategoriesMenu/CategoriesMenu.jsx";
import Test from '../Homepage/HomepageAssets/nekiNeki.jpg'
import './shoppage.css';
import {LinearProgress} from "@mui/material";
import axios from "axios";

function ShopPage() {

    const [products, setProducts] = useState([]);
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if (firstRender) {
            axios
                .get(`http://localhost:8081/api/get_products`)
                .then((res) => {
                    const data = res.data;
                    setProducts(data);
                    setFirstRender(false);
                })
                .catch((err) => {
                    console.error("Error fetching products:", err);
                });
        }
    }, [firstRender]);


    const updateProducts = (newProducts) => {
        setProducts(newProducts);
    };

    return (
        <>
            <NavBar />
            <SearchBar />
            <CategoriesMenu/>

            <section>
                <ShopFilter onProductsChange={updateProducts} />
            </section>

            <section className='card-section'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <ShopCard
                            key={product.id} // Use a unique key for React rendering
                            name={product.name}
                            price={`${product.price}€`}
                            description={product.description}
                            id={product.productId}
                            photo={Test}

                        />
                    ))
                ) : (
                    <LinearProgress color={"inherit"} sx={{width: "100%", color: "rgb(215, 174, 121)"}}/>
                )}
            </section>

            <Footer />
        </>
    );
}

export default ShopPage;
