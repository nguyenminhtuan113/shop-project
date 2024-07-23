import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
    isOpenLogin: false,
    username: localStorage.getItem("username"),
    isLogin: false
}
const authenSlice = createSlice({
    name: "authenSlice",
    initialState,
    reducers: {
        doLogin: (state, action) => {
            const { username, password } = action.payload;
            if (username === 'admin' && password === '12345') {
                toast.success("Đăng nhập thành công", {
                    duration: 1000,
                    position: "top-center",
                })
                localStorage.setItem("username", username);
                localStorage.setItem("isLogin", true)
                return {
                    ...state,
                    isOpenLogin: false,
                    username,
                    isLogin: true,
                }


            } else {
                toast.error("Đăng nhập thất bại!!!", {
                    duration: 1000,
                    position: "top-center",
                })
                return {

                    ...state,
                    isOpenLogin: true,
                    username: '',
                    isLogin: false,
                }
            }
        },
        updateStateOpenLogin: (state, action) => {
            return {
                ...state,
                isOpenLogin: action.payload,
            }
        }
    }
})
export const { doLogin, updateStateOpenLogin } = authenSlice.actions;
export default authenSlice.reducer;