import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// Local components
import SingleProductCard from './SingleProductCard'
import Loading from './Loading'

export default function ProductsPage() {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        const getAllProducts = async () => {
            // const res = await axios.get('/api/products')
            const res = await axios.get(
                `${process.env.REACT_APP_BackendBaseUrl}/api/products`
            )
            if (res.status === 200) {
                setProducts(res.data)
            }
        }
        console.log('render all products')
        getAllProducts()
    }, [])
    return (
        <div className='h-screen '>
            <h1 className='text-xl font-bold mt-5'>Featured</h1>
            <div className='flex mt-5 gap-2'>
                {/* Product categories */}
                <div className='text-center bg-yellow-50  px-2'>
                    <div className='text-md font-medium  my-2'>Categories</div>
                    <div className=' px-6 border-b py-1'>Furnuter</div>
                    <div className=' px-6 border-b py-1'>Crockery</div>
                    <div className=' px-6 border-b py-1'>Kitchen</div>
                    <div className=' px-6 border-b py-1'>Home</div>
                </div>
                {/* Product list */}
                {products ? (
                    <div className='flex gap-10'>
                        {/* Loop through products */}
                        {products &&
                            products.map((singleProduct) => {
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
