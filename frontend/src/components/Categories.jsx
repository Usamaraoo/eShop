import axios from 'axios'
import { useEffect, useState } from 'react'
// Reducer
import { useDispatch } from 'react-redux'
import { filterByCategories } from '../features/products/productSlice'

export default function Categories() {
    const [activeCat, setActiveCat] = useState('all')
    const dispatch = useDispatch()
    const [cat, setCat] = useState(null)

    useEffect(() => {
        const getCat = async () => {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_BackendBaseUrl}/api/categories`
                )
                if (res.status === 200) {
                    setCat(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getCat()
    }, [])

    return (
        <div className='text-center bg-yellow-gray  px-2 tracking-category md:sticky top-0 m-auto md:m-0  '>
           
            <div className='text-md font-medium  my-2'>Categories</div>
            <div
                className={`${
                    activeCat === 'all' ? 'bg-slate-200' : ''
                } px-6 border-b py-1 cursor-pointer rounded`}
                onClick={() => {dispatch(filterByCategories('all'))
            setActiveCat('all')
            }}
            >
                All
            </div>
            <div className='flex md:flex-col flex-wrap'>

                {cat &&
                    cat.map((c, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => {
                                    dispatch(filterByCategories(c.title))
                                    setActiveCat(c.title)
                                }}
                            >
                                <p
                                    className={`${
                                        activeCat === c.title ? 'bg-slate-200' : ''
                                    } px-6 border-b py-1 cursor-pointer rounded`}
                                >
                                    {c.title}
                                </p>
                            </div>
                        )
                })}
            </div>

        </div>
    )
}
