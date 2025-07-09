import type { Dispatch, SetStateAction } from 'react';
import type { Category } from '../types/product';
import "../assets/styles/header.css";
// component con
type Dropdown = {
    isDropdownOpen: boolean;
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
    category: Category;
}


function Dropdown({ isDropdownOpen, setIsDropdownOpen, category }: Dropdown) {

    return (
        <div className={`absolute top-[53px] left-0 bg-white text-black
            w-full flex justify-between border rounded-lg shadow-md ${isDropdownOpen ? "flex" : "hidden"}`}
            onMouseLeave={() => setIsDropdownOpen(false)} >
            <div className='flex leading-7' >
                {category.subCategories.map((sub, index) => (
                    <div key={index} className='drop-item'>
                        <div className="font-semibold mb-2">{sub.title}</div>
                        <ul className="category-item space-y-1">
                            {sub.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="drop-item col-span-1 border-l pl-6">
                <div className="font-bold mb-2">ƯU ĐÃI ĐẶC BIỆT</div>
                <ul className="category-item space-y-1 leading-9">
                    <li className='font-bold'>Hàng Mới</li>
                    <li className='font-bold'>Bán Chạy</li>
                </ul>
            </div>
        </div>

    );
}

export default Dropdown;



