// redux imports
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, updateItemQuantity, removeItem } from '../features/cart/cartSlice'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import axios from 'axios'

export default function Cart() {
    const dispatch = useDispatch()
    const { amount, cartItems } = useSelector((store) => store.cart)
    const checkoutFun = async () => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_BackendBaseUrl}/api/payment/create-checkout-session`,
                {
                    items: cartItems,
                    quantity: cartItems.map((item) => item.quantity),
                }
            )
            if (res.status === 200) {
                window.location = res.data.url
                // console.log(res.data.url)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='w-4/5 m-auto '>
            <div className='border mt-10 shadow-xl p-4 '>
                <div>
                    <h1 className=' text-3xl py-3 font-medium tracking-widest'>Cart</h1>
                    <div className='grid grid-cols-5 text-xl text-gray-500 font-bold'>
                        <div></div>
                        <div>Title</div>
                        <div>Quantity</div>
                        <div>Total</div>
                        <div>Action</div>
                    </div>
                    <hr />
                    {cartItems &&
                        cartItems.map((item, index) => {
                            const { image, title, price, quantity, slug } = item
                            return (
                                <div
                                    className='grid grid-cols-5 items-center border-b-2'
                                    key={index}
                                >
                                    <img
                                        className='w-24'
                                        src={
                                            'http://obest.org/html/shopo/assets/images/products/single/product1.jpg'
                                        }
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
                                    <p className='text-xl  '>{price} $</p>
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                removeItem({ slug, quantity, price })
                                            )
                                        }
                                        className='bg-red-400 mx-10'
                                    >
                                        Remove
                                    </button>
                                </div>
                            )
                        })}
                </div>
                <div className='grid grid-cols-4 '>
                    <button
                        className='px-4 py-2 rounded-md bg-yellow-400'
                        onClick={() => dispatch(clearCart())}
                    >
                        clearCart
                    </button>
                    <div></div>
                    <div></div>
                    <div>
                        <p className='text-2xl font-bold'>{amount} $</p>
                        <p className='text-2xl font-bold'>{amount} $</p>
                        <button
                            onClick={() => checkoutFun()}
                            className='bg-green-400 px-4 py-1'
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}