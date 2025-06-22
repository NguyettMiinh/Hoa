import Carousel from "antd/es/carousel";
import Sale1 from "../../assets/home/sale1.png";
import Sale2 from "../../assets/home/sale2.webp";
import Sale3 from "../../assets/home/sale3.png";
import New1 from "../../assets/new/n1.webp";
import New2 from "../../assets/new/n2.webp";
import New3 from "../../assets/new/n3.webp";
import New4 from "../../assets/new/n4.webp";
import New5 from "../../assets/new/n5.webp";
import New6 from "../../assets/new/n6.webp";

import { Row, Col, Card, Badge } from "antd";
import GridSix from "../../components/GridSix";
function Home() {
    return (
        <div className="bg-white">
            <div>
                <Carousel arrows infinite={false} >
                    <div>
                        <img src={Sale1} />
                    </div>
                    <div>
                        <img src={Sale2} />
                    </div>
                    <div>
                        <img src={Sale3} />
                    </div>
                </Carousel>
            </div>

            <div>
                {/* nen viet component rieng cho cai này và truyền value ảnh vào */}
                <div>
                    <GridSix />
                </div>

            </div>

        </div>
    );
}
export default Home;