import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Categories() {
    const [cat, setCat] = useState(null)

    useEffect(() => {
        const getCat = async () => {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_BackendBaseUrl}/api/categories`
                )
                if (res.status === 200) {
                    setCat(res.data)
                    console.log(res.data);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getCat()
        console.log(cat);
    }, [])

    return (
        <div className='text-center bg-yellow-50  px-2 tracking-category'>
            <div className='text-md font-medium  my-2'>Categories</div>
            <div className=' px-6 border-b py-1'>All</div>
            {cat &&
                cat.map((c, i) => {
                    return (
                        <div key={i}>
                            <p className='px-6 border-b py-1'>{c.title}</p>
                        </div>
                    )
                })}
            {/* <div className=' px-6 border-b py-1'>Furnuter</div>
            <div className=' px-6 border-b py-1'>Crockery</div>
            <div className=' px-6 border-b py-1'>Kitchen</div>
            <div className=' px-6 border-b py-1'>Home</div> */}
        </div>
    )
}
