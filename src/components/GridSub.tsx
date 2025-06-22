import { Col } from "antd";
import { HeartOutlined } from "@ant-design/icons";
function GridSub() {
    return (
        <Col span={4}>
            <Col>
                <img className="w-[184px] h-[184px]" />
            </Col>
            <Col className="h-[174px] w-[184px] text-[13px]">
                <div className="flex flex-col pt-5 pr-5 pl-5">
                    <div className="mb-[15px]">
                        MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - L
                    </div>
                    <div className="flex mb-2 text-brand-darkRed">
                        <div className="pr-3">
                            <span className="font-bold">1.668.000 </span>
                            <span className="text-[11px]">VND</span>
                        </div>

                        <div>
                            <button>
                                <HeartOutlined />
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className="border w-[154px] h-[38px] text-[#3C3C43] font-bold hover:bg-brand-darkRed hover:text-white">Mua Hàng</button>
                    </div>
                </div>

            </Col>
        </Col>

    );
}

const data = [{
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
    price: "500.000000"
}, {
    name: "MUJI Áo Sơ Mi Nam Vải Cool Touch Không Cổ Tay Ngắn - S - Trắng",
    img: "https://api.muji.com.vn/media/catalog/product/cache/4da93324a1c25b12e9566f761e24b9c9/4/5/4550584641701_01_org_1.jpg",
    price: "599.000"
}
];

export default GridSub;
