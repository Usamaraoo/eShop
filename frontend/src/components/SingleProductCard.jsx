import { Link } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../features/cart/cartSlice'

export default function SingleProductCard({ image, price, title, slug }) {
    const dispatch = useDispatch()
    return (
        <div  className='w-72 h-90 bg-gray-300 p-2 rounded  '>
            <Link to={`/${slug}`}>
                <img to={`/${slug}`} className='min-w-full h-72 object-contain' src={image} alt={title} />
            </Link>
            <div>
                <p className=' tracking-titles text-gray-500'>{title}</p>
                <div className='flex justify-between items-center '>
                    <p className='font-bold tracking-prices'>{price} $</p>
                    <button
                        onClick={() => dispatch(addItemToCart())}
                        className='bg-yellow-400 px-4 py-1 rounded-md text-md'
                    >
                        To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
