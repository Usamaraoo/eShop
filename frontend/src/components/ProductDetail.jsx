import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function ProductDetail() {
    const { slug } = useParams()
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
                <div className='flex justify-between'>
                    <img
                        src='http://obest.org/html/shopo/assets/images/products/single/product1.jpg'
                        alt=''
                    />
                    <div className='mt-20'>
                        <h1 className='text-3xl font-bold '>{currentItem.title}</h1>
                        <p className='text-2xl text-orange-600 font-bold'>
                            {currentItem.price} $
                        </p>
                        <p className='text-xl text-gray-600'>{currentItem.description}</p>
                        <div className='flex gap-4 mt-4'>
                            <p className='font-bold text-xl'>Availability</p>
                            <span className='text-orange-600'>In stock</span>
                        </div>
                    </div>
                </div>
            ) : (
                <p className='text-3xl mt-20 font-bold'>Loading....</p>
            )}
        </div>
    )
}
