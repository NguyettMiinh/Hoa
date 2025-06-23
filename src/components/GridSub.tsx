import { HeartOutlined } from "@ant-design/icons";
function GridSub({ product }: { product: Product }) {
    return (
        <div>
            <div>
                <img src={product.img} className="w-[184px] h-[184px]  object-contain block mt-auto" />
            </div>
            <div className="h-[174px] w-[184px] text-[13px]">
                <div className="flex flex-col pt-5 pr-5 pl-5">
                    <div className="mb-[15px] h-[42px]">
                        {product.name.length > 41 ? product.name.slice(0,41) + "..." : product.name}
                    </div>
                    <div className="flex mb-2 items-end justify-between">
                        <div className="flex pr-3 h-[42px] items-end text-brand-darkRed">
                            <span className="font-bold mr-2">{product.price} </span>
                            <span className="text-[11px]">VND</span>
                        </div>

                        <div>
                            <button className="h-[32px] w-[32px] rounded-full border border-[#E2D5B5] bg-[#F7F2E4]">
                                <HeartOutlined style={{color: "#8c1000"}} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className="border w-[154px] h-[38px] text-[#3C3C43] font-bold hover:bg-brand-darkRed hover:text-white">Mua Hàng</button>
                    </div>
                </div>

            </div>
        </div>


        );
}

            type Product = {
                name: string;
            img: string;
            price: string;
}


            export default GridSub;
