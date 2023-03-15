
import {useDispatch} from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";

const CartItem = ({id,name,price,cloudinaryImageId}) => {

    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div className="flex mx-44 p-8 px-10 gap-2 bg-gray-100 w-1/2 ">
            <img className="h-28 bg-gray-200" alt="photo" src={IMG_CDN_URL+cloudinaryImageId} />
            <div className="mx-5 ">
                <h2 className="">{name}</h2>
                <h2 className="py-5">Rs.{price/100}</h2>
            </div>
            <div className="flex my-16 mx-20 w-40 gap-5">
                <button className="bg-blue-200 text-gray-500 font-bold mx-3 p-2 rounded-lg" onClick={() => handleRemoveItem(id)} >Remove</button>

            </div>
        </div>
    );
};

export default CartItem;