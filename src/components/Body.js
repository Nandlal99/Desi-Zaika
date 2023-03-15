import { useState, useEffect } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import NotFound from "./NotFound";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { CORS_API_HOST, SWIGGY_API_URL } from "../config";


const Body = () => {

    const [filterRestaurants,setFilterRestaurants] = useState([]);
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        // API call..
        getRestaurant();
    }, []);

    async function getRestaurant(){

        const URL = `${CORS_API_HOST}${SWIGGY_API_URL}`;
        const data = await fetch(URL);

        //const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        console.log(json);
        //optional chaining..
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();

    if(!isOnline){
        return (
        <div className="useOnlineHook mt-28 text-center mb-10 text-red-500 text-2xl">
            <h3>Oops !!</h3>
            <h3>Offline, check your internet connection!!</h3>
        </div>);
    }

    return (allRestaurants?.length === 0) ? (<ShimmerUI/>) : (
        <>
            <div className="search text-center mt-32 ">
                <input 
                    type="text" 
                    className="search-text border w-64 px-2 rounded-md" 
                    placeholder="Search for restaurant" 
                    value={searchText} 
                    onChange = { (e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="search-btn mx-2 w-14 border-solid bg-gray-200 rounded-md"
                    onClick={ () => {
                       const data= filterData(searchText,allRestaurants);
                       setFilterRestaurants(data);
                    }}
                    >
                        Search
                </button>
            </div>
            <div className="restaurant-list flex flex-wrap gap-5 justify-center mt-2 ">
            {   (filterRestaurants?.length === 0) ? (<NotFound/>) :
                (filterRestaurants?.map((restaurant) => {
                return (
                    <Link to={"/restaurantDetails/"+restaurant.data.id} key={restaurant.data.id}>
                    <RestaurantCard {...restaurant.data} />
                    </Link>);
                }))
            }
            </div>
        </>
    );
};

export default Body;