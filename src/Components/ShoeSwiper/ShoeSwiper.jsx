
import { Swiper, SwiperSlide } from 'swiper/react';
import './ShoeSwiper.css'

import photo1 from './ShoeSwiperRotationPhotos/IMG_4534.jpg'
import photo2 from './ShoeSwiperRotationPhotos/IMG_4541.jpg'
import photo3 from './ShoeSwiperRotationPhotos/IMG_4540.JPG'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function ShoeSwiper() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                autoplay={{
                    delay: 5000, // Time in milliseconds (3 seconds)
                    disableOnInteraction: false, // Allows autoplay to continue after user interaction
                }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={photo2}/></SwiperSlide>
                <SwiperSlide><img src={photo3}/></SwiperSlide>
                <SwiperSlide><img src={photo1}/></SwiperSlide>
            </Swiper>
        </>
    );
}


