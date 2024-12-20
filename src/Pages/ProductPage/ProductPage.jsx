import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from "../../Components/Footer/Footer.jsx";
import './ProductPage.css'
import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import Test from '../Homepage/HomepageAssets/Pair-of-pink-sport-shoes-on-white-background.jpg'
import CommentSection from "../../Components/CommentSection/CommentSection.jsx"

function ProductPage() {

    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8081/api/get_product?id=${productId}`,{method: 'GET'})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Fetch failed: ${response.statusText}`);
                }
                return response.json();
            }) .then((data) => {
            console.log(data);
            setProduct(data);
            setLoading(false);
        })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <> <NavBar/>
            <main>

                <img src={Test} alt={product.name} width="100%" className="ProductPhoto"/>


                <div className={"ProductDetails"}>
                    <h1 className={"ImeIzdelka"}>{product.name}</h1>
                    <h2 className={"ProductPrice"}>{product.price}$</h2>
                    <p className={"ProductDescriptionOpis"}>Več o izdelku:</p>
                    <p className={"ProductDescription"}>{product.description}</p>
                    <p className={"ProductDescriptionOpis"}>Velikost: {product.size}</p>
                    <button className="purchase-button">Add to Cart</button>
                </div>

                <CommentSection/>

            </main>
            <Footer/>
        </>
    )
}

export default ProductPage