import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addToCart, reduceFromCart, removeFromCart } from "../../redux-tookit/feater/cartsSlice";
export const ListCarts = () => {
    const dispath = useDispatch();
    const { carts } = useSelector((state) => state.cartsSlice);
    return (
        <>
            {carts.length === 0 ? (
                <div className="p-4 m-auto">
                    <img src='https://bizweb.dktcdn.net/100/333/755/themes/688335/assets/empty_cart.png?1647314197820' className="h-48" />
                    <h1 className="text-center pt-3 font-semibold">Empty Cart</h1>
                </div>
            ) : (
                <div className="p-3">
                    {carts.map((item) => (
                        <div className="mt-6 space-y-2" key={item.id}>
                            <div className="flex p-2 rounded-lg  gap-3 border items-center">
                                <img
                                    src={item.thumbnail}
                                    alt="thumbnail"
                                    className="h-14 w-14"
                                />
                                <div className="w-4/6">
                                    <h3 className="font-bold leading-4 text-lg">{item.title}</h3>
                                    <div className="flex space-x-2 py-1 items-center">
                                        <h3 className="font-semibold">
                                            ${item.price} x sl:{item.quantity}
                                        </h3>
                                        <span className="text-xs">-{item.discountPercentage}%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <RemoveCircleOutlineIcon
                                            onClick={() => dispath(reduceFromCart(item.id))}
                                            className="cursor-pointer"
                                        />
                                        <span className="font-semibold">{item.quantity}</span>
                                        <AddCircleOutlineIcon
                                            className="cursor-pointer"
                                            onClick={() => dispath(addToCart(item))}
                                        />
                                    </div>
                                </div>
                                <div className="font-bold grow">
                                    <span data-test="cart-item-price">
                                        ${item.quantity * item.price}
                                    </span>
                                    <DeleteForeverIcon
                                        onClick={() => dispath(removeFromCart(item.id))}
                                        className="text-xl cursor-pointer text-red-600"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};