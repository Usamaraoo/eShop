import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
// Components
import Loading from './Loading'
// redux
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/cart/cartSlice'

export default function ProductDetail() {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const [currentItem, setCurrentItem] = useState(null)
    useEffect(() => {
        const getSingleProd = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_BackendBaseUrl}/api/products/${slug}`
            )
            if (res.status === 200) {
                setCurrentItem(res.data)
            }
        }
        getSingleProd()
    }, [])
    return (
        <div>
            {currentItem ? (
                <div className='flex justify-between shadow-md'>
                    <img
                        src='http://obest.org/html/shopo/assets/images/products/single/product1.jpg'
                        alt={currentItem.title}
                        className=''
                    />
                    <div className='px-10 py-10 flex-grow border'>
                        <h1 className='text-3xl font-bold '>{currentItem.title}</h1>
                        <p className='text-2xl text-orange-600 font-bold'>
                            {currentItem.price} $
                        </p>
                        <p className='text-xl text-gray-600'>{currentItem.description}</p>
                        <div className='flex gap-4 mt-4'>
                            <p className='font-bold text-xl'>Availability</p>
                            <span className='text-orange-600'>In stock</span>
                        </div>
                        {/* add to cart  */}
                        <div className='mt-5'>
                            <button
                                onClick={() => dispatch(addItemToCart())}
                                className='bg-yellow-400 px-10 py-5 text-xl  rounded-md '
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    )
}
