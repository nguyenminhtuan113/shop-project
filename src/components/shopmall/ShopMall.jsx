import React, { useEffect, useState } from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import mall1 from '../../assets/mall1.jpg'
import mall2 from '../../assets/mall2.jpg'
import mall3 from '../../assets/mall3.jpg'
import mall4 from '../../assets/mall4.jpg'
import Slider from 'react-slick';
import { LoadingProduct } from '../loading/LoadingProduct';
import ApiServices from '../../services/ApiService';
import { Link } from 'react-router-dom';

export const ShopMall = ({ isLoading }) => {
    const [productMall, setProductMall] = useState([]);
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
    };
    const getProMall = async () => {
        const res = await ApiServices.getApiProducts();
        setProductMall(res.products)
    }
    useEffect(() => {
        getProMall()
    }, [])
    return (
        <div className='max-w-[1200px] mx-auto mt-3'>
            <div className="flex flex-col gap-2 mt-10">
                <div className='py-5 border-solid rounded-sm bg-white'>
                    <ul className='flex gap-5 px-3 items-center justify-start'>
                        <li>
                            <ReplyIcon style={{ color: "red" }} />
                            Trả Hàng Miễn Phí 15 Ngày
                        </li>
                        <li>
                            <GppGoodIcon style={{ color: "red" }} />
                            Hàng Chính Hãng 100%
                        </li>
                        <li>
                            <LocalShippingIcon style={{ color: "red" }} />
                            Hàng Chính Hãng 100%
                        </li>

                    </ul>
                </div>
                <div className='flex flex-row gap-6 bg-white py-3 px-2'>
                    <div className='w-1/3 rounded-sm h-[500px]'>
                        <Slider {...settings}>
                            <div className='rounded-md'>
                                <img src={mall1} className='w-full h-auto rounded-md' />
                            </div>
                            <div className='rounded-md'>
                                <img src={mall2} className='w-full h-auto rounded-md' />
                            </div>
                            <div className='rounded-md'>
                                <img src={mall3} className='w-full h-auto rounded-md' />
                            </div>
                            <div className='rounded-md'>
                                <img src={mall4} className='w-full h-auto rounded-md' />
                            </div>
                        </Slider>
                    </div>
                    <div className=' flex-grow rounded-md'>
                        {
                            isLoading ? (<LoadingProduct />)
                                :
                                (
                                    <ul className='flex flex-wrap gap-2 cursor-pointer'>
                                        {
                                            productMall.slice(0, 8).map((item) => (
                                                <Link key={item.id} to={`/product/${item.id}`}>
                                                    <li
                                                        key={item.id}
                                                        className=" rounded-xl bg-slate-200 border h-[232px] hover:scale-[1.02] ease-in duration-200 "
                                                    >
                                                        <img
                                                            src={item.thumbnail}
                                                            alt={item.title}
                                                            className="w-[180px] rounded-md"
                                                        />
                                                        <h2 className=" mt-2 text-center text-red-600">{item.category} -{item.minimumOrderQuantity}% </h2>
                                                    </li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
