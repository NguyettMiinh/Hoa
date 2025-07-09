// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../../src/assets/Banner-1.png";
import banner2 from "../../src/assets/Banner-2.png";
import banner3 from "../../src/assets/Banner-3.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <div className="home-slider">
      <Swiper
        dir="ltr"
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,      // thời gian giữa các slide (ms)
          disableOnInteraction: false // không dừng khi user chạm vào
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* dùng mang map ra */}
        <SwiperSlide>
          <img src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3}  />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
