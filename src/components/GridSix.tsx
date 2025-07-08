import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GridSub from "./GridSub";
import Slider from "react-slick";
import "../assets/styles/home.css";


type Product = {
    id: number;
    name: string;
    img: string[];
    price: string;
}


function GridSix() {

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
                        <GridSub product={product}  />
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

