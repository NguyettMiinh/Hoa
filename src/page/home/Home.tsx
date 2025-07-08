import Slider from "../../components/Slider";
import SliderItem from "../../components/SliderItem";

type Data = {
    title: string;
    image: string;
}
function Home() {
    return (
        <div>
            <div>
                <Slider />
            </div>
            <div className="px-[100px] pt-[70px]">
                <SliderItem data={data} numSlide={6} title = "Sản Phẩm Nổi Bật" />
            </div>
        </div>
    );
}
export default Home;

// props nhan nhieu kieu du lieu: product la 1 props
// khi dung destructing tuc la {prop1, prop2}
const data : Data[] = [
    {
      title: 'Đồ Nội Thất',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    },
    {
      title: 'Gối',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    },
    {
      title: 'Chăn',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    },
    {
      title: 'Nệm',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    },
    {
      title: 'Vỏ Chăn & Ga & Gối',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    },
    {
      title: 'Đồ Dùng Gia Đình',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    }
    ,
    {
      title: 'Nệm',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    },
    {
      title: 'Vỏ Chăn & Ga & Gối',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    },
    {
      title: 'Đồ Dùng Gia Đình',
      image: 'https://api.muji.com.vn/media/catalog/category/furniture_-_collection.jpg',
    },
  ];

//   api se tra ve data chua : sanphamnoibat :[], sanphambanchay[], quanao[], mypham[]
// dung map de render ra