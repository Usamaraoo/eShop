import { Link } from 'react-router-dom'
import { BsHandbagFill } from 'react-icons/bs'
// redux imports
import { useSelector ,useDispatch} from 'react-redux'
export default function Nabvar() {
    const { amount } = useSelector((store) => store.cart)
    console.log(amount, 'amount')
    return (
        <nav className='bg-black p-5 text-white'>
            <div className='flex justify-between'>
                {/* Logo */}
                <div>
                    <Link to='/' className='tracking-widest text-2xl text-bold'>
                        eShop
                    </Link>
                </div>
                {/* Links */}
                <div className='flex gap-4  text-xl '>
                    <Link to='/'>Home</Link>
                    <Link to='/addProduct'>Add Product</Link>
                    <Link  className='relative' to='/cart'>
                        <span className='absolute font-bold -right-2 text-yellow-400 -top-2 z-10'>0</span>
                        <BsHandbagFill size={25}/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
