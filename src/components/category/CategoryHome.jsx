import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#E2E8F0", }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#E2E8F0", }}
            onClick={onClick}
        />
    );
}
export const CategoryHome = () => {
    const listCate = useSelector((state) => state.categorySlice.categories);
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };

    return (
        <div className="max-w-[1200px] mx-auto mt-3">
            <div className="flex gap-1 flex-col">
                <div className="py-5  uppercase  bg-white font-bold px-3 rounded-md ">
                    Danh mục
                </div>

                <Slider {...settings}>
                    <div className="flex ">
                        <div className="flex flex-row flex-wrap justify-around gap-0 ">
                            {listCate.slice(0, 10).map((item, index) => (
                                <div
                                    key={index}
                                    // onClick={() => handleDetail(item)}
                                    className=" bg-white w-[115px] h-[140px] flex justify-center items-center  cursor-pointer flex-col "
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn"
                                        className="w-[70px] h-[70px]"
                                        alt={item.name}
                                    />
                                    <h1 className="text-red-500 text-center text-sm">{item.name} </h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="flex flex-row flex-wrap justify-around gap-0">
                            {listCate.slice(10, 20).map((item, index) => (
                                <div
                                    // onClick={() => handleDetail(item)}
                                    key={index}
                                    className=" bg-white w-[115px] h-[140px] flex justify-center items-center  flex-col cursor-pointer"
                                >
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn"
                                        className="w-[70px] h-[70px]"
                                        alt={item.name}
                                    />
                                    <h1 className="text-red-500 text-center text-sm">{item.name} </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
