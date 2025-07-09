import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import Slider from "react-slick";
import { FacebookOutlined, MessageOutlined } from "@ant-design/icons";
import Tabs from "../../components/Tabs";
import "../../assets/styles/product-details.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import GridSub from "../../components/ProductItem";

const product: Product[] = [{
    id: 19,
    name: "MUJI [CN] Bộ 5 Ruột Mực Đen Cho Bút Máy - Đen",
    img: [
        "https://api.muji.com.vn/media/catalog/product/cache/3bba9d404b279092e39507dd78fb4be5/4/5/4550344650400_org.jpg",
        "https://api.muji.com.vn/media/catalog/product/cache/2e9290695da361a7d6192a4c8c689807/4/5/4550344650400_02_org.jpg",
        "https://api.muji.com.vn/media/catalog/product/cache/3bba9d404b279092e39507dd78fb4be5/4/5/4550344650400_01_org.jpg",
    ],
    price: "28.000",
    stock: 10,
}];
function ProductDetail() {

    const [quantity, setQuantity] = useState<number | string>(1);
    const [selectedImg, setSelectedImg] = useState<string>(product[0].img[0]);
    const [isError, setIsError] = useState<string>("");
    const [disableMinus, setDisableMinus] = useState<boolean>(true);
    const [disablePlus, setDisablePlus] = useState<boolean>(false);


    const seenArray = useSelector((state: RootState) => state.user.seenArray);

    const handleDecrease = () => {
        const newQuantity = Number(quantity || 1);
        if (newQuantity > 1) {
            setDisablePlus(false);
            setQuantity(newQuantity - 1);
        } else {
            setDisableMinus(true);
            setQuantity(1);
        }

    }
    //neu them san pham: chi them toi da so luong trong kho
    const handleIncrease = () => {
        const numQuantity = Number(quantity || 0);
        if (numQuantity >= product[0].stock) {
            setIsError(`Số lượng tối đa là ${product[0].stock}`);
            setQuantity(numQuantity);
        } else {
            setDisableMinus(false);
            setQuantity(numQuantity + 1);
        }


    }
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '') {
            setQuantity('');
            return;
        }
        // do ko cho phep hien thi chuoi rong len nen ms nhu vay
        if (!/^\d*$/.test(value) || value === '0') {
            return;
        }

        const numValue = Number(value);
        if (!isNaN(numValue) && numValue > 0) {
            setQuantity(numValue);
        }
    };


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
    useEffect(() => {
        if (isError) {
            setDisablePlus(true);
            const timer = setTimeout(() => {
                setIsError("");
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isError]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
    };
    console.log(seenArray);
    return (
        <div className="common bg-white">
            <div className="flex flex-col justify-center items-center max-w-[1224px] w-full px-4 mx-auto">
                <div className="flex">
                    {/* Slider ảnh nhỏ bên trái */}
                    <div className="w-[100px]">
                        <Slider {...verticalSettings}>
                            {product[0].img.map((img, index) => (
                                <div key={index}>
                                    <div className={`${selectedImg === img ? "w-[65px] h-[65px] border rounded-lg border-brand-darkGrayGreen " : ""}`}>
                                        <img src={img} className="w-[64px] h-[64px] object-cover p-1 cursor-pointer" onClick={() => handleImg(img)} />
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="w-[600px] h-[600px]">
                        {/* <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Zoom image',
                                    isFluidWidth: true,
                                    src: selectedImg,
                                },
                                largeImage: {
                                    src: selectedImg,
                                    width: 900,
                                    height: 900,
                                },
                                enlargedImageContainerStyle: {
                                    zIndex: 1000,
                                    background: "#fff"
                                },
                            }}
                        /> */}
                        <img src={selectedImg} />
                    </div>
                    <div className="pl-10 w-[450px]">
                        <div className="font-semibold text-[25px] mb-2">MUJI [CN] Bộ 5 Ruột Mực Đen Cho Bút Máy - Đen</div>
                        <div className="text-[16px] mb-10">
                            <span className="font-bold">SKU: </span>
                            <span>4550584666148</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 ">
                            <div className="text-brand-darkGrayGreen">
                                <span className="text-[20px] font-bold">28.000 </span>
                                <span>VND</span>
                            </div>
                            <div className="space-x-3 mb-5">
                                <button onClick={() => handleDecrease()} disabled={disableMinus} className={`h-[40px] w-[40px] rounded-lg ${disableMinus === true ? "bg-gray-200 font-bold text-gray-300" : "bg-gray-300 font-bold"}`}>-</button>
                                <input value={quantity} onChange={(e) => handleQuantityChange(e)} className="w-[56px] border h-[40px] rounded-lg text-center" />

                                <button onClick={() => handleIncrease()} disabled={disablePlus} className={`h-[40px] w-[40px] rounded-lg ${disablePlus === true ? "bg-gray-200 font-bold text-gray-300" : "bg-gray-300 font-bold"} `}>+</button>

                            </div>
                            <div>
                                {isError ? <span className="text-red-600">{isError}</span> : ""}
                            </div>
                            <div className="mb-2">
                                <button className="w-[392px] h-[67px]  bg-[#3C3C43] text-white font-bold rounded-md hover:bg-brand-darkGrayGreen ">Thêm vào giỏ hàng</button>
                            </div>
                            <div>
                                <button className="w-[392px] h-[67px]  rounded-md border-gray-300 border font-bold hover:bg-brand-darkGrayGreen hover:text-white">Mua nhanh</button>
                            </div>
                            <div>
                                <span className="font-bold">Chia sẻ: </span>
                                <span>
                                    <a href="https://www.facebook.com/nmdg.n?locale=vi_VN">
                                        <FacebookOutlined style={{
                                            color: "#1877F2"
                                        }} />
                                    </a>
                                </span>
                                <span className="ml-[5px]">
                                    <a href="https://www.messenger.com/e2ee/t/7720540997985648">
                                        <MessageOutlined style={{
                                            color: "#1877F2"
                                        }} />
                                    </a>
                                </span>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="w-full">
                    <Tabs />
                </div>
            </div >
            <div className="flex h-full flex-col  hover:shadow-sm justify-between hover:bg-gray-50">
                {/* tai sao no khon nam ngang */}
                <Slider {...settings}>
                      {seenArray.map((product, index) => (
                        // <div key={index}>
                        //     <div>
                        //         {/* <img  src={product.img[0]} className="w[-184px] h-[184px]"/> */}
                        //         <div>{product.price}</div>
                        //     </div>
                        // </div>
                        <GridSub product={product} />
                      ))}                  
                </Slider>
            </div>
        </div>

    );
}

export default ProductDetail;