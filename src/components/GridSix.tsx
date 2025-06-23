import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GridSub from "./GridSub";
import Slider from "react-slick";
import "../assets/styles/home.css";
import { array } from "zod/v4-mini";

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
    // const chunkArray = (array: Product[], start: number, end: number) => {
    //     return array.slice(start, end);
    // }

    // const data1 = chunkArray(data,0,12);
    // const data2 = chunkArray(data,12,data.length);

    function chunkArray(array: Product[], size: number) {
        let result: Product[][] = [];
        if (size <= 0) {
            console.warn("Size must be greater than 0");
            return result;
        }
        if (size >= array.length) {
            result = [array];
            return result;
        }
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    }

    const products = chunkArray(data, 12);

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
            <Slider {...settings} className="mb-20">
                {products[0].map((product, index) => (
                    <div key={index}>
                        <GridSub product={product} />
                    </div>
                ))}
            </Slider>
            <Slider {...settings}>
                {products[1].map((product, index) => (
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
// nếu muốn 1 slide chỉ chứa tối đa 12 ảnh thì làm sao, ví dụ 24 ảnh, tới ảnh 13 sẽ tạo 1 slide mới
// có thể làm thủ công như: mình map dòng đầu từ product[0] đến [11], slide thứ 2 từ [12] đến [23]