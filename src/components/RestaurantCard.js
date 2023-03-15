
import { IMG_CDN_URL } from "../config";


// Using props to get properties

// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//       <div className="card">
//           <img alt="logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//       props.restaurant.data?.cloudinaryImageId} />
//           <h2>{props.restaurant.data?.name}</h2>
//           <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//           <h4>{props.restaurant.data?.lastMileTravelString}</h4>
//       </div>
//   );
// };

// Another way of props using, Destructing of props 

// const RestaurantCard = ({ restaurant }) => {
//   const {name,cuisines,lastMileTravelString,cloudinaryImageId} = restaurant.data;
//   return (
//       <div className="card">
//           <img alt="logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//       cloudinaryImageId} />
//           <h2>{name}</h2>
//           <h3>{cuisines.join(", ")}</h3>
//           <h4>{lastMileTravelString}</h4>
//       </div>
//   );
// };


const RestaurantCard = ({name,cuisines,costForTwoString,cloudinaryImageId,avgRating,slaString}) => {
    return (
        <div className="card shadow-lg p-2 m-2 w-60 hover:bg-gray-200">
            <img className="h-52 p-3 " alt="logo" src={
            IMG_CDN_URL +
        cloudinaryImageId} />
            <div className="card-item">
                <h3 className="card-title font-semibold  text-xl p-3 text-gray-800">{name}</h3>
                <h6 className="card-cuisine text-gray-400 px-3 w-3/4 text-sm">{cuisines.join(", ")}</h6>
            </div>
            <div className="font-semibold flex text-xs mt-2  py-2 px-3 pr-5 justify-between text-gray-700">
                <div className="rating-logo flex px-1 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 bg-green-500 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span className="bg-green-500 px-1">{avgRating}</span>
                </div>
                <h5>{slaString}</h5>
                <h5>{costForTwoString}</h5>
            </div>
        </div>
    );
  };

export default RestaurantCard;