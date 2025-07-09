import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider-item.css'; // Chứa style mũi tên
import ProductItem from './ProductItem';

type Data = {
  title: string;
  image: string;
}
type Product = {
  id: number;
  name: string;
  img: string[];
  price: string;
}
type SliderItemProps = {
  data: Data[] | Product[];
  numSlide: number;
  title: string;
  type: string;
  unique: number;
  size: number;
};
// component con
export default function SliderItem({ data, numSlide, title, type, unique, size }: SliderItemProps) {

  return (
    <div className="slide-item relative px-12">
      <div className={`text-[${size}px] mb-8 font-bold hover:text-brand-darkGrayGreen`}>{title}</div>
      <Swiper
        dir="ltr"
        slidesPerView={numSlide}
        spaceBetween={24}
        navigation={{
          nextEl: `.btn-${unique}-next`,
          prevEl: `.btn-${unique}-prev`,
        }}
        modules={[Navigation]}
        className='product-item'
      >
        {
          type === "noBtn" ?
            ((data as Data[]).map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="mt-2 text-gray-800 text-sm">{item.title}</div>
                </div>
              </SwiperSlide>
            )))
            :
            (
              (data as Product[]).map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductItem product={product} />
                </SwiperSlide>

              ))
            )

        }
      </Swiper>

      {/* Mũi tên */}
      <div className={`btn-${unique}-prev swiper-btn-prev custom-arrow`}></div>
      <div className= {`btn-${unique}-next swiper-btn-next custom-arrow`}></div>
    </div>
  );
}
