import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    categories: [],
}
const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
        listCategory: (state, action) => {
            return {
                ...state,
                categories: action.payload,
            }
        }
    }
})
export const { listCategory } = categorySlice.actions;
export default categorySlice.reducer;
