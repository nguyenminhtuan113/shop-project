import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import { HomePage } from '../pages/home/HomePage'
import { ProductSinglePage } from '../pages/product/ProductSinglePage'
import { CartPage } from '../pages/cart/CartPage'
import { CategoryPage } from '../pages/category/CategoryPage'

export const RoutersApp = () => {
    return (
        <Routes>
            <Route path='' element={<Header />}>
                <Route path='' element={<HomePage />} />
                <Route path='product/:id' element={<ProductSinglePage />} />
                <Route path='category/:id' element={<CategoryPage />} />
                <Route path='cart' element={<CartPage />} />
                
            </Route>
        </Routes>
    )
}
