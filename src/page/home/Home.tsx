
import Slider from "../../components/Slider";
import SliderItem from "../../components/SliderItem";
import saleBanner from "../../assets/sale-banner.png";
type Data = {
  title: string;
  image: string;
  type: string;
}
function Home() {

  return (
    <div className="home-container">
      <div className="banner-slider" >
        <Slider />
      </div>
      <div className="overflow-hidden w-full flex gap-10 lg:gap-[60px] flex-col px-[100px]">
        <div className="collections-slider pt-[60px]">
          <SliderItem data={data.highlightItems} numSlide={6} title="Sản Phẩm Nổi Bật" type="noBtn" unique={1} size={28} />
        </div>
        <div>
          <SliderItem data={data.newArrivals} numSlide={6} title="Sản Phẩm Mới Về" type="addBtn" unique={2} size={28} />
        </div>
        <div>
          <SliderItem data={data.bestSellers} numSlide={6} title="Sản phẩm bán chạy" type="addBtn" unique={3} size={28} />
        </div>
        <div>
          <SliderItem data={data.clothes} numSlide={4} title="Quần Áo" type="noBtn" unique={4} size={28} />
        </div>
        <div>
          <SliderItem data={data.highlightItems} numSlide={6} title="Sản Phẩm Nổi Bật" type="noBtn" unique={5} size={19} />
        </div>
        <div className="flex justify-center items-center">
          <img src={saleBanner} className="w-[1400px]"/>
        </div>
      </div>

    </div >
  );
}
export default Home;

// props nhan nhieu kieu du lieu: product la 1 props
// khi dung destructing tuc la {prop1, prop2}

const data = {
  highlightItems: [
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
  ],
  newArrivals: [{
    id: 1,
    name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - L",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org_1.jpg"],
    price: "1.668.000"
  }, {
    id: 2,
    name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - S",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org.jpg"],
    price: "1.668.000"
  }, {
    id: 3,
    name: "MUJI Kệ Chặn Sách - S",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550182603071_org.jpg"],
    price: "48.000"
  }, {
    id: 4,
    name: "MUJI Bìa Phân Trang",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550344296950_org.jpg"],
    price: "38.000"
  }, {
    id: 5,
    name: "MUJI Kẹo Dẻo Hỗn Hợp/ Mixed Gummy",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/i/m/img_1044.jpeg"],
    price: "19.000"
  }, {
    id: 6,
    name: "MUJI Phí Lắp Ráp Khu Vực TP.HCM Và Hà Nội (Sản Phẩm Nội Thất)",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/p/h/phi_la_p_ra_p_-_cover.jpg"],
    price: "500.000"
  }, {
    id: 7,
    name: "MUJI Áo Sơ Mi Nam Vải Cool Touch Không Cổ Tay Ngắn - S - Trắng",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584641701_01_org_1.jpg"],
    price: "599.000"
  },
  {
    id: 8,
    name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - L",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org_1.jpg"],
    price: "1.668.000"
  }, {
    id: 9,
    name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - S",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org.jpg"],
    price: "1.668.000"
  }, {
    id: 10,
    name: "MUJI Kệ Chặn Sách - S",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550182603071_org.jpg"],
    price: "48.000"
  }, {
    id: 11,
    name: "MUJI Bìa Phân Trang",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550344296950_org.jpg"],
    price: "38.000"
  }, {
    id: 12,
    name: "MUJI Kẹo Dẻo Hỗn Hợp/ Mixed Gummy",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/i/m/img_1044.jpeg"],
    price: "19.000"
  }, {
    id: 13,
    name: "MUJI Phí Lắp Ráp Khu Vực TP.HCM Và Hà Nội (Sản Phẩm Nội Thất)",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/p/h/phi_la_p_ra_p_-_cover.jpg"],
    price: "500.000"
  }, {
    id: 14,
    name: "MUJI Áo Sơ Mi Nam Vải Cool Touch Không Cổ Tay Ngắn - S - Trắng",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584641701_01_org_1.jpg"],
    price: "599.000"
  }, {
    id: 15,
    name: "MUJI Bìa Phân Trang",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550344296950_org.jpg"],
    price: "38.000"
  }, {
    id: 16,
    name: "MUJI Kẹo Dẻo Hỗn Hợp/ Mixed Gummy",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/i/m/img_1044.jpeg"],
    price: "19.000"
  }, {
    id: 17,
    name: "Túi My Bag A6 Vải Sợi Đay",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/e/c/ec_jul_4550344878286.jpg"],
    price: "500.000"
  }, {
    id: 18,
    name: "MUJI Áo Sơ Mi Nam Vải Cool Touch Không Cổ Tay Ngắn - S - Trắng",
    img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584641701_01_org_1.jpg"],
    price: "599.000"
  }, {
    id: 19,
    name: "MUJI [CN] Bộ 5 Ruột Mực Đen Cho Bút Máy - Đen",
    img: [
      "https://api.muji.com.vn/media/catalog/product/cache/3bba9d404b279092e39507dd78fb4be5/4/5/4550344650400_org.jpg",
      "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550344650400_02_org.jpg",
      "https://api.muji.com.vn/media/catalog/product/cache/3bba9d404b279092e39507dd78fb4be5/4/5/4550344650400_01_org.jpg",
    ],
    price: "28.000"
  }
  ],
  bestSellers: [
    {
      id: 1,
      name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - L",
      img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org_1.jpg"],
      price: "1.668.000"
    }, {
      id: 2,
      name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - S",
      img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org.jpg"],
      price: "1.668.000"
    }, {
      id: 3,
      name: "MUJI Kệ Chặn Sách - S",
      img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550182603071_org.jpg"],
      price: "48.000"
    }, {
      id: 4,
      name: "MUJI Bìa Phân Trang",
      img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550344296950_org.jpg"],
      price: "38.000"
    }, {
      id: 5,
      name: "MUJI Kẹo Dẻo Hỗn Hợp/ Mixed Gummy",
      img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/i/m/img_1044.jpeg"],
      price: "19.000"
    }, {
      id: 6,
      name: "MUJI Phí Lắp Ráp Khu Vực TP.HCM Và Hà Nội (Sản Phẩm Nội Thất)",
      img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/p/h/phi_la_p_ra_p_-_cover.jpg"],
      price: "500.000"
    }, {
      id: 7,
      name: "MUJI Áo Sơ Mi Nam Vải Cool Touch Không Cổ Tay Ngắn - S - Trắng",
      img: ["https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584641701_01_org_1.jpg"],
      price: "599.000"
    },

  ],
  clothes: [
    {
      title: 'Trang Phục Nữ',
      image: 'https://api.muji.com.vn/media/catalog/category/ladies_wear_thumb.png',
    },
    {
      title: 'Trang Phục Nữ',
      image: 'https://api.muji.com.vn/media/catalog/category/ladies_wear_thumb.png',
    },
    {
      title: 'Trang Phục Nữ',
      image: 'https://api.muji.com.vn/media/catalog/category/mens_thumb.png',
    },
    {
      title: 'Trang Phục Nữ',
      image: 'https://api.muji.com.vn/media/catalog/category/ladies_wear_thumb.png',
    },
    {
      title: 'Trang Phục Nữ',
      image: 'https://api.muji.com.vn/media/catalog/category/ladies_wear_thumb.png',
    },
  ]


};

//   api se tra ve data chua : sanphamnoibat :[], sanphambanchay[], quanao[], mypham[]
// dung map de render ra