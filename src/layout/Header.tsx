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
        <header id="header" className={`w-full sticky top-0 left-0 z-[100]
        transition-transform duration-300 ${isScrolled ? '-translate-y-[40px]' : ""}`}>
            {/* Header top: chi dung duoc flex cho the con truc tiep cua the cha */}
            <div className="top-header flex bg-white min-h-[40px]">
                {/* container cha cua header top */}
                    <div className="inline-block text-brand-darkGrayGreen">
                        Miễn phí vận chuyển cho mọi đơn hàng từ 999.000 VNĐ - Hotline 1900 2555 79
                    </div>
                    <div className="top-item">
                        <div className='text-brand-darkGrayGreen'>Tiếng Việt</div>
                        <Dropdown menu={{ items }} placement="bottomLeft">
                            <button className="border-none p-2">
                                <DownOutlined style={{ fontSize: '12px', color: "#6b967f" }} />
                            </button>
                        </Dropdown>
                    </div>
                    <div className="top-item">
                        <div>
                            <UserOutlined style={{ fontSize: '20px', color: "#6b967f" }} />
                        </div>

                        <div className="font-bold">
                            <Link to="/layout/login">Đăng Nhập</Link>
                        </div>
                        <div> &#124;</div>
                        <div className="font-bold">
                            <Link to="/layout/register">Đăng Ký</Link>
                        </div>
                    </div>
            </div>
            {/* Main header */}
            {/* <div className="bg-brand-darkGrayGreen h-[92px] pl-[50px] pr-[50px] pt-[10px] pb-[10px]"> */}
            <div className="flex justify-between items-center h-full pt-[30px] pb-[30px]">
                <Link to="/layout/home">
                    <img src={logoNobg} alt="Logo" className="h-[40px]" />
                </Link>
                <nav>
                    <ul className="flex gap-4 text-white">
                        <li>Hàng Mới</li>
                        <li>Bán Chạy</li>
                        <li>Quần áo</li>
                        <li>Sức Khoẻ & Làm Đẹp</li>
                        <li>Gia Dụng</li>
                        <li>Thực Phẩm</li>
                    </ul>
                </nav>
                <div className='flex justify-center items-center gap-2'>
                    <Input
                        size="large"
                        allowClear
                        placeholder="Bạn muốn tìm kiếm gì ?"
                        prefix={<SearchOutlined />}
                        className='w-[510px] border rounded-md outline-none'
                    />

                    {/* thêm  badge cho giỏ hàng để hiển thị số lượng trong giỏ */}
                    <div>
                        <ShoppingCartOutlined className="text-white" style={{ fontSize: '24px' }} />
                    </div>
                </div>
            </div>



            {/* </div> */}
        </header>
    )
}

export default HeaderCommon;
