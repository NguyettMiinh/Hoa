import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GridSub from "./GridSub";
import Slider from "react-slick";
import "../assets/styles/home.css";

type Product = {
    name: string;
    img: string;
    price: string;
}

    const data: Product[] = [{
        name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - L",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org_1.jpg",
        price: "1.668.000"
    }, {
        name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - S",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org.jpg",
        price: "1.668.000"
    }, {
        name: "MUJI Kệ Chặn Sách - S",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550182603071_org.jpg",
        price: "48.000"
    }, {
        name: "MUJI Bìa Phân Trang",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550344296950_org.jpg",
        price: "38.000"
    }, {
        name: "MUJI Kẹo Dẻo Hỗn Hợp/ Mixed Gummy",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/i/m/img_1044.jpeg",
        price: "19.000"
    }, {
        name: "MUJI Phí Lắp Ráp Khu Vực TP.HCM Và Hà Nội (Sản Phẩm Nội Thất)",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/p/h/phi_la_p_ra_p_-_cover.jpg",
        price: "500.000"
    }, {
        name: "MUJI Áo Sơ Mi Nam Vải Cool Touch Không Cổ Tay Ngắn - S - Trắng",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584641701_01_org_1.jpg",
        price: "599.000"
    },
    {
        name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - L",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org_1.jpg",
        price: "1.668.000"
    }, {
        name: "MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - S",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584666131_01_org.jpg",
        price: "1.668.000"
    }, {
        name: "MUJI Kệ Chặn Sách - S",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550182603071_org.jpg",
        price: "48.000"
    }, {
        name: "MUJI Bìa Phân Trang",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550344296950_org.jpg",
        price: "38.000"
    }, {
        name: "MUJI Kẹo Dẻo Hỗn Hợp/ Mixed Gummy",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/i/m/img_1044.jpeg",
        price: "19.000"
    }, {
        name: "MUJI Phí Lắp Ráp Khu Vực TP.HCM Và Hà Nội (Sản Phẩm Nội Thất)",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/p/h/phi_la_p_ra_p_-_cover.jpg",
        price: "500.000"
    }, {
        name: "MUJI Áo Sơ Mi Nam Vải Cool Touch Không Cổ Tay Ngắn - S - Trắng",
        img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584641701_01_org_1.jpg",
        price: "599.000"
    }
];
function GridSix() {
    const settings = {
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 6, // số item hiện tại 1 lần
        slidesToScroll: 6,
        arrows: true,
    };
    return (
        <div className="p-20">
            <div className="mb-10 text-[28px] font-bold">Sản Phẩm Nổi Bật</div>
            <Slider {...settings}>
                {data.map((product, index) => (
                    <div key={index}>
                        <GridSub product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default GridSix;
//  vì react-slick mỗi slide cần là 1 phần tử riêng biệt, chứ không phải 1 component render nhiều phần tử cùng lúc.