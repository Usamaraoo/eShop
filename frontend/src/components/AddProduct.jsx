import { useState } from 'react'
import axios from 'axios'

export default function AddProduct() {
    const [product, setProduct] = useState({ title: '', price: 0, description: '' })
    const productChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const addProduct = async (e) => {
        e.preventDefault()
        const res = await axios.post(
            `${process.env.REACT_APP_BackendBaseUrl}/api/products`,
            { ...product }
        )
        if (res.status === 200) {
            setProduct({ title: '', price: 0, description: '' })
            alert('added successfully')
        }
    }

    return (
        <div className='h-screen'>
            <h1 className='font-bold text-3xl mt-10'>Add New Product</h1>
            {/* add a single product */}
            <form onSubmit={addProduct}>
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
                        <img
                            className='w-44 h-44'
                            src='http://obest.org/html/shopo/assets/images/products/single/product1.jpg'
                            alt=''
                        />
                    </div>
                </div>

                <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>'>
                    Add
                </button>
            </form>
        </div>
    )
}
