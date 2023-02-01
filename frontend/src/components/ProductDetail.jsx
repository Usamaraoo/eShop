import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { BsHandbagFill } from 'react-icons/bs'
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
    }, [slug])
    return (
        <div className='mt-20 h-screen'> 
            {currentItem ? (
                <div className='flex justify-between '>
                    <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className='max-w-xs w-94 h-94 object-contain'
                    />
                    <div className='px-10 py-10 flex-grow border-l'>
                        <div className='flex justify-between'>
                            <h1 className='text-3xl font-medium '>{currentItem.title}</h1>

                            <button
                                onClick={() =>
                                    dispatch(
                                        addItemToCart({
                                            image: currentItem.image,
                                            title: currentItem.title,
                                            slug: currentItem.slug,
                                            price: currentItem.price,
                                        })
                                    )
                                }
                                className='flex justify-between items-center gap-3 bg-yellow-400 px-4 py-1   rounded-md '
                            >
                                Add
                                <BsHandbagFill size={12} />
                            </button>
                        </div>
                        <p className='text-xl mt-2  font-medium'>
                            Price :{' '}
                            <span className='text-orange-600'>{currentItem.price} <span className='text-xs font-bold'>$</span> </span>
                        </p>
                        <p className=' text-gray-600'>{currentItem.description}</p>
                        <div className='flex gap-4 mt-2'>
                            <p className='font-medium text-xl'>Availability :</p>
                            <span className='text-orange-600'>In stock</span>
                        </div>
                        {/* add to cart  */}
                        {/* <div className='mt-5'>
                            <button
                                onClick={() =>
                                    dispatch(
                                        addItemToCart({
                                            image: currentItem.image,
                                            title: currentItem.title,
                                            slug: currentItem.slug,
                                            price: currentItem.price,
                                        })
                                    )
                                }
                                className='bg-yellow-400 px-4 py-1   rounded-md '
                            >
                                Add to cart
                            </button>
                        </div> */}
                        {/* Typyes */}
                        <div className='flex gap-2 items-center font-medium mt-2'>
                            <div className='text-xl'>Types :</div>
                            <button className='text-xs px-3 text-gray-600 py-1 bg-gray-200 rounded-xl'>
                                Kitchen
                            </button>
                            <button className='text-xs px-3 text-gray-600 py-1 bg-gray-200 rounded-xl'>
                                Furneture
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
