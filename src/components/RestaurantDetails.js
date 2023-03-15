import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./Shimmer";
import MenuShimmerUI from "./MenuShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../utils/cartSlice";

const RestaurantDetails = () => {

    const param = useParams();
    const {id} = param;
    // const [restaurantdetail, setRestaurantDetail] = useState(null);

    const restaurantdetail= useRestaurant(id);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item.id));
    };

    return (!restaurantdetail) ? <MenuShimmerUI/> : (
        <div className="mt-20">
            <div className=" left-0 right-0 restaurantDetails flex bg-slate-800 h-52 text-white">
                <img className=" ml-40 p-3 m-3 h-48 " alt="logo" src={IMG_CDN_URL+restaurantdetail?.data?.cloudinaryImageId} />
                <div className="detail-item m-5 p-5">
                    <h2 className="p-1">{restaurantdetail?.data?.name}</h2>
                    <h4 className="p-1">{restaurantdetail?.data?.cuisines?.join(", ")}</h4>
                    <h4 className="p-1">{restaurantdetail?.data?.locality
                            +", "+restaurantdetail?.data?.area}</h4>
                    <div className="detail-rating flex p-1 gap-5">
                        <div className="avgRating">
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <h4 className="px-1">{restaurantdetail?.data?.avgRatingString}</h4>
                            </div>
                            <h4>{restaurantdetail?.data?.totalRatingsString}</h4>
                        </div>
                        <div  className="deliveryTime">
                            <h4>{restaurantdetail?.data?.sla?.slaString}</h4>
                            <h4>Delivery time</h4>
                        </div>
                        <div  className="costForTwo">
                            <h4>{restaurantdetail?.data?.costForTwoMsg}</h4>
                            <h4>Cost for two</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="restaurnatMenu mt-5 mx-40 w-2/3 p-10 shadow-lg">
                    <h2>Recommended</h2>
                    <h2 className="text-gray-400">{Object.values(restaurantdetail?.data?.menu?.items)?.length} Items</h2>
                    <ul>
                        {
                            // console.log(Object.values(restaurantdetail?.data?.menu?.items))
                            Object.values(restaurantdetail?.data?.menu?.items).map((item)=> (
                                <div key={item.id} className="flex shadow-sm p-3">
                                    <div className="p-2 m-2 w-2/3">
                                        <li >{item?.name}</li>
                                        <h2 className="py-3">Rs.{item?.price/100}</h2>
                                        <h2 className="w-2/3 text-sm text-gray-400">{item?.description}</h2>
                                    </div>
                                    <div className="p-2 m-2 w-1/3 ">
                                        {(item?.cloudinaryImageId) ? <img className="h-28" alt="photo" src={IMG_CDN_URL+item?.cloudinaryImageId} /> : "" }
                                        <div className="flex gap-10 px-5 py-2">
                                            <button className="text-gray-500 text-3xl  hover:bg-green-300 w-8 rounded-lg" onClick={() => handleRemoveItem(item)} >{"-"}</button>
                                            <button className="text-gray-500 text-3xl  hover:bg-green-300 w-8 rounded-lg" onClick={() => handleAddItem(item)}>{"+"}</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;