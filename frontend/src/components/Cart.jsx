// redux imports
import { useSelector, useDispatch } from 'react-redux'
import {clearCart} from '../features/cart/cartSlice'

export default function Cart() {
    const dispatch = useDispatch()
    const { amount, total, cartItems } = useSelector((store) => store.cart)
    return (
        <div>
            <h1 className='text-center text-3xl mt-10 font-bold'>Cart</h1>

            <div className='border shadow-xl'>
                <p>Total:{total}</p>
                <p>amount:{amount}</p>
                <p>cartItems:{cartItems.length}</p>

                <button
                    className='p-3 rounded-md bg-green-400'
                    onClick={() => dispatch(clearCart())}
                >
                    clearCart
                </button>
            </div>
        </div>
    )
}
