import { Link } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/cart/cartSlice'

export default function SingleProductCard({ image, price, title, slug }) {
    const dispatch = useDispatch()
    return (
        <div className='md:w-52 md:h-70 w-4/5  bg-yellow-50  rounded hover:shadow-xl overflow-hidden '>
            <Link to={`/${slug}`}>
                <img
                    to={`/${slug}`}
                    className='md:w-52 h-52 w-full object-cover ' 
                    src={image}
                    alt={title}
                />
            </Link>
            <div className='p-2'>
                <p className=' tracking-titles text-gray-700 my-2'>{`${
                    title.length > 12 ? title.slice(0, 14) + '...' : title
                }`}</p>
                <div className='flex justify-between items-center  '>
                    <p className='font-bold tracking-prices'>{price} $</p>
                    <button
                        onClick={() =>
                            dispatch(addItemToCart({ image, price, title, slug }))
                        }
                        className='bg-yellow-400 px-4 py-1 text-sm rounded-md text-md'
                    >
                        To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
