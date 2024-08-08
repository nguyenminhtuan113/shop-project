import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
    carts: [],
    cartState: false,
}
const cartsSlice = createSlice({
    name: 'cartsSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            toast.success('Thêm sản phẩm thành công', {
                duration: 1800,
                position: 'top-center',
            });
            const { carts } = state;
            const { payload } = action;
            const isCheck = carts.some((pro) => pro.id === payload.id)
            if (!isCheck) {
                return {
                    ...state,
                    carts: [...carts, payload],
                }
            } else {
                const updateCarts = carts.map((cart) =>
                    cart.id === action.payload.id
                        ? { ...cart, quantity: cart.quantity + 1 }
                        : cart);
                return {
                    ...state,
                    carts: updateCarts
                };
            };
        },
        removeFromCart: (state, action) => {
            toast.success("Xoá sản phẩm thành công", {
                duration: 1800,
                position: 'top-center'
            });
            const { carts } = state;
            const updateCarts = carts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                carts: updateCarts
            }
        },
        reduceFromCart: (state, action) => {
            const { carts } = state;
            const cartItem = carts.find((i) => i.id === action.payload);
            if (cartItem.quantity > 1) {
                const updateCarts = carts.map((cart) =>
                    cart.id === action.payload
                        ? { ...cart, quantity: cart.quantity - 1 }
                        : cart
                );
                return {
                    ...state,
                    carts: updateCarts
                }
            }
        },
        setCartState: (state, action) => {
            return {
                ...state,
                cartState: action.payload
            }
        }
    }
})
export const { addToCart, removeFromCart, reduceFromCart, setCartState } = cartsSlice.actions;
export default cartsSlice.reducer;