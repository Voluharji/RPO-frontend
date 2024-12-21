import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from "../../Components/Footer/Footer.jsx";
import CommentSection from "../../Components/CommentSection/CommentSection.jsx";
import Test from '../Homepage/HomepageAssets/nekiNeki.jpg';
import './ProductPage.css';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
} from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function ProductPage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8081/api/get_product?id=${productId}`, { method: 'GET' })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Fetch failed: ${response.statusText}`);
                }
                return response.json();
            }).then((data) => {
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
        <>
            <NavBar />

            <section className='info-section'>

                <div className="swiper-container">
                    {/* Thumbnails Swiper on the Left */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        direction="vertical"
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="thumbnail-swiper"
                    >
                        <SwiperSlide>
                            <img src={Test} alt="Thumb 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Thumb 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Thumb 3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Thumb 4" />
                        </SwiperSlide>
                    </Swiper>

                    {/* Main Swiper */}
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={0}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="current-frame-swiper"
                    >
                        <SwiperSlide>
                            <img src={Test} alt="Slide 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Slide 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Slide 3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Slide 4" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='info-table'>
                    <p className='product-info-title'>{product.name}</p>
                    <TableContainer sx={{ backgroundColor: "#9D9E9E", width: "100%" }} component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ color: "white" }}>{"ID"}</TableCell>
                                    <TableCell sx={{ color: "white" }}>{product.productId}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: "white" }}>{"Time-created"}</TableCell>
                                    <TableCell sx={{ color: "white" }}>{product.timeCreated}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: "white" }}>{"Price in €"}</TableCell>
                                    <TableCell sx={{ color: "white" }}>{product.price}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <button className="add-to-chart-btn">Add to Cart</button>
                </div>
            </section>

            <section className='description-section'>
                <p className='product-page-description'>{product.description}</p>
            </section>

            <section className='product-page-comments'>
                <CommentSection />
            </section>

            <Footer />
        </>
    );
}

export default ProductPage;
