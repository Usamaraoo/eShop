import { useState } from 'react'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'
// redux
import { addProduct } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function AddProduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading } = useSelector((store) => store.products)

    const [product, setProduct] = useState({ title: '', image:'', price: 0, description: '' })
    const productChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const add =  (e) => {
        e.preventDefault()
        dispatch(addProduct(product))
        setProduct({ title: '',image:'', price: 0, description: '' })
        navigate('/')
    }

    return (
        <div className='h-screen'>
            <h1 className='font-bold text-3xl mt-10'>Add New Product</h1>
            {/* add a single product */}
            {!isLoading ? <form onSubmit={add}>
                <div className='grid gap-6 mb-6 md:grid-cols-2 mt-10'>
                    <div>
                        <label class='block mb-2 font-medium text-gray-900 dark:text-white'>
                            Title
                        </label>
                        <input
                            type='text'
                            value={product.title}
                            name='title'
                            onChange={(e) => productChange(e)}
                            placeholder='Product title'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>
                    <div>
                        <label class='block mb-2 font-medium text-gray-900 dark:text-white'>
                            Price
                        </label>
                        <input
                            type='number'
                            name='price'
                            value={product.price}
                            onChange={(e) => productChange(e)}
                            placeholder='Product Price'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>{' '}
                    <div>
                        <label class='block mb-2 font-medium text-gray-900 dark:text-white'>
                            Description
                        </label>
                        <textarea
                            rows={10}
                            type='text'
                            name='description'
                            value={product.description}
                            onChange={(e) => productChange(e)}
                            placeholder='Product description'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>
                    <div>
                        <label class='block mb-2 font-medium text-gray-900 dark:text-white'>
                            Img url
                        </label>
                        <input
                            type='text'
                            name='image'
                            value={product.image}
                            onChange={(e) => productChange(e)}
                            placeholder='Paste image url from web'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                        {product.image && <img
                            className='w-44 h-44'
                            src={product.image}
                            alt={product.title}
                        />}
                    </div>
                </div>

                <button  className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>'>
                    Add
                </button>
            </form> :<Loading/>}
        </div>
    )
}
