import { useEffect, useState } from 'react';
import logoNobg from '../assets/logo-nobg.png';
import { Link } from 'react-router-dom';
import { Input, Dropdown } from 'antd';
import { ShoppingCartOutlined, SearchOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import "../assets/styles/header.css";
function HeaderCommon() {
    //1 bien co the nho (thay doi) gia tri nhieu lan
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Tiếng Việt
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    English
                </a>
            ),
        },
    ]

    return (
        <header id="wrapper" className={`w-full sticky top-0 left-0 z-[100]
        transition-transform duration-300 ${isScrolled ? '-translate-y-[40px]' : ""}`}>
            {/* Header top: chi dung duoc flex cho the con truc tiep cua the cha */}
            <div className="top-header flex justify-center bg-white min-h-[40px] w-full">
                {/* container cha cua header top */}
                <div className='h-full w-[1400px] bg-slate-300'>
                    <div>Miễn phí vận chuyển cho mọi đơn hàng từ 499.000 VNĐ - Hotline 1900 255 579</div>
                    <div>Tiếng Việt</div>
                </div>
            </div>
            <div className="main-header flex justify-center h-[40px] w-full bg-brand-darkGrayGreen">
                <div className='h-full w-[1400px] bg-slate-500'>

                </div>
            </div>
        </header>
    )
}

export default HeaderCommon;
