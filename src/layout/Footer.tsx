import Logo from "../assets/Hoa-nobg.png";
function Footer() {
    return (
        <div className="bg-gray-100 bg-opacity-50 w-full h-[600px] mt-[32px] px-[100px] py-[30px]">
            <div className="flex justify-between leading-7">
                <div>
                    <div className="pb-3"><img src={Logo} /></div>
                    <div><img src={"https://api.muji.com.vn/media/wysiwyg/home_block/logoSaleNoti.png"} className="w-[195px] h-[74px]" /></div>
                </div>
                <div>
                    <ul>
                        <li className="font-bold">Về Hoa</li>
                        <li>Hoa là gì?</li>
                        <li>Thông báo</li>
                        <li>Cơ hội nghề nghiệp</li>
                        <li>Câu hỏi thường gặp</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-bold">Cửa hàng Bán lẻ</li>
                        <li>Danh sách cửa hàng</li>
                        <li>Chính sách Đổi, Trả, Hoàn tiền</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-bold">Cửa hàng Trực tuyến</li>
                        <li>Chính sách Bán hàng</li>
                        <li>Chính sách Giao hàng</li>
                        <li>Chính sách Trả hàng, Hoàn tiền</li>
                        <li>Chính sách Bảo hành</li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
            <div className="pt-[30px] leading-6">
                <div>Bản quyền thuộc © Ryohin Keikaku Co., Ltd.</div>
                <div> CÔNG TY TNHH HOA RETAIL (VIỆT NAM)</div>
                <div>ĐKKD SỐ 0315855270 do sở KH & ĐT TP.HCM cấp ngày: 20/08/201</div>
                <div>
                    Trụ sở chính: Phòng 501-502-503-504, Tầng 5, The Landmark, 5B Đường Tôn Đức Thắng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam

                </div>
                <div> Liên hệ trụ sở: 028 7108 8388

                </div>
                <div>Thời gian làm việc: Thứ 2 - Thứ 6, Từ 08:00 sáng - 05:00 chiều

                </div>
                <div>Chăm sóc khách hàng tại các cửa hàng: https://www.hoa.com.vn/vn/page/store-location

                </div>
                <div>Chăm sóc khách hàng thương mại điện tử: 1900 2555 79; Email: ec.sale@hoa.vn</div>
            </div>
        </div>
    )
}

export default Footer;