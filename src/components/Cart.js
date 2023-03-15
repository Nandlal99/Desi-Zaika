
import { useDispatch,useSelector } from "react-redux";
import CartItem from "./CartItem";
import {clearCart} from "../utils/cartSlice";


const Cart = () => {

    var totalPrice=0;
    const cartItem = useSelector(store => store.cart.items);
    console.log(cartItem);

    const dispatch = useDispatch();

    const handleClearCart =() => {
        dispatch(clearCart());
    };

    return (cartItem.length===0) ? 
        <div className="m-5 mt-28 text-center mb-28">
            <img className="h-72 mx-auto m-3" alt="photo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" />
            <h2 className="font-semibold text-lg text-gray-600">Your cart is Empty</h2>
        </div> 
        : (
        <div className="m-5 mt-24">
            <div className="flex gap-80 m-3 mx-28">
                <h1 className="font-bold text-gray-800  mx-16 p-2">Cart Items : {cartItem.length}</h1>
                <button className="h-8 p-1 text-black bg-blue-200 rounded-md" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
            {
                cartItem.map((item) => {
                    totalPrice=totalPrice+(item.price/100);
                    return (
                        <CartItem key={item.id} {...item} />    
                    )
                }
                )
            }
            <h2 className="mx-44 p-8 px-10 bg-gray-100 w-1/2">Total Price : {totalPrice}</h2>
        </div>
    );
};

export default Cart;