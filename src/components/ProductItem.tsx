import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product";
import { useDispatch } from "react-redux";
import { setArray, setId } from "../redux/userSlice";
function ProductItem({ product }: { product: Product }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleDetail(id: number, product: Product) {
        dispatch(setId(id));
        dispatch(setArray(product))
        navigate(`/layout/product/${id}`);
    }
    
    return (
        <div>
            <div>
                <img src={product.img[0]} className="w-[184px] h-[184px]  object-contain block mt-auto" 
                onClick={() => handleDetail(product.id,product)} />
            </div>
            <div className="h-[174px] w-[184px] text-[13px]">
                <div className="flex flex-col pt-5 pr-5 pl-5">
                    <div className="mb-[15px] h-[42px]">
                        {product.name.length > 41 ? product.name.slice(0, 41) + "..." : product.name}
                    </div>
                    <div className="flex mb-2 items-end justify-between">
                        <div className="flex pr-3 h-[42px] items-end text-brand-darkGrayGreen">
                            <span className="font-bold mr-2">{product.price} </span>
                            <span className="text-[11px]">VND</span>
                        </div>

                        <div>
                            <button className="h-[32px] w-[32px] rounded-full border border-[#E2D5B5] bg-[#F7F2E4]">
                                <HeartOutlined style={{ color: "#8c1000" }} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className="border w-[154px] h-[38px] text-[#3C3C43] font-bold hover:bg-brand-darkGrayGreen hover:text-white">Mua Hàng</button>
                    </div>
                </div>

            </div>
        </div>


    );
}




export default ProductItem;
