import { Link } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/cart/cartSlice'

export default function SingleProductCard({ image, price, title, slug }) {
    const dispatch = useDispatch()
    return (
        <div className='w-52 h-70 mt-5 bg-yellow-50 p-2 rounded shadow-xl  '>
            <Link to={`/${slug}`}>
                <img
                    to={`/${slug}`}
                    className='min-w-full object-contain'
                    src={image}
                    alt={title}
                />
            </Link>
            <div>
                <p className=' tracking-titles text-gray-700 my-2'>{`${
                    title.length > 12 ? title.slice(0, 14) + '...' : title
                }`}</p>
                <div className='flex justify-between items-center '>
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
