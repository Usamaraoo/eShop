import React from 'react'

export default function ProductDetail() {
    return (
        <div>
            <div className='flex justify-between'>
                <img
                    src='http://obest.org/html/shopo/assets/images/products/single/product1.jpg'
                    alt=''
                />
                <div className='mt-20'>
                    <h1 className='text-3xl font-bold '>Easy Sitting couch for bedrooms</h1>
                    <p className='text-2xl text-orange-600 font-bold'>300 $</p>
                    <p className='text-xl text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                        consequatur fugiat magnam eaque. Quos officiis dolore quas
                        deserunt laborum neque earum, a eaque eos id, minus in facere eius
                        quis aut perspiciatis iste pariatur aliquid mollitia illum enim
                        veniam amet harum esse? Officiis tempora consequuntur autem ipsum,
                        adipisci neque impedit.
                    </p>
                    <div className='flex gap-4 mt-4'>
                    <p className='font-bold text-xl'>Availability</p><span className='text-orange-600'>In stock</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
