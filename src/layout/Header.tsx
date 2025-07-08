import { useEffect, useState } from 'react';
import Logo from "../assets/Hoa-Logo.png";
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, SearchOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import "../assets/styles/header.css";
function HeaderCommon() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLang, setIsLang] = useState("Tiếng Việt");
    const [disableLang, setDisableLang] = useState({
        vie: false,
        eng: true
    });
    const [isOpen, setIsOpen] = useState(false);
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
        if (value === "Tiếng Việt"){
            setDisableLang({...disableLang,vie: true, eng: false})
            setIsLang("Tiếng Việt");
        }else {
            setDisableLang({...disableLang,vie: false, eng: true})
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
                            <div className={`${isOpen ? " ": "hidden"} absolute bg-white menu-lang border rounded-lg top-[31px] left-0 shadow-md w-full text-center py-2`}>
                                <button onClick={() => handleLang("Tiếng Việt")} disabled={disableLang.vie} className={`px-5 py-2 ${disableLang.vie  ? "font-semibold" : "hover:bg-slate-100"}`}>Tiếng Việt</button>
                                <button onClick={() => handleLang("English")} disabled={disableLang.eng} className={`px-8 py-2 ${disableLang.eng  ? "font-semibold" : "hover:bg-slate-100"}`}>English</button>
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
            <div className="main-header flex justify-center items-center h-[60px] w-full bg-brand-darkGreen">
                <div className='w-[1400px] flex items-center'>
                    <div className='pr-5'>
                        <Link to="/layout/home"><img src={Logo} className='h-[45px]'/></Link>
                    </div>   
                    <div className='main-category'>
                        <ul className="main-item">
                            <li>Hàng Mới</li>
                            <li>Bán Chạy</li>
                            <li>Đồ gia dụng</li>
                            <li>Phụ kiện & Trang phục</li>
                            <li>Gốm sứ</li>
                            <li>Đồ trang trí</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderCommon;
