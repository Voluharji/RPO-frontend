
import { Swiper, SwiperSlide } from 'swiper/react';
import './ShoeSwiper.css'

import photo1 from './ShoeSwiperRotationPhotos/IMG_4534.jpg'
import photo2 from './ShoeSwiperRotationPhotos/IMG_4541.jpg'
import photo3 from './ShoeSwiperRotationPhotos/nogevluft.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function ShoeSwiper() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={photo2}/></SwiperSlide>
                <SwiperSlide><img src={photo1}/></SwiperSlide>
                <SwiperSlide><img src={photo3}/></SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}


