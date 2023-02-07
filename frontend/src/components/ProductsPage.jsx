import { useEffect } from 'react'
// reducer
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../features/products/productSlice'
// Local components
import SingleProductCard from './SingleProductCard'
import Categories from './Categories'
import Loading from './Loading'

export default function ProductsPage() {
    const { products, isLoading } = useSelector((store) => store.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts('testParam'))
        console.log('render all products')
    }, [])
    return (
        <div className='min-h-screen px-4 md:px-0 mb-5'>
            <h1 className='text-xl font-bold mt-5 hidden md:block'>Featured</h1>
            <div className='flex mt-5 gap-2 items-start flex-col md:flex-row items-start '>
                {/* Product categories */}
                <Categories />
                {/* Product list */}
                <div className='md:hidden   flex justify-center items-center w-full'>
                    <p className='text-xl font-bold mt-5  '>Featured</p>
                </div>

                {!isLoading ? (
                    <div className='flex gap-10 flex-wrap m-auto justify-center '>
                        {/* Loop through products */}
                        {products.map((singleProduct) => {
                            const { _id, title,image, slug, price } = singleProduct
                            return (
                                <SingleProductCard
                                    key={_id}
                                    title={title}
                                    price={price}
                                    slug={slug}
                                    image={image}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    )
}
