// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
          <img src="https://api.muji.com.vn/media/mageplaza/bannerslider/banner/image/v/n/vnpay_-_desk.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://api.muji.com.vn/media/mageplaza/bannerslider/banner/image/s/u/summer_-_desk_1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://api.muji.com.vn/media/mageplaza/bannerslider/banner/image/a/r/artboard_9.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
