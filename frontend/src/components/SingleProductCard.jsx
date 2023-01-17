import { Link } from 'react-router-dom'

export default function SingleProductCard({ image, price, title, slug }) {
    return (
        <Link to={`/${slug}`} className='w-72 h-90 bg-gray-300 p-2 rounded  '>
            <img className='min-w-full h-72 object-contain' src={image} alt={title} />
            <div>
                <p className=' tracking-titles text-gray-500'>{title}</p>
                <div className='flex justify-between items-center '>
                    <p className='font-bold tracking-prices'>{price} $</p>
                    <button className='bg-yellow-400 px-4 py-1 rounded-md text-md'>To Cart</button>
                </div>
            </div>
        </Link>
    )
}
