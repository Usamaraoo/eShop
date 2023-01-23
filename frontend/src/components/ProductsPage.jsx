import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// reducer
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../features/products/productSlice'
// Local components
import SingleProductCard from './SingleProductCard'
import Categories from './Categories'
import Loading from './Loading'

export default function ProductsPage() {
    const { products, isLoading } = useSelector((store) => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        console.log('render all products')
    }, [])
    return (
        <div className='h-screen '>
            <h1 className='text-xl font-bold mt-5'>Featured</h1>
            <div className='flex mt-5 gap-2'>
                {/* Product categories */}
                <Categories />
                {/* Product list */}
                {!isLoading ? (
                    <div className='flex gap-10'>
                        {/* Loop through products */}
                        {products.map((singleProduct) => {
                            const { _id, title, slug, price } = singleProduct
                            return (
                                <SingleProductCard
                                    key={_id}
                                    title={title}
                                    price={price}
                                    slug={slug}
                                    image={
                                        'http://obest.org/html/shopo/assets/images/products/single/product1.jpg'
                                    }
                                />
                            )
                        })}
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    )
}
