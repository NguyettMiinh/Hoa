import { useState } from "react";
import type { Product } from "../../types/product";
import Slider from "react-slick";

const product: Product[] = [{
    id: 19,
    name: "MUJI [CN] Bộ 5 Ruột Mực Đen Cho Bút Máy - Đen",
    img: [
        "https://api.muji.com.vn/media/catalog/product/cache/3bba9d404b279092e39507dd78fb4be5/4/5/4550344650400_org.jpg",
        "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550344650400_02_org.jpg",
        "https://api.muji.com.vn/media/catalog/product/cache/3bba9d404b279092e39507dd78fb4be5/4/5/4550344650400_01_org.jpg",
    ],
    price: "28.000"
}];
function ProductDetail() {
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedImg, setSelectedImg] = useState<string>(product[0].img[0]);
    const handleDecrease = () => {
        console.log("hi");
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(1);
        }

    }
    //neu them san pham: chi them toi da so luong trong kho
    const handleIncrease = () => {
        console.log("hi2");
        setQuantity(quantity + 1);
        //neu them so luong lon hon so luong hang con thi bao loi, so luong toi da là : xxxx
    }
    //can 1 api de getProductDetail theo id
    // danh sach anh
    // ma san pham
    // so luong con hang
    // ten
    // gia
    // so luong da bán
    // quan ao: mau sac, size
    // neu nhu ban het thi disable nut them, nut add vao gio hang
    // v id ở đâu mà truyền: ta sẽ phải lấy id từ redux
    const verticalSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4, // số item hiện tại 1 lần
        slidesToScroll: 4,
        arrows: true,
        vertical: true,
    };
    const handleImg = (img: string) => {
        setSelectedImg(img);
    }
    return (
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="flex">
                {/* Slider ảnh nhỏ bên trái */}
                <div className="w-[100px]">
                    <Slider {...verticalSettings}>
                        {product[0].img.map((img, index) => (
                            <div key={index}>
                                <div className={`${selectedImg === img ? "w-[65px] h-[65px] border rounded-lg border-brand-darkRed " : ""}`}>
                                    <img src={img} className="w-[64px] h-[64px] object-cover p-1 cursor-pointer" onClick={() => handleImg(img)} />
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-[600px] h-[600px]">
                    <img src={selectedImg} />
                </div>
                <div className="bg-purple-300">
                    <div>MUJI Gối Nâng Đỡ Đầu (Vỏ Có Thể Giặt) - L</div>
                    <div>SKU:4550584666148</div>
                    <div>1.668.000
                        VND</div>
                    <div>
                        <button onClick={() => handleDecrease()}>-</button>
                        <input value={quantity} />
                        <button onClick={() => handleIncrease()} className="h-[40px] w-[40px]">+</button>
                    </div>
                </div>
            </div>
            <div className="bg-pink-200">
                <p>Hello3</p>
            </div>
            <div className="bg-yellow-100">
                <p>Hello4</p>
            </div>
        </div >
    );
}

export default ProductDetail;