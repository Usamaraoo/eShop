import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// Local components
import SingleProductCard from './SingleProductCard'

export default function ProductsPage() {
    const [products, setProducts] = useState([])
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
    console.log('render all products');
        getAllProducts()
    }, [])
    return (
        <div>
            <h1 className='text-xl font-bold'>Featured</h1>
            {/* Product list */}
            <div className='flex gap-10'>
                {/* Loop through products */}
                {products &&
                    products.map((singleProduct) => {
                        const { _id, title, price } = singleProduct
                        return (
                            <SingleProductCard
                                key={_id}
                                title={title}
                                price={price}
                                image={
                                    'http://obest.org/html/shopo/assets/images/products/single/product1.jpg'
                                }
                            />
                        )
                    })}
            </div>
        </div>
    )
}
