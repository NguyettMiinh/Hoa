
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Row } from "antd";
import GridSub from "./GridSub";
import Slider from "react-slick";
function GridSix() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // số item hiện tại 1 lần
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className="p-20">
            <Row className="mb-10 text-[28px] font-bold">Sản Phẩm Nổi Bật</Row>
            <Slider {...settings}>
                <GridSub />
                <GridSub />
                <GridSub />
                <GridSub />
                <GridSub />
                <GridSub />
            </Slider>

        </div>
    );
}

export default GridSix;
