import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
};
export const SliderHome = () => {
    var settings = {
        className: 'w-[790px] h-full custom-slider',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Bật tự động chạy
        autoplaySpeed: 2000,


    };
    return (
        <div className='w-[1200px] mx-auto mt-5 bg-white p-5 border rounded'>
            <div className='flex gap-1 '>
                <Slider {...settings}>
                    <div>
                        <img src="https://cf.shopee.vn/file/vn-11134258-7r98o-lwvnhla0s5azc4_xxhdpi" alt="" />
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/vn-11134258-7r98o-lxc8fcxkjd97ab_xxhdpi" alt="" />
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/sg-11134258-7rdwd-lxgce3zsinv009_xxhdpi" alt="" />
                    </div>

                </Slider>

                <div className='flex flex-col gap-2 justify-around'>
                    <div>
                        <img src="https://cf.shopee.vn/file/sg-11134258-7rdwp-lxcbx0zo5ymi76_xhdpi" alt="" />
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/sg-11134258-7rdwo-lxcbp62874auc0_xhdpi" alt="" />
                    </div>
                </div>
            </div>








        </div>

    )
}
