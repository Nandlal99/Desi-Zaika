import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {

    // whenever id change it maintain by state variable
    const [restaurant,setRestaurant] = useState(null);

    // get data from Api
    useEffect(() => {
        getRestaurant();
    },[]);

    async function getRestaurant(){
        const data = await fetch(FETCH_MENU_URL+id);
        const json = await data.json();
        console.log(json);
        setRestaurant(json);
    }

    // return restaurant data
    return restaurant;
};

export default useRestaurant;