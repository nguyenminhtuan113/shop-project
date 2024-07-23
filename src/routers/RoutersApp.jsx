import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import { HomePage } from '../pages/home/HomePage'
import { ProductSinglePage } from '../pages/product/ProductSinglePage'

export const RoutersApp = () => {
    return (
        <Routes>
            <Route path='' element={<Header />}>
                <Route path='' element={<HomePage />} />
                <Route path='product/:id' element={<ProductSinglePage />} />
            </Route>
        </Routes>
    )
}
