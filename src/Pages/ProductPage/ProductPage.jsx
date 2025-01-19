import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from "../../Components/Footer/Footer.jsx";
import CommentSection from "../../Components/CommentSection/CommentSection.jsx";
import Test from '../Homepage/HomepageAssets/nekiNeki.jpg';
import {CartContext} from "../../Components/CartFunctions/CartFunctions.jsx";
import './ProductPage.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';

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
    const { addToCart } = useContext(CartContext);


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

    function handleCart() {
        addToCart(product);
    }

    const date = new Date(product.timeCreated);
    console.log("Date: ", typeof date)


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
                            <img src={Test} alt="Thumb 1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Thumb 2"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Thumb 3"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Thumb 4"/>
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
                        thumbs={{swiper: thumbsSwiper}}
                        modules={[FreeMode, Thumbs]}
                        className="current-frame-swiper"
                    >
                        <SwiperSlide>
                            <img src={Test} alt="Slide 1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Slide 2"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Slide 3"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Test} alt="Slide 4"/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='info-table'>
                    <p className='product-info-title'>{product.name}</p>
                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FingerprintOutlinedIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="ID" secondary={product.productId}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <CalendarMonthOutlinedIcon/>
                                </Avatar>
                            </ListItemAvatar>
                                <ListItemText primary="Time Listed" secondary={date.toDateString()}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <EuroOutlinedIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Price" secondary={product.price}/>
                        </ListItem>
                    </List>
                    <button className="add-to-chart-btn" onClick={handleCart}>Add to Cart</button>
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
