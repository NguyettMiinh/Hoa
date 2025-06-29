import { useState } from "react";
import type { JSX } from "react/jsx-runtime";

function Tabs() {
    const [activeTab, setActiveTab] = useState<string>("tab1");
    const tabs = [
        { id: "tab1", label: "Mô tả sản phẩm" },
        { id: "tab2", label: "Thông số kỹ thuật / Kích thước" }
    ]

    const tabContent: Record<string, JSX.Element> = {
        tab1: (
            <div>
                <p>MUJI [cn] Bộ 5 Ruột Mực Đen Cho Bút Máy <br/>
                    Màu: Đen. Loại: Ruột mực. Số lượng: 5 ruột.<br/>
                    Sản phẩm được phát triển độc quyền bởi đội ngũ MD tại MUJI Trung Quốc.<br/>
                    Sản xuất tại Trung Quốc</p>
            </div>
        ),
        tab2: (
            <div>
                <p>Màu: Đen. Loại: Ruột mực. Số lượng: 5 ruột.</p>
            </div>
        )
    }
    return (

        <div className="w-full">
            <div className="flex border-b">
                {tabs.map((tab) => (
                    <button key={tab.id} className={`px-4 py-2 flex-1 text-center font-semibold ${activeTab === tab.id ? "border-b-2 border-brand-darkGrayGreen text-brand-darkGrayGreen" : "text-gray-500 hover:text-brand-darkGrayGreen"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="font-bold">{tab.label}</span>
                    </button>
                ))}
            </div>
            <div className="py-10 px-3 min-h-[200px]">
                {tabContent[activeTab]}
            </div>
        </div>


    );
}
export default Tabs;