import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className=' p-4 bg-black text-white'>
            <div className='flex justify-between'>
                <Link to='/' className='tracking-widest text-2xl text-bold'>
                    eShop
                </Link>
                <div className='flex gap-2 text-sm items-center'>
                    <p>Home</p>
                    <p>Products</p>
                    <p>Careers</p>
                    <p>About</p>
                </div>
            </div>
            <div className='text-xs text-center'>© eshop™. All Rights Reserved.</div>
        </footer>
    )
}
