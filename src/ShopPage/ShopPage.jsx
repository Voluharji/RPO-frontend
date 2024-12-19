import { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import SearchBar from "../Components/SearchBar/SearchBar.jsx";
import ShopFilter from "../Components/ShopFilter/ShopFilter.jsx";
import ShopCard from "../Components/ShopCard/ShopCard.jsx";
import CategoriesMenu from "../Components/CategoriesMenu/CategoriesMenu.jsx";
import Test from '../Homepage/HomepageAssets/nekiNeki.jpg'
import './shoppage.css';

function ShopPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Update with your correct API endpoint
        fetch('http://localhost:8081/api/get_products')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <>
            <NavBar />
            <SearchBar />
            <CategoriesMenu/>

            <section>
                <ShopFilter />
            </section>

            <section className='card-section'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <ShopCard
                            key={product.id} // Use a unique key for React rendering
                            name={product.name}
                            price={`${product.price}€`}
                            description={product.description}
                            photo={Test}
                        />
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </section>

            <Footer />
        </>
    );
}

export default ShopPage;
