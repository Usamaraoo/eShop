import React from 'react'

export default function SingleProductCard({ image, price, title }) {
    return (
        <div className='w-72 h-90 bg-gray-300 p-2 rounded  '>
            <img className='min-w-full h-72 object-contain' src={image} alt={title} />
            <div>
                <p className=' tracking-titles text-gray-500'>{title}</p>
                <p className='font-bold tracking-prices'>{price} $</p>
            </div>
        </div>
    )
}
