import React from 'react'

export const BoxProductDesc = ({ productDetail }) => {
    return (
        <div>
            <div className=" mt-3">
                <h1 className="bg-gray-100 p-3">MÔ TẢ SẢN PHẨM: </h1>
                <div className="p-3 border-2 bg-white border-gray-300">
                    <h1>{productDetail.description}</h1>
                    <h1>
                        Category: <span>{productDetail.category}</span>
                    </h1>
                    <h1>
                        Brand: <span>{productDetail.brand ? productDetail.brand : "No brand"}</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
