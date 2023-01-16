import { Link } from 'react-router-dom'
export default function Nabvar() {
    return (
        <nav className='bg-black p-5 text-white'>
            <div className='flex justify-between'>
                {/* Logo */}
                <div>
                    <Link to='/' className='tracking-widest text-2xl text-bold'>eShop</Link>
                </div>
                {/* Links */}
                <div className='flex gap-4  text-xl'>
                    <Link to='/'>Home</Link>
                    <a href='/'>Product</a>
                    <a href='/'>SignIn</a>
                    <Link to='/addProduct'>Add Product</Link>
                </div>
            </div>
        </nav>
    )
}
