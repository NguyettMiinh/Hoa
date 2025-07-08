import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider-item.css'; // Chứa style mũi tên

type Data = {
  title: string;
  image: string;
}
type SliderItemProps = {
  data: Data[]; 
  numSlide: number;
  title: string;
};
// component con
export default function SliderItem({ data, numSlide, title}: SliderItemProps) {

  return (
    <div className="slide-item relative px-12">
      <div>{title}</div>
      <Swiper
        dir="ltr"
        slidesPerView={numSlide}
        spaceBetween={24}
        navigation={{
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        }}
        modules={[Navigation]}
        className='product-item'
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="text-center">
              <img
                src={item.image}
                alt={item.title}
              />
              <p className="mt-2 text-gray-800 text-sm">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mũi tên */}
      <div className="swiper-btn-prev custom-arrow"></div>
      <div className="swiper-btn-next custom-arrow"></div>
    </div>
  );
}
