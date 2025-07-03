import Sale1 from "../../assets/home/sale1.png";
import Sale2 from "../../assets/home/sale2.webp";
import Sale3 from "../../assets/home/sale3.png";
import GridSix from "../../components/GridSix";
import Slider from "react-slick";
function Home() {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1, // số item hiện tại 1 lần
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div>
            Hi
            {/* <div>
                <Slider {...settings} >
                    <div>
                        <img src={Sale1} />
                    </div>
                    <div>
                        <img src={Sale2} />
                    </div>
                    <div>
                        <img src={Sale3} />
                    </div>
                </Slider>
            </div>

            <div>
               
                <div className="pl-[150px] pr-[150px]">
                    <GridSix />
                </div>

            </div> */}

        </div>
    );
}
export default Home;