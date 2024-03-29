// redux imports
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, updateItemQuantity, removeItem } from '../features/cart/cartSlice'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { ImCross } from 'react-icons/im'
import { FaLongArrowAltRight } from 'react-icons/fa'

import axios from 'axios'

export default function Cart() {
    const dispatch = useDispatch()
    const { amount, cartItems } = useSelector((store) => store.cart)
    const checkoutFun = async () => {
        try {
            const res = await axios.post(
                `/api/payment/create-checkout-session`,
                {
                    items: cartItems,
                    quantity: cartItems.map((item) => item.quantity),
                }
            )
            if (res.status === 200) {
                window.location = res.data.url
                dispatch(clearCart())
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='w-4/5 m-auto min-h-screen '>

            {cartItems.length > 0 ? (
                <div className='border mt-10 shadow-xl p-4  rounded-xl'>
                    <div>
                        <h1 className=' text-3xl py-3 font-medium tracking-widest'>
                            Cart
                        </h1>
                        <div className='grid grid-cols-5 text-xl text-gray-500 font-bold mb-4'>
                            <div>Image</div>
                            <div>Title</div>
                            <div>Quantity</div>
                            <div>Total</div>
                            <div>Action</div>
                        </div>
                        <hr />
                        {cartItems &&
                            cartItems.map((item, index) => {
                                const { title, price,image, quantity, slug } = item
                                return (
                                    <div
                                        className='grid grid-cols-5 items-center border-b-2 mb-4'
                                        key={index}
                                    >
                                        <img
                                            className='w-24 h-24 object-cover'
                                            src={image}
                                            alt={title}
                                        />
                                        <p className='text-xl  font-medium'>{title}</p>
                                        <div className='flex items-center gap-2 text-xl'>
                                            <p>{quantity}</p>
                                            <div className='flex flex-col'>
                                                <IoMdArrowDropup
                                                    className='cursor-pointer'
                                                    onClick={() =>
                                                        dispatch(
                                                            updateItemQuantity({
                                                                quantity: 1,
                                                                title,
                                                            })
                                                        )
                                                    }
                                                    size={28}
                                                />
                                                <IoMdArrowDropdown
                                                    className='cursor-pointer'
                                                    onClick={() =>
                                                        dispatch(
                                                            updateItemQuantity({
                                                                quantity: -1,
                                                                title,
                                                            })
                                                        )
                                                    }
                                                    size={28}
                                                />
                                            </div>
                                        </div>
                                        <p className='text-xl  '>
                                            {price}{' '}
                                            <span className='text-xs font-bold'>$</span>{' '}
                                        </p>
                                        <div>
                                            {/* <button
                                            onClick={() =>
                                                dispatch(
                                                    removeItem({ slug, quantity, price })
                                                )
                                            }
                                            className='bg-red-400 px-4 py-1'
                                        >
                                            Remove
                                        </button> */}
                                            <ImCross
                                                size={12}
                                                className='text-red-500 cursor-pointer'
                                                onClick={() =>
                                                    dispatch(
                                                        removeItem({
                                                            slug,
                                                            quantity,
                                                            price,
                                                        })
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className='grid grid-cols-5  mt-5 items-center'>
                        <div>
                            <button
                                className='px-4 py-1 rounded-md bg-yellow-400  text-sm '
                                onClick={() => dispatch(clearCart())}
                            >
                                Clear cart
                            </button>
                        </div>

                        <div></div>
                        <div></div>
                        <p className='text-2xl font-bold'>{amount} $</p>

                        <div>
                            <button
                                onClick={() => checkoutFun()}
                                className='bg-green-400 px-4 py-1 text-sm rounded-md flex items-center gap-1'
                            >
                                Checkout
                                <FaLongArrowAltRight />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='border mt-10 shadow-xl p-4  '>
                    <p className='text-center text-2xl text-md'>Empty cart</p>
                </div>
            )}
        </div>
    )
}
