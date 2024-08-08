import { Rating } from '@mui/material'
import React from 'react'

export const BoxComment = ({ productDetail }) => {
    return (
        <div>
            <div className=" mt-3 bg-gray-50">
                <h1 className="bg-gray-100 p-3">ĐÁNH GIÁ SẢN PHẨM: </h1>
                <div className="p-3 flex flex-col justify-center gap-3">
                    {productDetail?.reviews?.map((item, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-1">
                                <img
                                    className="w-[30px] rounded-full"
                                    src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                                    alt=""
                                />
                                <h1 className=" text-xl font-bold">{item.reviewerName} </h1>
                            </div>

                            <h1>
                                {" "}
                                <Rating
                                    name="half-rating-read"
                                    sx={{ fontSize: 16 }}
                                    defaultValue={item.rating}
                                    precision={0.5}
                                    readOnly
                                />{" "}
                            </h1>
                            <p className=" text-xs">{item.date}</p>
                            <h3>{item.comment}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
