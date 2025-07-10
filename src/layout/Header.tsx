import { useEffect, useState } from 'react';
import Logo from "../assets/Hoa-Logo.png";
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, SearchOutlined, DownOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import "../assets/styles/header.css";
import Dropdown from '../components/Dropdown';

// component cha: truyen gia tri tu cha => component con
function HeaderCommon() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLang, setIsLang] = useState("Tiếng Việt");
    const [disableLang, setDisableLang] = useState({
        vie: false,
        eng: true
    });
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
    const [search, setSearch] = useState<string>("");
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLang = (value: string) => {
        if (value === "Tiếng Việt") {
            setDisableLang({ ...disableLang, vie: true, eng: false })
            setIsLang("Tiếng Việt");
        } else {
            setDisableLang({ ...disableLang, vie: false, eng: true })
            setIsLang("English");
            console.log("hello");
        }
    }
  

    return (
        <header id="wrapper" className={`w-full sticky top-0 left-0 z-[100]
        transition-transform duration-300 ${isScrolled ? '-translate-y-[40px]' : ""}`}>
            {/* Header top: chi dung duoc flex cho the con truc tiep cua the cha */}
            <div className="top-header flex justify-center items-center bg-white min-h-[40px] w-full">
                {/* container cha cua header top */}
                <div className='h-full w-[1400px] flex justify-between'>
                    <div className='w-[987px] text-center'>Miễn phí vận chuyển cho mọi đơn hàng từ 499.000 VNĐ - Hotline 1900 255 579</div>
                    <div className='flex gap-12'>
                        <div className="relative px-4">
                            <button className='w-[100px]' onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>{isLang} <DownOutlined style={{ fontSize: "12px", paddingLeft: "3px" }} /></button>
                            <div className={`${isOpen ? " " : "hidden"} absolute bg-white menu-lang border rounded-lg top-[31px] left-0 shadow-md w-full text-center py-2`}>
                                <button onClick={() => handleLang("Tiếng Việt")} disabled={disableLang.vie} className={`px-5 py-2 ${disableLang.vie ? "font-semibold" : "hover:bg-slate-100"}`}>Tiếng Việt</button>
                                <button onClick={() => handleLang("English")} disabled={disableLang.eng} className={`px-8 py-2 ${disableLang.eng ? "font-semibold" : "hover:bg-slate-100"}`}>English</button>
                            </div>
                        </div>
                        <div>
                            <UserOutlined />
                            <Link to="/layout/login" className='px-3 hover:underline'>Đăng Nhập</Link>
                            <span className='pr-3'>&#124;</span>
                            <Link to="/layout/register" className='hover:underline'>Đăng Kí</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-header flex justify-center items-center h-[92px] w-full bg-brand-darkGreen"
                onMouseLeave={() => setActiveCategoryIndex(null)}>
                <div className='w-[1500px] flex items-center justify-between relative gap-x-4'>
                    <div className='pr-5'>
                        <Link to="/layout/home"><img src={Logo} className='h-[45px]' /></Link>
                    </div>
                    <div className='main-category'>
                        <ul className="main-item">
                            <li className="title-item font-bold">Hàng Mới</li>
                            <li className="title-item font-bold">Bán Chạy</li>
                            {categories.map((category, index) => (
                                <li key={index} className='title-item'
                                    onMouseEnter={() => setActiveCategoryIndex(index)}>
                                    <span className='font-bold'>{category.title}</span>
                                    <Dropdown isOpen={activeCategoryIndex === index} category={category} onClose={() => setActiveCategoryIndex(null)} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-x-4">
                        <form className='bg-white px-[10px] py-[5px] border rounded-lg'>
                            <button type="button" className='pr-3'><SearchOutlined /></button>
                            <input value = {search} className="outline-none w-[510px] h-[26px]" onChange = {(e) => setSearch(e.target.value)} />
                            <button type="button" onClick={() => setSearch("")}> <CloseOutlined /></button>
                        </form>
                        <div>
                            <button><ShoppingCartOutlined style={{ color: "white", fontSize: "24px" }} /></button>
                        </div>
                    </div>


                </div>

            </div>

        </header>
    )
}

export default HeaderCommon;

const categories = [
    {
        "title": "Đồ gia dụng",
        "subCategories": [
            {
                "title": "Dụng cụ gia đình",
                "items": [
                    "Chổi đót",
                    "Chổi chà",
                    "Rổ tre",
                    "Nia",
                    "Thúng",
                    "Mâm tre",
                    "Rá tre",
                    "Sàng gạo"
                ]
            },
            {
                "title": "Vật dụng tre",
                "items": [
                    "Giỏ đan tre",
                    "Ống đựng đũa",
                    "Ống bút tre",
                    "Lồng gà",
                    "Lồng vịt",
                    "Hộp cơm tre",
                    "Thùng đựng nước bằng tre"
                ]
            }
        ]
    },
    {
        "title": "Phụ kiện & Trang phục",
        "subCategories": [
            {
                "title": "Phụ kiện thủ công",
                "items": [
                    "Túi vải thổ cẩm",
                    "Ví cầm tay gấm",
                    "Móc khóa thêu tay",
                    "Vòng tay đan mây",
                    "Khăn choàng lụa",
                    "Khăn rằn"
                ]
            },
            {
                "title": "Trang phục truyền thống",
                "items": [
                    "Áo dài cách tân",
                    "Áo bà ba",
                    "Váy dân tộc",
                    "Áo tứ thân",
                    "Nón lá",
                    "Dép cói"
                ]
            }
        ]
    },
    {
        "title": "Gốm sứ",
        "subCategories": [
            {
                "title": "Đồ dùng ăn uống",
                "items": [
                    "Bát gốm Bát Tràng",
                    "Đĩa sứ vẽ tay",
                    "Bình trà thủ công",
                    "Ly uống nước gốm",
                    "Chén nước mắm"
                ]
            },
            {
                "title": "Trang trí gốm",
                "items": [
                    "Bình hoa gốm",
                    "Chậu cây mini",
                    "Tượng gốm thủ công",
                    "Đèn gốm",
                    "Đĩa treo tường"
                ]
            }
        ]
    },
    {
        "title": "Đồ trang trí",
        "subCategories": [
            {
                "title": "Trang trí nhà cửa",
                "items": [
                    "Đèn lồng Hội An",
                    "Tranh thêu tay",
                    "Khung ảnh tre",
                    "Tường vải thêu",
                    "Tranh gạo",
                    "Chuông gió tre"
                ]
            },
            {
                "title": "Trang trí lễ hội",
                "items": [
                    "Lồng đèn giấy",
                    "Cờ dây trang trí",
                    "Hoa giấy",
                    "Pháo hoa giả",
                    "Dây treo phong thủy"
                ]
            }
        ]
    }
];