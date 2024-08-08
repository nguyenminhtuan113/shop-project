import { Rating } from '@mui/material'
import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../../redux-tookit/feater/cartsSlice';
import toast from 'react-hot-toast';
import { updateStateOpenLogin } from '../../redux-tookit/feater/authenSlice';
export const BoxProductDetail = ({ imgProduct, productDetail, getImg }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.authenSlice);
  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  }
  const decreaseQty = () => {
    setQuantity((prev) => (prev - 1 <= 0 ? 1 : prev - 1));
  }
  const AddToCart = (item) => {
    if (username) {
      dispatch(addToCart({ ...item, quantity }));
    } else {
      toast.error('Vui lòng đăng nhập !!!', {
        duration: 1000,
        position: "top-center"
      })
      dispatch(updateStateOpenLogin(true));
    }
  }
  const buyNow = (item) => {
    if (username) {
      dispatch(addToCart({ ...item, quantity }));
      navigate('/cart');
    } else {
      toast.error('Vui lòng đăng nhập !!!', {
        duration: 1000,
        position: "top-center"
      })
      dispatch(updateStateOpenLogin(true));
    }
  }
  return (

    <div className='flex flex-row border bg-white p-3 rounded-md'>
      <div className='w-1/2 flex flex-col justify-center'>
        <div className='p-2 w-[450px] h-[450px] overflow-hidden'>
          <img src={imgProduct} className='w-full object-cover' alt="" />
        </div>

        <div className='flex px-2 gap-2'>
          {productDetail?.images?.slice(0, 4).map((item) => (
            <img src={item} alt=""
              key={item}
              className={
                item === imgProduct
                  ? 'w-[80px] h-[80px] cursor-pointer border-solid border-2 border-[#EE4D2D]'
                  : 'w-[80px] h-[80px] border cursor-pointer '
              }
              onClick={() => getImg(item)}
            />
          ))}
        </div>
      </div>
      <div className='w-full p-2'>
        <div className="flex flex-col">
          <h1 className='text-2xl'>{productDetail.title}</h1>
          <div className='flex flex-row gap-2 py-2'>
            <div className="flex items-center px-2">
              <h2 className='underline'>{productDetail.rating}</h2>
              <p>
                <Rating
                  name='half-rating-read'
                  sx={{ fontSize: 20 }}
                  defaultValue={productDetail?.rating}
                  precision={0.5}
                  readOnly
                />
              </p>
            </div>
            <h2 className="px-2">{productDetail.stock} Đánh giá</h2>
            <h2>{productDetail.minimumOrderQuantity} Đã bán</h2>
          </div>
          <div className="flex gap-3 p-3 items-center bg-gray-100 my-2">
            <h3 className='text-4xl text-red-500'>
              {Math.ceil(productDetail.price)}$
            </h3>
            <span className='p-1 bg-red-400 text-xs font-bold text-white'>
              {productDetail.minimumOrderQuantity}% GIẢM
            </span>
          </div>
          <div className="flex gap-3 flex-row flex-wrap bg-white py-3">
            <h1 className="font-bold">Vận chuyển: </h1>
            <div>
              <div className='flex items-center'>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png" className='w-5 h-5' alt="" />
                Miễn phí vận chuyển</div>
            </div>
          </div>

          <div className='mt-2'>
            <div className="flex gap-4 flex-wrap bg-white py-3 items-center">
              <h1 className='font-bold'>Màu sắc:</h1>
              <div className="flex flex-row gap-2 cursor-pointer">
                {productDetail?.images?.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className={
                      item === imgProduct
                        ? "flex gap-2 p-2  items-center border-solid border-2 border-[#EE4D2D]"
                        : "flex gap-2 p-2 border items-center"
                    }
                    onClick={() => getImg(item)}
                  >
                    <img src={item} alt="" className="w-[30px] h-[30px]" />

                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-3">
            <div className="flex gap-4 flex-row flex-wrap bg-white py-3 items-center">
              <h1 className="font-bold">Số lượng: </h1>
              <div className="flex flex-row gap-2 cursor-pointer">
                <div className="flex items-center mx-3 gap-3 border">
                  <button
                    type="button"
                    className="flex items-center justify-center bg-gray-100"
                    onClick={decreaseQty}
                  >
                    <RemoveIcon />
                  </button>
                  <div className="qty-value flex align-center justify-center">
                    {quantity}
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center bg-gray-100"
                    onClick={increaseQty}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <button
              type="button"
              className="text-[#EE4D2D]  bg-[#f7a280] hover:bg-[#f19f7e] hover:border-[#EE4D2D] border  font-medium  text-sm px-5 py-2.5 me-2 mb-2 "
              onClick={() => AddToCart(productDetail)}
            >
              <AddShoppingCartIcon />
              Add to cart

            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-[#EE4D2D] hover:bg-[#f06a4f] focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2  dark:focus:ring-red-900"
              onClick={() => buyNow(productDetail)}
            >
              Buy now
            </button>
          </div>
        </div>

      </div>

    </div>

  )
}
